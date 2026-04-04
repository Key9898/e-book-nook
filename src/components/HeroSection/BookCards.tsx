import { FaFilePdf } from 'react-icons/fa6'
import { LuFileAudio } from 'react-icons/lu'
import RingAnimation from './RingAnimation'
import { motion } from 'framer-motion'
import { transitions } from '../../lib/animations'

const leftTestimonial = {
  title: 'PDF Books',
  icon: FaFilePdf,
}

const rightTestimonial = {
  title: 'Audiobooks',
  icon: LuFileAudio,
}

interface BookCardsProps {
  onNavigate?: (page: string) => void
}

export default function BookCards({ onNavigate }: BookCardsProps) {
  void onNavigate
  return (
    <div className="relative isolate">
      <RingAnimation />
      <div className="mx-auto max-w-7xl sm:px-8 sm:pb-16 lg:px-8 lg:pb-16">
        {/* Mobile: Vertical stack */}
        <div className="mx-auto mt-12 grid sm:hidden max-w-xs grid-cols-1 place-items-center gap-8 text-slate-900">
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transitions.spring, delay: 0.1 }}
            whileHover={{ y: -8, rotate: -1, scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-900/10 w-[260px] h-[280px]"
          >
            <div className="absolute left-0 top-0 h-full w-3 bg-gradient-to-b from-slate-300 to-slate-200 shadow-inner z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-white z-0" />
            <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l-lg bg-gradient-to-b from-slate-200 to-white ring-1 ring-slate-300 shadow-inner z-0" />
            <div className="absolute right-0 top-1 bottom-1 w-2 rounded-r-lg bg-slate-50 border-l border-slate-200 shadow-inner z-0" />
            <motion.figcaption
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...transitions.springBouncy, delay: 0.3 }}
              className="animated-cyan-ring absolute z-[5] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center size-24 rounded-xl shadow-lg bg-white/90"
            >
              <leftTestimonial.icon className="size-16 text-cyan-700/80" aria-hidden="true" />
            </motion.figcaption>
            <figcaption className="relative z-10 mt-4 text-xl font-semibold text-cyan-700/80 text-center">
              {leftTestimonial.title}
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transitions.spring, delay: 0.2 }}
            whileHover={{ y: -8, rotate: 1, scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-900/10 w-[260px] h-[280px]"
          >
            <div className="absolute left-0 top-0 h-full w-3 bg-gradient-to-b from-slate-300 to-slate-200 shadow-inner z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white z-0" />
            <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l-lg bg-gradient-to-b from-slate-200 to-white ring-1 ring-slate-300 shadow-inner z-0" />
            <div className="absolute right-0 top-1 bottom-1 w-2 rounded-r-lg bg-slate-50 border-l border-slate-200 shadow-inner z-0" />
            <motion.figcaption
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...transitions.springBouncy, delay: 0.4 }}
              className="animated-cyan-ring absolute z-[5] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center size-24 rounded-xl shadow-lg bg-white/90"
            >
              <rightTestimonial.icon className="size-16 text-cyan-700/80" aria-hidden="true" />
            </motion.figcaption>
            <figcaption className="relative z-10 mt-4 text-xl font-semibold text-cyan-700/80 text-center">
              {rightTestimonial.title}
            </figcaption>
          </motion.figure>
        </div>

        {/* Two-card layout: visible from sm↑ */}
        <div className="mx-auto mt-12 hidden sm:grid max-w-6xl grid-cols-2 place-items-center gap-16 text-slate-900">
          {/* Left: Testimonial */}
          <motion.figure
            initial={{ opacity: 0, x: -30, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ ...transitions.spring, delay: 0.1 }}
            whileHover={{ y: -12, rotate: -2, scale: 1.03 }}
            className="lg:mb-43 group relative overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-900/10 w-[clamp(220px,38vw,320px)] h-[clamp(240px,38vw,340px)]"
          >
            <div className="absolute left-0 top-0 h-full w-3 bg-gradient-to-b from-slate-300 to-slate-200 shadow-inner z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-white z-0" />
            <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l-lg bg-gradient-to-b from-slate-200 to-white ring-1 ring-slate-300 shadow-inner z-0" />
            <div className="absolute right-0 top-1 bottom-1 w-2 rounded-r-lg bg-slate-50 border-l border-slate-200 shadow-inner z-0" />
            <motion.figcaption
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...transitions.springBouncy, delay: 0.3 }}
              className="animated-cyan-ring absolute z-[5] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center size-27 rounded-xl shadow-lg bg-white/90"
            >
              <leftTestimonial.icon className="size-20 text-cyan-700/80" aria-hidden="true" />
            </motion.figcaption>
            <figcaption className="relative z-10 mt-4 text-2xl font-semibold text-cyan-700/80 text-center">
              {leftTestimonial.title}
            </figcaption>
          </motion.figure>

          {/* Right: Testimonial */}
          <motion.figure
            initial={{ opacity: 0, x: 30, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ ...transitions.spring, delay: 0.2 }}
            whileHover={{ y: -12, rotate: 2, scale: 1.03 }}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-900/10 w-[clamp(220px,38vw,320px)] h-[clamp(240px,38vw,340px)]"
          >
            <div className="absolute left-0 top-0 h-full w-3 bg-gradient-to-b from-slate-300 to-slate-200 shadow-inner z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white z-0" />
            <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l-lg bg-gradient-to-b from-slate-200 to-white ring-1 ring-slate-300 shadow-inner z-0" />
            <div className="absolute right-0 top-1 bottom-1 w-2 rounded-r-lg bg-slate-50 border-l border-slate-200 shadow-inner z-0" />
            <motion.figcaption
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...transitions.springBouncy, delay: 0.4 }}
              className="animated-cyan-ring absolute z-[5] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center size-27 rounded-xl shadow-lg bg-white/90"
            >
              <rightTestimonial.icon className="size-20 text-cyan-700/80" aria-hidden="true" />
            </motion.figcaption>
            <figcaption className="relative z-10 mt-4 text-2xl font-semibold text-cyan-700/80 text-center">
              {rightTestimonial.title}
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </div>
  )
}
