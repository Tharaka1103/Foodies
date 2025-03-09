'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, X } from 'lucide-react'

const categories = ['All', 'Main Course', 'Appetizers', 'Desserts', 'Drinks', 'Special']

const galleryItems = [
  { id: 1, category: 'Main Course', title: 'Grilled Salmon', image: '/menu/1.jpg', description: 'Fresh Atlantic salmon with herbs' },
  { id: 2, category: 'Appetizers', title: 'Bruschetta', image: '/menu/2.jpg', description: 'Traditional Italian appetizer' },
  { id: 3, category: 'Desserts', title: 'Chocolate Cake', image: '/menu/3.jpg', description: 'Rich chocolate layer cake' },
  { id: 4, category: 'Drinks', title: 'Fruit Smoothie', image: '/menu/4.jpg', description: 'Fresh mixed berry smoothie' },
  { id: 5, category: 'Special', title: 'Chef Special', image: '/menu/1.jpg', description: 'Daily chef special' },
  { id: 6, category: 'Main Course', title: 'Beef Wellington', image: '/menu/2.jpg', description: 'Premium beef wrapped in puff pastry' },
  { id: 7, category: 'Appetizers', title: 'Calamari Rings', image: '/menu/3.jpg', description: 'Crispy fried squid rings with aioli' },
  { id: 8, category: 'Desserts', title: 'Tiramisu', image: '/menu/4.jpg', description: 'Classic Italian coffee-flavored dessert' },
  { id: 9, category: 'Drinks', title: 'Mojito', image: '/menu/1.jpg', description: 'Refreshing mint and lime cocktail' },
  { id: 10, category: 'Special', title: 'Seafood Platter', image: '/menu/2.jpg', description: 'Selection of fresh seafood' },
  { id: 11, category: 'Main Course', title: 'Chicken Marsala', image: '/menu/3.jpg', description: 'Chicken in mushroom wine sauce' },
  { id: 12, category: 'Appetizers', title: 'Spring Rolls', image: '/menu/4.jpg', description: 'Vietnamese-style fresh rolls' },
  { id: 13, category: 'Desserts', title: 'Crème Brûlée', image: '/menu/1.jpg', description: 'Classic French vanilla custard' },
  { id: 14, category: 'Drinks', title: 'Espresso Martini', image: '/menu/2.jpg', description: 'Coffee-based cocktail' },
  { id: 15, category: 'Special', title: 'Wagyu Steak', image: '/menu/3.jpg', description: 'Premium Japanese beef' }
]
export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] overflow-hidden"
      >
        <Image
          src="/background.jpg"
          alt="Gallery Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Food Gallery</h1>
            <p className="text-lg md:text-xl">Explore our culinary masterpieces</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filters Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search gallery..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(item.id)}
                >
                  <Card className="overflow-hidden cursor-pointer group">
                    <div className="relative aspect-square">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-lg font-semibold">{item.title}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full aspect-square"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems.find(item => item.id === selectedImage)?.image || ''}
                alt="Selected image"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
