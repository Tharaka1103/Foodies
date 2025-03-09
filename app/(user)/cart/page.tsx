'use client'

import { motion } from 'framer-motion'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/CartContext'

export default function CartPage() {
  const { items, totalPrice, updateQuantity, removeItem } = useCart()

  return (
    <main className="max-w-7xl mx-auto py-8 sm:py-16 px-4">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-8 sm:py-16">
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 sm:mb-8">Your cart is empty</p>
          <Button onClick={() => window.history.back()}>
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <motion.div layout className="space-y-4">
              {items.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 bg-card rounded-lg shadow"
                >
                  <div className="relative w-full sm:w-32 h-48 sm:h-32">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg sm:text-xl font-semibold">{item.name}</h3>
                      <p className="font-semibold sm:hidden">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <p className="text-primary text-base sm:text-lg">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2 border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="p-2 hover:bg-muted"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-muted"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:bg-red-500/20 p-2 rounded-md"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card p-4 sm:p-6 rounded-lg shadow sticky top-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Delivery</span>
                  <span>$5.00</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold text-base sm:text-lg">
                    <span>Total</span>
                    <span>${(totalPrice + 5).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button className="w-full">Proceed to Checkout</Button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
