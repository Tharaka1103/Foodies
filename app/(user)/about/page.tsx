'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { 
  ChefHat, 
  Heart, 
  Leaf, 
  Award,
  Users,
  Target,
  Coffee,
  Utensils
} from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[50vh] md:h-screen bg-black">
        <Image
          src="/team.jpg"
          alt="About Us Hero"
          fill
          className="object-cover opacity-70"
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-center">Our Story</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center max-w-2xl px-2 sm:px-4">
            A journey of passion, flavor, and culinary excellence since 2010
          </p>
        </motion.div>
      </section>
      {/* Vision & Mission */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-background"
      >
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-block p-3 bg-primary/10 rounded-lg">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Our Vision</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              To revolutionize the dining experience by combining traditional flavors with modern culinary innovation, creating memorable moments for every guest who walks through our doors.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-block p-3 bg-primary/10 rounded-lg">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              To serve exceptional food with unparalleled hospitality, sourcing the finest ingredients while maintaining sustainable practices and supporting local communities.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Sustainability",
                description: "Committed to eco-friendly practices and responsible sourcing"
              },
              {
                icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Community",
                description: "Building strong relationships with local suppliers and neighbors"
              },
              {
                icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Passion",
                description: "Delivering excellence in every dish with love and dedication"
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-card p-6 sm:p-8 rounded-xl shadow-lg text-center"
              >
                <div className="inline-block p-3 sm:p-4 bg-primary/10 rounded-full mb-4 sm:mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">Our Achievements</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, count: "12+", label: "Awards Won" },
              { icon: <ChefHat className="w-6 h-6 sm:w-8 sm:h-8" />, count: "25+", label: "Expert Chefs" },
              { icon: <Coffee className="w-6 h-6 sm:w-8 sm:h-8" />, count: "1M+", label: "Happy Customers" },
              { icon: <Utensils className="w-6 h-6 sm:w-8 sm:h-8" />, count: "100+", label: "Signature Dishes" }
            ].map((achievement, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-4 sm:p-6 bg-card rounded-xl shadow-lg"
              >
                <div className="text-primary text-3xl sm:text-4xl mb-3 sm:mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{achievement.count}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Join Us CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-primary text-primary-foreground"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8">Join Us for an Unforgettable Experience</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Be part of our culinary journey and experience the perfect blend of tradition and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">Make Reservation</Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">View Menu</Button>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
