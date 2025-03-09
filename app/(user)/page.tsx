'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  ChefHat, 
  Clock, 
  Coffee, 
  MapPin, 
  Phone, 
  Star,
  ArrowLeft,
  ArrowRight,
  Utensils,
  Award,
  Users 
} from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const heroImages = [
  { url: '/hero-bg1.jpg', title: 'Signature Dishes' },
  { url: '/hero-bg2.jpg', title: 'Cozy Atmosphere' },
  { url: '/hero-bg3.jpg', title: 'Expert Chefs' },
]

// Add these at the top with other imports
const reviews = [
  {
    text: "Exceptional dining experience! The ambiance, service, and food quality exceeded our expectations...",
    author: "John Doe",
    role: "Food Critic",
    rating: 5,
    avatar: "/avatar1.jpg"
  },
  {
    text: "The fusion flavors and presentation are outstanding. A must-visit restaurant for food enthusiasts!",
    author: "Sarah Smith",
    role: "Food Blogger",
    rating: 5,
    avatar: "/avatar2.jpg"
  },
  {
    text: "Innovative menu, attentive staff, and beautiful atmosphere. Every dish tells a unique story.",
    author: "Mike Johnson",
    role: "Restaurant Reviewer",
    rating: 5,
    avatar: "/avatar3.jpg"
  }
]

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextImage = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
      setIsTransitioning(false)
    }, 500)
  }

  const prevImage = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
      setIsTransitioning(false)
    }, 500)
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <div className="relative h-full">
          <Image
            src={heroImages[currentImage].url}
            alt="Hero"
            fill
            className={`object-cover transition-all duration-1000 ease-in-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <div className="absolute inset-0 bg-black/55" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 text-center px-4 tracking-tight">Foodies by Glance</h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 text-center px-4 animate-fade-in">{heroImages[currentImage].title}</p>
            <Button size="lg" className="bg-primary rounded-lg font-bold">
              Reserve Table
            </Button>
          </motion.div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentImage === index ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-colors"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Award />, title: 'Award Winning', desc: 'Multiple culinary awards' },
            { icon: <ChefHat />, title: 'Master Chefs', desc: 'World-class culinary team' },
            { icon: <Users />, title: 'Happy Customers', desc: '1000+ satisfied guests' }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-xl text-center shadow-lg"
            >
              <div className="text-orange-500 text-4xl mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Menu Preview */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Popular Dishes</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -10 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg border border-primary"
              >
                <div className="relative h-48">
                  <Image
                    src={`/menu/${item}.jpg`}
                    alt={`Dish ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Special Dish {item}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Description of this amazing dish...
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-primary text-black hover:bg-card">
                    Order Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Special Offers */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8 "
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Special Offers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.02 }}
                className="relative h-64 rounded-xl overflow-hidden"
              >
                <Image
                  src={`/menu/${item}.jpg`}
                  alt={`Offer ${item}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-2">Special Offer {item}</h3>
                  <p className="mb-4">Limited time offer description...</p>
                  <Button className="w-fit">Learn More</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reservation */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8 bg-chart-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl text-black font-bold mb-8">Make a Reservation</h2>
          <p className="text-xl text-black mb-8">
            Book your table now for an unforgettable dining experience
          </p>
          <Button size="lg" className="bg-chart-4 text-black border-2 border-black">
            Book Now
          </Button>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Guest Reviews</h2>
          <div className="flex gap-8">
            <div className="w-1/2">
              <div className="relative overflow-hidden rounded-lg">
                <motion.div
                  animate={{
                    x: [0, -100 * reviews.length],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      duration: 40,
                      ease: "linear",
                    },
                  }}
                  className="flex gap-6"
                >
                  {[...reviews, ...reviews].map((review, i) => (
                    <motion.div
                      key={i}
                      className="min-w-[400px] bg-card p-6 rounded-xl shadow-lg border border-text"
                    >
                      <div className="flex text-yellow-400 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={20} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4">{review.text}</p>
                      <div className="flex items-center gap-4">
                        <div>
                          <h4 className="font-semibold">{review.author}</h4>
                          <p className="text-sm text-muted-foreground">{review.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            
            <div className="w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">What Our Guests Say</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Discover why our guests keep coming back to experience our exceptional cuisine and service. Our commitment to quality and customer satisfaction shows in every review.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Info */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8 "
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Visit Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center"
            >
              <MapPin size={32} className="text-primary mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">123 Restaurant Street, City</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center"
            >
              <Clock size={32} className="text-primary mb-4" />
              <h3 className="font-semibold mb-2">Opening Hours</h3>
              <p className="text-muted-foreground">Mon-Sun: 11:00 - 23:00</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center"
            >
              <Phone size={32} className="text-primary mb-4" />
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-muted-foreground">+1 234 567 890</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
