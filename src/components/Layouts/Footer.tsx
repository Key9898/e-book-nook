import { motion } from 'framer-motion'
import { transitions } from '../../lib/animations'

const navigation = {
  main: [
    { name: 'Feedbacks', href: 'feedbacks' },
    { name: 'FAQs', href: 'faqs' },
    { name: 'Terms of Service', href: 'termsOfService' },
    { name: 'Privacy Policy', href: 'privacyPolicy' },
  ],
}

interface FooterProps {
  onNavigate?: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-cyan-50 to-sky-100 border-t border-gray-200">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-6 lg:px-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:flex-row-reverse">
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-3 text-base"
        >
          {navigation.main.map((item, index) => (
            <motion.button
              type="button"
              onClick={() => onNavigate?.(item.href)}
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitions.spring, delay: index * 0.1 }}
              whileHover={{ y: -2, color: '#0891b2' }}
              whileTap={{ y: 0 }}
              className="text-cyan-600"
            >
              {item.name}
            </motion.button>
          ))}
        </nav>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...transitions.smooth, delay: 0.3 }}
          className="mt-4 lg:mt-0 text-center lg:text-left text-sm/6 text-cyan-700/30"
        >
          &copy; 2025 E-Book Nook. All rights reserved. <br /> Designed and Developed by Wunna Aung.
        </motion.p>
      </div>
    </footer>
  )
}
