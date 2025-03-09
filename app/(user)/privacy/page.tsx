'use client'

import { motion } from 'framer-motion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  AlertCircle, 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Cookie, 
  Share2,
  MessageSquare,
  Globe,
  UserCheck,
  Mail,
  Phone
} from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Privacy Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertTitle>Your Privacy Matters</AlertTitle>
            <AlertDescription>
              We are committed to protecting your personal information and being transparent about how we use it.
            </AlertDescription>
          </Alert>

          <Alert variant="default">
            <Cookie className="h-4 w-4" />
            <AlertTitle>Cookie Notice</AlertTitle>
            <AlertDescription>
              This website uses cookies to enhance your browsing experience and provide personalized services.
            </AlertDescription>
          </Alert>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid gap-8"
        >
          {/* Key Privacy Points */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Key Privacy Principles
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              {[
                { icon: <Eye />, title: "Transparency", content: "Clear information about data usage" },
                { icon: <Shield />, title: "Security", content: "Advanced data protection measures" },
                { icon: <UserCheck />, title: "Control", content: "You control your data" },
                { icon: <Database />, title: "Data Minimization", content: "We collect only what's needed" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted">
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Detailed Privacy Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Privacy Policy Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] rounded-md border p-4">
                <div className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
                    <p className="text-muted-foreground">
                      We collect information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-muted-foreground">
                      <li>Name and contact information</li>
                      <li>Account credentials</li>
                      <li>Payment information</li>
                      <li>Delivery address</li>
                      <li>Order history</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
                    <p className="text-muted-foreground">
                      Your information is used to:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-muted-foreground">
                      <li>Process your orders</li>
                      <li>Communicate with you about your orders</li>
                      <li>Send you marketing communications (with your consent)</li>
                      <li>Improve our services</li>
                      <li>Prevent fraud</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">3. Data Security</h3>
                    <p className="text-muted-foreground">
                      We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">4. Cookies and Tracking</h3>
                    <p className="text-muted-foreground">
                      We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve and analyze our service.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">5. Third-Party Sharing</h3>
                    <p className="text-muted-foreground">
                      We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">6. Your Rights</h3>
                    <p className="text-muted-foreground">
                      You have the right to:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-muted-foreground">
                      <li>Access your personal data</li>
                      <li>Correct inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Object to data processing</li>
                      <li>Data portability</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">7. Updates to This Policy</h3>
                    <p className="text-muted-foreground">
                      We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
                    </p>
                  </section>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Privacy Concerns?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about our Privacy Policy, please contact our Data Protection Officer:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1">
                  <Mail className="mr-2 h-4 w-4" />
                  Email DPO
                </Button>
                <Button variant="outline" className="flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
