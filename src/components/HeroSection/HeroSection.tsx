import Header from '../Layouts/Header'
import BookCards from './BookCards'
import { useState } from 'react'
import BooksDrawer from './BooksDrawer'
import { motion } from 'framer-motion'
import { transitions, variants } from '../../lib/animations'

interface HeroSectionProps {
  onNavigate?: (page: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <div className="bg-linear-to-b from-indigo-100/20 h-[100dvh] overflow-hidden">
      <Header onNavigate={onNavigate} />
      <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
        <div
          aria-hidden="true"
          className="absolute overflow-hidden inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-cyan-600/10 ring-sky-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 pt-35 sm:px-8 sm:py-16 sm:pt-4 lg:py-24 lg:pt-16 lg:px-8">
          <div className="mx-auto max-w-2xl sm:mx-0 lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <motion.h1
              initial={variants.fadeInUp.initial}
              animate={variants.fadeInUp.animate}
              transition={{ ...transitions.spring, delay: 0.1 }}
              className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-cyan-700/90 sm:text-7xl lg:col-span-2 xl:col-auto"
            >
              Welcome to Your Personal Reading Nook
            </motion.h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <motion.p
                initial={variants.fadeIn.initial}
                animate={variants.fadeIn.animate}
                transition={{ ...transitions.smooth, delay: 0.3 }}
                className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
              >
                E-Book Nook is your personal digital library. Discover and read high-quality PDF
                books, or unwind and listen to our growing collection of curated audiobooks.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transitions.spring, delay: 0.5 }}
                className="mt-10 flex items-center gap-x-6"
              >
                <motion.button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={transitions.spring}
                  className="rounded-xl bg-cyan-700 px-3.5 py-2.5 text-base font-semibold text-white shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Browse Collection
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => onNavigate?.('feedbacks')}
                  whileHover={{ x: 4, color: '#0e7490' }}
                  whileTap={{ x: 0 }}
                  transition={transitions.quick}
                  className="text-base font-semibold text-gray-900"
                >
                  Feedbacks <span aria-hidden="true">→</span>
                </motion.button>
              </motion.div>
            </div>
            {/* BookCards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...transitions.spring, delay: 0.4 }}
              className="mt-10 w-full sm:mt-16 lg:mt-0 xl:row-span-2 xl:row-end-2 xl:mt-36"
            >
              <BookCards />
            </motion.div>
          </div>
        </div>
        {/* Drawer mounted at root of HeroSection */}
        <BooksDrawer open={drawerOpen} onOpenChange={setDrawerOpen} onNavigate={onNavigate} />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}
