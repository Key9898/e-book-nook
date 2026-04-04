/* eslint-disable react-refresh/only-export-components */
import { motion, type HTMLMotionProps, type Variants, type Easing } from 'framer-motion'
import { forwardRef, type ReactNode } from 'react'

export const transitions = {
  spring: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
  },
  springBouncy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 25,
  },
  springGentle: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 35,
  },
  smooth: {
    type: 'tween' as const,
    ease: [0.25, 0.1, 0.25, 1] as Easing,
    duration: 0.4,
  },
  snappy: {
    type: 'tween' as const,
    ease: [0.6, 0.01, -0.05, 0.95] as Easing,
    duration: 0.3,
  },
  quick: {
    type: 'tween' as const,
    ease: 'easeOut' as const,
    duration: 0.2,
  },
}

export const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  scaleInBounce: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
  slideInFromRight: {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
  },
  slideInFromLeft: {
    initial: { opacity: 0, x: '-100%' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '-100%' },
  },
  slideInFromBottom: {
    initial: { opacity: 0, y: '100%' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '100%' },
  },
  slideInFromTop: {
    initial: { opacity: 0, y: '-100%' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-100%' },
  },
}

type AnimationVariant = keyof typeof variants

interface AnimatedContainerProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  variant?: AnimationVariant
  delay?: number
  children: ReactNode
  className?: string
}

export const AnimatedContainer = forwardRef<HTMLDivElement, AnimatedContainerProps>(
  ({ variant = 'fadeInUp', delay = 0, children, className = '', ...props }, ref) => {
    const selectedVariant = variants[variant]

    return (
      <motion.div
        ref={ref}
        initial={selectedVariant.initial}
        animate={selectedVariant.animate}
        exit={selectedVariant.exit}
        transition={{ ...transitions.spring, delay }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

AnimatedContainer.displayName = 'AnimatedContainer'

interface AnimatedListProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export const AnimatedList = forwardRef<HTMLDivElement, AnimatedListProps>(
  ({ children, staggerDelay = 0.1, className = '', ...props }, ref) => {
    const containerVariants: Variants = {
      initial: {},
      animate: {
        transition: {
          staggerChildren: staggerDelay,
        },
      },
      exit: {
        transition: {
          staggerChildren: staggerDelay * 0.5,
          staggerDirection: -1,
        },
      },
    }

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

AnimatedList.displayName = 'AnimatedList'

interface AnimatedItemProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: ReactNode
  className?: string
}

export const AnimatedItem = forwardRef<HTMLDivElement, AnimatedItemProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={variants.fadeInUp}
        transition={transitions.spring}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

AnimatedItem.displayName = 'AnimatedItem'

interface AnimatedButtonProps extends Omit<HTMLMotionProps<'button'>, 'variants'> {
  children: ReactNode
  className?: string
  hoverScale?: number
  tapScale?: number
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className = '', hoverScale = 1.02, tapScale = 0.98, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: tapScale }}
        transition={transitions.quick}
        className={className}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

AnimatedButton.displayName = 'AnimatedButton'

interface AnimatedCardProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: ReactNode
  className?: string
  hoverY?: number
  hoverScale?: number
}

export const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ children, className = '', hoverY = -4, hoverScale = 1.02, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transitions.spring}
        whileHover={{ y: hoverY, scale: hoverScale }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

AnimatedCard.displayName = 'AnimatedCard'

interface PageTransitionProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: ReactNode
  className?: string
}

export const PageTransition = forwardRef<HTMLDivElement, PageTransitionProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transitions.smooth}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

PageTransition.displayName = 'PageTransition'

interface StaggerContainerProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: ReactNode
  className?: string
  staggerDelay?: number
  delayChildren?: number
}

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({ children, className = '', staggerDelay = 0.1, delayChildren = 0, ...props }, ref) => {
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren,
          staggerChildren: staggerDelay,
        },
      },
    }

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

StaggerContainer.displayName = 'StaggerContainer'

interface StaggerItemProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: ReactNode
  className?: string
}

export const StaggerItem = forwardRef<HTMLDivElement, StaggerItemProps>(
  ({ children, className = '', ...props }, ref) => {
    const itemVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: transitions.spring,
      },
    }

    return (
      <motion.div ref={ref} variants={itemVariants} className={className} {...props}>
        {children}
      </motion.div>
    )
  }
)

StaggerItem.displayName = 'StaggerItem'

export const overlayVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const modalVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 10 },
}

export const drawerVariants: Variants = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
}

export const drawerLeftVariants: Variants = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
}

export const menuVariants: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

export const hoverLift = {
  whileHover: { y: -4, boxShadow: '0 10px 40px -10px rgba(0,0,0,0.2)' },
}
