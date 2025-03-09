
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { X, CalendarDays, Clock, Users, Utensils, AlertCircle } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const timeSlots = [
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'
]

const tableTypes = [
  { value: 'standard', label: 'Standard Table (2-4 people)' },
  { value: 'booth', label: 'Booth (4-6 people)' },
  { value: 'private', label: 'Private Room (6-10 people)' },
  { value: 'outdoor', label: 'Outdoor Seating (2-4 people)' }
]

export default function ReservationsPage() {
  const [showAlert, setShowAlert] = useState(true)
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    tableType: '',
    timeSlot: '',
    specialRequests: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your reservation submission logic here
    console.log('Reservation submitted:', { ...formData, date })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-background">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-full flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-4xl md:text-6xl text-primary font-bold mb-4 text-center">Table Reservations</h1>
          <p className="text-xl text-center max-w-2xl">
            Book your perfect dining experience with us
          </p>
        </motion.div>
      </section>

      {/* Alert */}
      {showAlert && (
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <Alert variant="destructive" className="relative border-destructive bg-red-200 text-black">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important Notice</AlertTitle>
            <AlertDescription>
              For special occasions or groups larger than 10 people, please contact us directly.
            </AlertDescription>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => setShowAlert(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </Alert>
        </div>
      )}

      {/* Reservation Form */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle>Make a Reservation</CardTitle>
              <CardDescription>
                Fill out the form below to reserve your table
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      className='border border-primary'
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      className='border border-primary'
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      className='border border-primary'
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input
                      id="guests"
                      name="guests"
                      className='border border-primary'
                      type="number"
                      min="1"
                      max="10"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Reservation Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Select Time</Label>
                    <Select
                      onValueChange={(value) => 
                        setFormData(prev => ({ ...prev, timeSlot: value }))
                      }
                    >
                      <SelectTrigger
                      className='border border-primary'>
                        <SelectValue placeholder="Choose time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map(time => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Table Type */}
                <div className="space-y-2">
                  <Label>Table Type</Label>
                  <Select
                    onValueChange={(value) => 
                      setFormData(prev => ({ ...prev, tableType: value }))
                    }
                  >
                    <SelectTrigger
                      className='border border-primary'>
                      <SelectValue placeholder="Select table type" />
                    </SelectTrigger>
                    <SelectContent>
                      {tableTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    className="w-full min-h-[100px] p-3 rounded-md border border-primary"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any special requests or dietary requirements..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  Confirm Reservation
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  )
}
