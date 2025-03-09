'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, AlertCircle } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { ModernThemeSwitch } from '@/components/ModernThemeSwitch'

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    district: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({})
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [errors])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    if (errors[e.target.name]) {
      setErrors(prev => ({
        ...prev,
        [e.target.name]: ''
      }))
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      acceptTerms: checked
    }))
    if (errors.acceptTerms) {
      setErrors(prev => ({
        ...prev,
        acceptTerms: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName) newErrors.fullName = 'Full name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.contact) newErrors.contact = 'Contact number is required'
    if (!formData.district) newErrors.district = 'District is required'
    if (!formData.password) newErrors.password = 'Password is required'
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the Terms and Conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      alert('Registration successful!')
      router.push('/login')
    }
  }

  const ErrorMessage = ({ message }: { message: string }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="flex items-center gap-2 text-sm text-red-500 bg-red-50 dark:bg-red-950/50 p-2 rounded-md mt-1"
      >
        <AlertCircle className="h-4 w-4" />
        <span>{message}</span>
      </motion.div>
    </AnimatePresence>
  )

  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="absolute top-2 right-2 z-10">
            <ModernThemeSwitch />
        </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl"
      >
        <Card className="overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative min-h-[200px] md:min-h-[600px]">
              <Image
                src="/register-img.jpg"
                alt="Register"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <CardHeader className="space-y-1 px-0">
                <CardTitle className="text-2xl text-center font-bold">Create an account</CardTitle>
                <p className="text-center text-muted-foreground">
                  Enter your information to create an account
                </p>
              </CardHeader>
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="Enter your full name"
                          className={`pl-9 transition-all duration-200 ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-input hover:border-primary'}`}
                          value={formData.fullName}
                          onChange={handleInputChange}
                        />
                      </div>
                      {errors.fullName && <ErrorMessage message={errors.fullName} />}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          className={`pl-9 transition-all duration-200 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-input hover:border-primary'}`}
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      {errors.email && <ErrorMessage message={errors.email} />}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact">Contact Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="contact"
                          name="contact"
                          type="tel"
                          placeholder="Enter your contact number"
                          className={`pl-9 transition-all duration-200 ${errors.contact ? 'border-red-500 focus:ring-red-500' : 'border-input hover:border-primary'}`}
                          value={formData.contact}
                          onChange={handleInputChange}
                        />
                      </div>
                      {errors.contact && <ErrorMessage message={errors.contact} />}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="district">District</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="district"
                          name="district"
                          placeholder="Enter your district"
                          className={`pl-9 transition-all duration-200 ${errors.district ? 'border-red-500 focus:ring-red-500' : 'border-input hover:border-primary'}`}
                          value={formData.district}
                          onChange={handleInputChange}
                        />
                      </div>
                      {errors.district && <ErrorMessage message={errors.district} />}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className={`pl-9 transition-all duration-200 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-input hover:border-primary'}`}
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      {errors.password && <ErrorMessage message={errors.password} />}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className={`pl-9 transition-all duration-200 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-input hover:border-primary'}`}
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && <ErrorMessage message={errors.confirmPassword} />}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={handleCheckboxChange}
                      className={errors.acceptTerms ? 'border-red-500' : 'border-green-600'}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{' '}
                      <Link href="/terms" className="text-green-600 hover:underline">
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                  {errors.acceptTerms && <ErrorMessage message={errors.acceptTerms} />}

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 transition-colors"
                    disabled={!formData.acceptTerms}
                  >
                    Create Account
                  </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{' '}
                  <Link href="/login" className="text-green-600 hover:underline">
                    Login here
                  </Link>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </motion.div>
    </main>
  )
}
