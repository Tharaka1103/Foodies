'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageSquare,
  CalendarDays,
  Users,
  ChefHat
} from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-background">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-full flex flex-col items-center justify-center  px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-primary">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-center text-text max-w-2xl">
            We'd love to hear from you. Let us know how we can help.
          </p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <MapPin className="w-6 h-6" />,
              title: "Visit Us",
              details: ["123 Restaurant Street", "City, State 12345", "Country"]
            },
            {
              icon: <Phone className="w-6 h-6" />,
              title: "Call Us",
              details: ["+1 234 567 890", "+1 234 567 891"]
            },
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Email Us",
              details: ["info@foodies.com", "support@foodies.com"]
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Opening Hours",
              details: ["Mon-Fri: 9AM - 10PM", "Sat-Sun: 10AM - 11PM"]
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-card p-6 rounded-xl text-center shadow-lg"
            >
              <div className="text-primary mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              {item.details.map((detail, index) => (
                <p key={index} className="text-muted-foreground">{detail}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8 bg-background"
      >
        <div className="max-w-4xl mx-auto bg-card">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">Send us a Message</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Message subject" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Your message"
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full" size="lg">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Social Connect */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Connect With Us</h2>
          <div className="flex justify-center gap-8 mb-12">
            {[
              { icon: <Facebook className="w-6 h-6" />, label: "Facebook" },
              { icon: <Instagram className="w-6 h-6" />, label: "Instagram" },
              { icon: <Twitter className="w-6 h-6" />, label: "Twitter" },
              { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="p-4 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <MessageSquare />, count: "24/7", label: "Support" },
              { icon: <CalendarDays />, count: "365", label: "Days Open" },
              { icon: <Users />, count: "1M+", label: "Happy Customers" },
              { icon: <ChefHat />, count: "25+", label: "Expert Chefs" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6"
              >
                <div className="text-primary text-3xl mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{stat.count}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  )
}
