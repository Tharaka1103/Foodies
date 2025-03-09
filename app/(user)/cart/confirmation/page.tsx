'use client'

import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  CheckCircle2,
  Truck,
  ChefHat,
  Package,
  Clock,
  MapPin,
  Receipt,
  ArrowRight,
  Phone,
  Mail,
  User,
  CreditCard,
  CalendarDays
} from 'lucide-react'

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const encodedData = searchParams.get('data')
  const orderData = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : null

  const orderStages = [
    { icon: <CheckCircle2 />, label: "Order Confirmed", status: "completed" },
    { icon: <ChefHat />, label: "Preparing", status: "current" },
    { icon: <Package />, label: "Ready for Delivery", status: "pending" },
    { icon: <Truck />, label: "Out for Delivery", status: "pending" },
  ]

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground">
            Thank you for your order. Your order number is <span className="font-semibold">{orderData?.orderId}</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Order placed on {currentDate}
          </p>
        </motion.div>

        {/* Order Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Order Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="flex justify-between mb-8">
                  {orderStages.map((stage, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center relative z-10 ${
                        stage.status === 'completed' ? 'text-green-600' :
                        stage.status === 'current' ? 'text-primary' :
                        'text-muted-foreground'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        stage.status === 'completed' ? 'bg-green-100' :
                        stage.status === 'current' ? 'bg-primary/20' :
                        'bg-muted'
                      }`}>
                        {stage.icon}
                      </div>
                      <span className="text-sm mt-2">{stage.label}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute top-5 left-0 right-0 h-[2px] bg-muted -z-10">
                  <div className="h-full bg-green-600" style={{ width: '30%' }} />
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" />
                  Estimated delivery time: {orderData?.estimatedDelivery}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Order Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="w-5 h-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData?.items.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.quantity}x {item.name}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${orderData?.totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Delivery Fee</span>
                      <span>$5.00</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${(orderData?.totalPrice + 5).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Customer Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span>{orderData?.formData.firstName} {orderData?.formData.lastName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>{orderData?.formData.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{orderData?.formData.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Delivery Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Delivery Address</label>
                    <p className="font-medium">
                      {orderData?.formData.address}<br />
                      {orderData?.formData.city}, {orderData?.formData.postalCode}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Payment Method</label>
                    <div className="font-medium flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      {orderData?.paymentMethod === 'card' ? 'Credit Card' : 'Cash on Delivery'}
                    </div>
                  </div>
                  {orderData?.formData.notes && (
                    <div>
                      <label className="text-sm text-muted-foreground">Order Notes</label>
                      <p className="font-medium">{orderData.formData.notes}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="outline" onClick={() => window.print()}>
            Print Receipt
          </Button>
          <Button onClick={() => window.location.href = '/'}>
            Continue Shopping
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </main>
  )
}
