"use client"

import { useTheme } from '@/providers/ThemeProvider'
import { HiLightBulb } from 'react-icons/hi'

export const ModernThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="relative cursor-pointer select-none" onClick={toggleTheme}>
      <div className="flex flex-col items-center">
        <div
          className={`text-4xl md:text-5xl ${
            theme === 'dark' ? 'text-gray-600' : 'text-yellow-400'
          }`}
          style={{ transform: 'rotate(180deg)' }}
        >
          <HiLightBulb />
        </div>
        <div
          className="absolute w-32 h-32 rounded-full opacity-20"
          style={{
            background: theme === 'dark' ? 'none' : 'radial-gradient(circle, rgba(255,223,0,1) 0%, rgba(255,223,0,0) 70%)',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </div>
    </div>
  )
}
