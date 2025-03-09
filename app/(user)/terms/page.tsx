'use client'

import { motion } from 'framer-motion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AlertCircle, FileText, Shield, Scale, Users, CheckCircle } from 'lucide-react'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Important Notice Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important Notice</AlertTitle>
            <AlertDescription>
              Please read these terms and conditions carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
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
          {/* Key Points */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Key Points Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {[
                { icon: <Users />, title: "User Eligibility", content: "Must be 18 years or older to use our services" },
                { icon: <Shield />, title: "Privacy & Security", content: "We protect your personal information" },
                { icon: <Scale />, title: "Legal Compliance", content: "Users must comply with all applicable laws" },
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

          {/* Detailed Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Detailed Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] rounded-md border p-4">
                <div className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h3>
                    <p className="text-muted-foreground">
                      By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">2. User Account</h3>
                    <p className="text-muted-foreground">
                      To access certain features of the website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">3. Ordering and Payment</h3>
                    <p className="text-muted-foreground">
                      All orders are subject to availability and confirmation of the order price. Payment must be made in full before the delivery of any products.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">4. Delivery Policy</h3>
                    <p className="text-muted-foreground">
                      We aim to deliver your order within the estimated delivery time. However, delays may occur due to unforeseen circumstances.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">5. Refund Policy</h3>
                    <p className="text-muted-foreground">
                      Refunds are processed according to our refund policy. Please contact our customer service for more information.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">6. Privacy Policy</h3>
                    <p className="text-muted-foreground">
                      Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">7. Intellectual Property</h3>
                    <p className="text-muted-foreground">
                      All content on this website is protected by copyright and intellectual property laws.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">8. Limitation of Liability</h3>
                    <p className="text-muted-foreground">
                      We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                    </p>
                  </section>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Questions or Concerns?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
