'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, Coffee, Beef, Fish, Salad, Pizza, IceCream } from 'lucide-react'
import Image from 'next/image'

// Sample menu data
const menuItems = [
  {
    id: 1,
    name: "Grilled Ribeye Steak",
    category: "main",
    type: "non-veg",
    price: 599,
    description: "Premium cut ribeye steak grilled to perfection with herb butter",
    image: "/menu/1.jpg",
    spicyLevel: "medium",
    dietary: ["gluten-free"],
    popular: true
  },
  {
    id: 2,
    name: "Mediterranean Salad",
    category: "starter",
    type: "veg",
    price: 699,
    description: "Fresh mixed greens with feta, olives, and balsamic dressing",
    image: "/menu/2.jpg",
    spicyLevel: "mild",
    dietary: ["vegetarian", "gluten-free"],
    popular: false
  },
  {
    id: 3,
    name: "Spicy Thai Curry",
    category: "main",
    type: "non-veg",
    price: 2499,
    description: "Aromatic coconut curry with chicken and fresh vegetables",
    image: "/menu/3.jpg",
    spicyLevel: "hot",
    dietary: ["gluten-free"],
    popular: true
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    category: "dessert",
    type: "veg",
    price: 999,
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    image: "/menu/4.jpg",
    spicyLevel: "mild",
    dietary: ["vegetarian"],
    popular: true
  },
  {
    id: 5,
    name: "Artisanal Pizza",
    category: "main",
    type: "veg",
    price: 1899,
    description: "Wood-fired pizza with fresh mozzarella, basil, and cherry tomatoes",
    image: "/menu/1.jpg",
    spicyLevel: "mild",
    dietary: ["vegetarian"],
    popular: true
  },
  {
    id: 6,
    name: "Mango Lassi",
    category: "beverages",
    type: "veg",
    price: 599,
    description: "Traditional Indian yogurt drink blended with fresh mangoes",
    image: "/menu/2.jpg",
    spicyLevel: "mild",
    dietary: ["vegetarian", "gluten-free"],
    popular: false
  },
  {
    id: 7,
    name: "Vegan Buddha Bowl",
    category: "main",
    type: "veg",
    price: 1699,
    description: "Quinoa bowl with roasted vegetables, avocado, and tahini dressing",
    image: "/menu/3.jpg",
    spicyLevel: "mild",
    dietary: ["vegan", "gluten-free"],
    popular: false
  },
  {
    id: 8,
    name: "Bruschetta",
    category: "starter",
    type: "veg",
    price: 1199,
    description: "Toasted bread topped with diced tomatoes, garlic, and fresh basil",
    image: "/menu/4.jpg",
    spicyLevel: "mild",
    dietary: ["vegetarian"],
    popular: true
  },
  {
    id: 9,
    name: "Seafood Paella",
    category: "main",
    type: "non-veg",
    price: 1599,
    description: "Spanish rice dish with mixed seafood, saffron, and vegetables",
    image: "/menu/1.jpg",
    spicyLevel: "medium",
    dietary: ["gluten-free"],
    popular: true
  },
  {
    id: 10,
    name: "Craft Beer",
    category: "beverages",
    type: "veg",
    price: 1299,
    description: "Local artisanal IPA with citrus notes",
    image: "/menu/2.jpg",
    spicyLevel: "mild",
    dietary: ["vegan", "gluten-free"],
    popular: false
  },
  {
    id: 11,
    name: "Tiramisu",
    category: "dessert",
    type: "veg",
    price: 899,
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
    image: "/menu/3.jpg",
    spicyLevel: "mild",
    dietary: ["vegetarian"],
    popular: true
  }
]
const categories = ["All", "Starter", "Main", "Dessert", "Beverages"]
const dietaryOptions = ["All", "Vegetarian", "Vegan", "Gluten-free"]
const spicyLevels = ["All", "Mild", "Medium", "Hot"]

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDietary, setSelectedDietary] = useState('All')
  const [selectedSpicyLevel, setSelectedSpicyLevel] = useState('All')

  // Filter logic
  const filteredMenu = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesDietary = selectedDietary === 'All' || item.dietary.includes(selectedDietary.toLowerCase())
    const matchesSpicy = selectedSpicyLevel === 'All' || item.spicyLevel === selectedSpicyLevel.toLowerCase()

    return matchesSearch && matchesCategory && matchesDietary && matchesSpicy
  })

  return (
    <main className="w-full min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-background">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-full flex flex-col items-center justify-center  px-4"
        >
          <h1 className="text-4xl md:text-6xl text-primary font-bold mb-4 text-center">Our Menu</h1>
          <p className="text-xl text-text text-center max-w-2xl">
            Discover our carefully curated selection of dishes
          </p>
        </motion.div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search menu..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedDietary}>
              <SelectTrigger>
                <SelectValue placeholder="Dietary" />
              </SelectTrigger>
              <SelectContent>
                {dietaryOptions.map(option => (
                  <SelectItem key={option} value={option.toLowerCase()}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedSpicyLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Spicy Level" />
              </SelectTrigger>
              <SelectContent>
                {spicyLevels.map(level => (
                  <SelectItem key={level} value={level.toLowerCase()}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    {item.popular && (
                      <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-sm">
                        Popular
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mb-4">
                      {item.dietary.map((diet) => (
                        <span
                          key={diet}
                          className="bg-muted px-2 py-1 rounded-full text-xs"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-primary">
                      LKR: {item.price.toFixed(2)} /=
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Order</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
