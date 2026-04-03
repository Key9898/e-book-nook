# E-Book Nook - Project Rules

> **IMPORTANT:** All AI agents (CodeX, Claude, Antigravity, Trae, VSCode IDEs, GitHub Copilot, Cursor) MUST follow these rules when working on this project.

---

## 1. Core Development Rules

### 1.1 CSS Rules

- **NO inline CSS** - Never use `style={{}}` props or inline styles
- All styling must be done via Tailwind CSS utility classes
- Custom CSS only in designated files if absolutely necessary
- Use Tailwind's `@apply` for repeated class combinations

### 1.2 Git Rules

- **Complete .gitignore** - All unnecessary files must be ignored
- Never commit:
  - `node_modules/`, `dist/`, `build/`
  - `.env`, `.env.local`, `.env.*`
  - IDE settings (`.vscode/`, `.idea/`)
  - OS files (`.DS_Store`, `Thumbs.db`)
  - Log files (`*.log`)
  - Cache files (`.eslintcache`, `.cache/`)

### 1.3 Mind Your Own Business (MYOB) Rule

- **NEVER modify** existing correct UI/UX, Logic, or Functions
- Only modify what you are explicitly asked to change
- Respect previous work by other agents/developers
- Focus ONLY on the assigned task
- Do not refactor code that works correctly
- Do not change styling unless explicitly requested

### 1.4 Documentation Rules

- **CHANGELOG.md** - Update after EVERY change
- **LAST_SESSION_SUMMARY.md** - Update at end of each session
- Document what was changed, why, and any impacts
- Include file paths and line numbers for reference

### 1.5 Git Push Workflow

Before EVERY git push:

1. Run `npm run storybook` - Build Storybook
2. Run `npm run format` - Run Prettier
3. Run `npm run lint` - Run ESLint
4. Fix ALL issues before committing
5. Update CHANGELOG.md
6. Update LAST_SESSION_SUMMARY.md
7. Commit with descriptive message
8. Push to repository

---

## 2. Project Structure Rules

### 2.1 Modular Component Architecture

```
src/
├── components/              # Modular Components
│   └── ComponentName/       # Each component in own folder
│       ├── ComponentName.tsx        # UI (Dumb)
│       ├── ComponentName.types.ts   # TypeScript types
│       ├── ComponentName.stories.tsx # Storybook stories
│       └── index.ts                 # Barrel export
│
├── hooks/                   # Smart Logic (Reusable)
│   ├── useModal.ts
│   ├── useAuth.ts
│   └── ...
│
├── utils/                   # API Calls, Formatters, Validators
│   ├── api.ts
│   ├── formatters.ts
│   ├── validators.ts
│   └── ...
│
├── demo/                    # Demo & Mock Data
│   └── mocks/
│       └── mockData.ts
│
├── types/                   # Global TypeScript Types
│   └── index.ts
│
├── lib/                     # Utility Libraries
│   └── utils.ts
│
├── assets/                  # Static Assets
├── App.tsx                  # Main Application
└── main.tsx                 # Entry Point
```

### 2.2 Component Classification

| Type              | Location                         | Purpose                           |
| ----------------- | -------------------------------- | --------------------------------- |
| **Dumb (UI)**     | `components/*/ComponentName.tsx` | Pure UI/UX, no business logic     |
| **Smart (Logic)** | `hooks/use*.ts`                  | Reusable business logic           |
| **API/Functions** | `utils/*.ts`                     | API calls, formatters, validators |
| **Mock Data**     | `demo/mocks/*.ts`                | Test data for development         |

### 2.3 File Naming Conventions

| Type       | Convention                  | Example                 |
| ---------- | --------------------------- | ----------------------- |
| Components | PascalCase                  | `PdfReader.tsx`         |
| Hooks      | camelCase with `use` prefix | `useModal.ts`           |
| Utils      | camelCase                   | `formatters.ts`         |
| Types      | PascalCase                  | `BookProgress.ts`       |
| Stories    | ComponentName.stories.tsx   | `PdfReader.stories.tsx` |

---

## 3. Code Quality Rules

### 3.1 TypeScript Rules

- **Strict mode enabled** - No `any` types unless absolutely necessary
- Define interfaces for all props and state
- Use proper type imports: `import type { ... }`
- Export types from dedicated files

### 3.2 React Rules

- Use functional components with hooks
- Use `const` for components: `const Component = () => {}`
- Destructure props in function signature
- Use proper React imports: `import { useState, useEffect } from 'react'`

### 3.3 Component Rules

- One component per file
- Keep components under 200 lines
- Extract complex logic to hooks
- Use barrel exports (`index.ts`)

### 3.4 Import Order

```typescript
// 1. React imports
import { useState, useEffect } from 'react'

// 2. Third-party imports
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

// 3. Internal imports (absolute)
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'

// 4. Relative imports
import { LocalComponent } from './LocalComponent'

// 5. Type imports
import type { Props } from './types'
```

---

## 4. Firebase Rules

### 4.1 Firestore Structure

```
firestore/
├── users/{uid}/
│   ├── readingProgress/{bookId}
│   ├── audioProgress/{bookId}
│   ├── favorites/{bookId}
│   ├── recentlyViewed/{bookId}
│   ├── my_library/{bookId}
│   ├── readingTime/{id}
│   └── appActivity/{date}
├── reviews/
├── notifications/
└── mindmaps/{uid}
```

### 4.2 Security Rules

- Users can only read/write their own data
- Reviews are public read, authenticated write
- Admin functions restricted by email
- Always validate data on client before Firestore write

### 4.3 Error Handling

- Always wrap Firebase calls in try-catch
- Provide user-friendly error messages
- Log errors to console in development
- Use Firebase error codes for specific handling

---

## 5. UI/UX Rules

### 5.1 Design Principles

- **Mobile-first** responsive design
- **Accessible** - ARIA labels, keyboard navigation
- **Consistent** - Use design tokens via Tailwind
- **Clean** - Avoid clutter, use whitespace

### 5.2 Animation Rules

- Use Framer Motion for all animations
- Keep animations subtle and purposeful
- Respect `prefers-reduced-motion`
- Duration should be 200-500ms for UI interactions

### 5.3 Icon Rules

- Use Lucide Icons consistently
- Size icons appropriately (16px, 20px, 24px)
- Include aria-label for icon-only buttons

### 5.4 Responsive Design Rules (CRITICAL)

**ALL components MUST be fully responsive on ALL devices and screen sizes.**

#### Supported Devices & Breakpoints

| Device        | Screen Size     | Tailwind Prefix |
| ------------- | --------------- | --------------- |
| Mobile        | < 640px         | (default)       |
| Tablet        | 640px - 1023px  | `sm:`, `md:`    |
| Desktop       | 1024px - 1279px | `lg:`           |
| Large Desktop | 1280px+         | `xl:`, `2xl:`   |

#### Mobile-First Approach

- Write base styles for mobile first (no prefix)
- Add breakpoint prefixes for larger screens
- Example: `className="text-sm md:text-base lg:text-lg"`

#### Required Responsive Patterns

```tsx
// Grid: 1 col mobile → 2 cols tablet → 3-4 cols desktop
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

// Flex: column mobile → row desktop
<div className="flex flex-col md:flex-row gap-4">

// Responsive spacing
<div className="p-4 md:p-6 lg:p-8">

// Responsive typography
<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">

// Hide/Show by device
<div className="hidden md:block">Desktop only</div>
<div className="md:hidden">Mobile/Tablet only</div>
```

#### Touch-Friendly Requirements

- Minimum touch target: **44px x 44px**
- Adequate spacing between interactive elements
- No hover-only interactions on mobile

#### Forbidden Responsive Practices

- ❌ Fixed pixel widths that overflow on mobile
- ❌ Horizontal scrolling on any screen size
- ❌ Touch targets smaller than 44px
- ❌ Hover-only functionality on touch devices
- ❌ Text smaller than 12px on any device
- ❌ Elements cut off on any screen size

---

## 6. Testing Rules

### 6.1 Storybook

- Create stories for all components
- Include multiple variants/states
- Document props and usage
- Test accessibility with addon-a11y

### 6.2 Unit Tests (Future)

- Test hooks in isolation
- Test utility functions
- Mock Firebase for tests
- Aim for >80% coverage

---

## 7. Performance Rules

### 7.1 Bundle Size

- Lazy load routes and heavy components
- Use dynamic imports for large libraries
- Monitor bundle size with each PR
- Target <500KB initial bundle

### 7.2 React Performance

- Use `useMemo` for expensive calculations
- Use `useCallback` for event handlers passed to children
- Avoid unnecessary re-renders
- Use React DevTools Profiler

### 7.3 Firebase Performance

- Use `onSnapshot` for real-time data
- Unsubscribe from listeners on unmount
- Batch writes when possible
- Use pagination for large collections

---

## 8. Environment Variables

### 8.1 Required Variables

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
VITE_RECAPTCHA_SITE_KEY=
```

### 8.2 Rules

- Never commit `.env` files
- Use `VITE_` prefix for client-side variables
- Validate variables at app startup
- Provide fallbacks for optional variables

---

## 9. Error Handling Rules

### 9.1 User-Facing Errors

- Show user-friendly messages
- Provide actionable solutions
- Use toast notifications for transient errors
- Use inline validation for forms

### 9.2 Developer Errors

- Log to console in development
- Include stack traces in development
- Use error boundaries for React errors
- Report to monitoring service in production

---

## 10. Security Rules

### 10.1 Authentication

- Never store passwords in code
- Use Firebase Auth for all authentication
- Implement proper session management
- Use App Check for API protection

### 10.2 Data Protection

- Never expose sensitive data in client code
- Use Firestore security rules
- Validate all user input
- Sanitize data before display

---

## 11. Agent-Specific Instructions

### 11.1 Before Starting Any Task

1. Read PROJECT_PLAN.md
2. Read LAST_SESSION_SUMMARY.md
3. Read CHANGELOG.md
4. Understand the current state of the project

### 11.2 During Development

1. Follow MYOB rule strictly
2. Only modify what is requested
3. Test changes locally
4. Update documentation as you go

### 11.3 After Completing Task

1. Update CHANGELOG.md
2. Update LAST_SESSION_SUMMARY.md
3. Run linting and formatting
4. Verify no regressions

---

## 12. Quick Reference Commands

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Format
npm run format

# Storybook
npm run storybook

# Type Check
npm run typecheck
```

---

## 13. Forbidden Actions

- ❌ Never use inline CSS
- ❌ Never commit .env files
- ❌ Never modify unrelated code
- ❌ Never skip documentation updates
- ❌ Never push without running lint/format
- ❌ Never use `any` type without justification
- ❌ Never ignore TypeScript errors
- ❌ Never break existing functionality

---

## 14. Contact & Resources

- **Project Plan:** [PROJECT_PLAN.md](./PROJECT_PLAN.md)
- **Changelog:** [CHANGELOG.md](./CHANGELOG.md)
- **Last Session:** [LAST_SESSION_SUMMARY.md](./LAST_SESSION_SUMMARY.md)

---

## 15. Routing Rules

### 15.1 Hash-Based Routing (CRITICAL)

**This project uses custom hash-based SPA routing, NOT React Router.**

```tsx
// CORRECT: Hash-based navigation
window.location.hash = 'collections'
handleNavigate('collections')

// INCORRECT: React Router navigation
navigate('/collections')  // DO NOT USE
<Link to="/collections">  // DO NOT USE
```

### 15.2 Navigation Function

```tsx
// Use handleNavigate from App.tsx context
const handleNavigate = (slug: string) => {
  window.location.hash = slug
  setCurrentPage(slug)
  window.scrollTo({ top: 0, behavior: 'auto' })
}
```

### 15.3 Route Protection

| Route             | Auth Required | Notes           |
| ----------------- | ------------- | --------------- |
| `#home`           | No            | Public landing  |
| `#collections`    | No            | Public browsing |
| `#pdfBooks`       | No            | Public browsing |
| `#audiobooks`     | No            | Public browsing |
| `#reviews`        | No            | Public viewing  |
| `#readingGoals`   | Yes           | User data       |
| `#accountSetting` | Yes           | User data       |
| `/admin-panel`    | Yes (Admin)   | Admin only      |

### 15.4 Adding New Routes

1. Add route case in App.tsx switch statement
2. Add to route map in PROJECT_PLAN.md
3. Update navigation components
4. Test hash navigation works

---

## 16. State Management Rules

### 16.1 State Hierarchy

| State Type          | Location                | Use Case                      |
| ------------------- | ----------------------- | ----------------------------- |
| **Local State**     | `useState` in component | UI-only state (modals, forms) |
| **Context State**   | React Context           | Auth, theme, navigation       |
| **Firestore State** | Firebase Firestore      | Persistent user data          |
| **localStorage**    | Browser storage         | Offline fallback, preferences |

### 16.2 When to Use What

```tsx
// LOCAL STATE: UI-only, not shared
const [isOpen, setIsOpen] = useState(false)
const [formData, setFormData] = useState({})

// CONTEXT: Shared across components
// Auth context (already exists)
// Theme context (dark mode)
// Navigation context (current page)

// FIRESTORE: Persistent user data
// Reading progress
// Favorites
// Reviews
// User settings

// localStorage: Offline fallback
// Last page visited
// Cached progress
// Theme preference
```

### 16.3 State Rules

1. **Never duplicate state** - Single source of truth
2. **Lift state up** only when needed by siblings
3. **Use Context sparingly** - Only for truly global state
4. **Prefer Firestore** for persistent data
5. **Sync localStorage** with Firestore for offline support

### 16.4 Context Structure

```tsx
// Current contexts in App.tsx
;-AuthContext(user, loading, signIn, signUp, signOut) -
  Navigation(currentPage, handleNavigate) -
  // Planned contexts
  ThemeContext(darkMode, toggleTheme) -
  ProgressContext(bookProgress, audioProgress)
```

---

## 17. Git Branch Strategy

### 17.1 Branch Naming

| Branch Type | Pattern               | Example                  |
| ----------- | --------------------- | ------------------------ |
| Feature     | `feature/description` | `feature/pdf-reader`     |
| Bugfix      | `fix/description`     | `fix/auth-redirect`      |
| Hotfix      | `hotfix/description`  | `hotfix/firebase-crash`  |
| Release     | `release/vX.Y.Z`      | `release/v1.2.0`         |
| Docs        | `docs/description`    | `docs/api-documentation` |

### 17.2 Branch Workflow

```
main (production)
  └── develop (integration)
        ├── feature/new-feature
        ├── fix/bug-fix
        └── ...
```

### 17.3 Merge Rules

1. **Never commit directly to main**
2. Create feature branch from develop
3. Complete work and test thoroughly
4. Create Pull Request to develop
5. After review, merge to develop
6. When ready for release, merge develop to main

### 17.4 Branch Protection

- `main` - Protected, requires PR and review
- `develop` - Protected, requires PR
- Feature branches - Delete after merge

---

## 18. Commit Message Format

### 18.1 Conventional Commits

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### 18.2 Commit Types

| Type       | Description   | Example                            |
| ---------- | ------------- | ---------------------------------- |
| `feat`     | New feature   | `feat(reader): add page zoom`      |
| `fix`      | Bug fix       | `fix(auth): resolve redirect loop` |
| `docs`     | Documentation | `docs: update README`              |
| `style`    | Formatting    | `style: format components`         |
| `refactor` | Code refactor | `refactor(hooks): extract useAuth` |
| `test`     | Adding tests  | `test: add PdfReader tests`        |
| `chore`    | Maintenance   | `chore: update dependencies`       |
| `perf`     | Performance   | `perf: lazy load images`           |

### 18.3 Scope Examples

| Scope      | Description            |
| ---------- | ---------------------- |
| `auth`     | Authentication related |
| `reader`   | PDF/Audio reader       |
| `ui`       | UI components          |
| `firebase` | Firebase integration   |
| `routing`  | Navigation/routing     |
| `hooks`    | Custom hooks           |

### 18.4 Commit Examples

```bash
# Good commits
feat(reader): add bookmark feature for PDF books
fix(auth): resolve Google sign-in redirect issue
docs(rules): add routing documentation
refactor(hooks): extract progress logic to useProgress

# Bad commits
fixed stuff
updated code
changes
WIP
```

---

## 19. Code Review Checklist

### 19.1 Before Creating PR

- [ ] Code compiles without errors
- [ ] TypeScript strict mode passes
- [ ] ESLint passes with no warnings
- [ ] Prettier formatting applied
- [ ] All components are responsive
- [ ] No inline CSS used
- [ ] No `any` types without justification
- [ ] Console logs removed (or dev-only)
- [ ] Documentation updated

### 19.2 Code Quality Checks

- [ ] Components under 200 lines
- [ ] Logic extracted to hooks
- [ ] Proper TypeScript types defined
- [ ] No prop drilling (use context/hooks)
- [ ] Error handling implemented
- [ ] Loading states handled
- [ ] Edge cases considered

### 19.3 UI/UX Checks

- [ ] Mobile-first responsive design
- [ ] Touch targets ≥ 44px
- [ ] ARIA labels present
- [ ] Keyboard navigation works
- [ ] Dark mode compatible
- [ ] Animations respect reduced-motion
- [ ] No horizontal scroll on mobile

### 19.4 Firebase Checks

- [ ] Security rules updated if needed
- [ ] Error handling for Firebase calls
- [ ] Unsubscribe from listeners on unmount
- [ ] Data validated before write
- [ ] Offline handling implemented

---

## 20. Debugging Guidelines

### 20.1 Development Tools

| Tool              | Purpose                      |
| ----------------- | ---------------------------- |
| React DevTools    | Component tree, props, state |
| Firebase Emulator | Local Firebase testing       |
| Browser DevTools  | Network, console, elements   |
| React Profiler    | Performance analysis         |

### 20.2 Common Issues & Solutions

| Issue            | Debug Steps                             |
| ---------------- | --------------------------------------- |
| Auth not working | Check Firebase config, check emulator   |
| Data not loading | Check Firestore rules, check network    |
| Routing broken   | Check hash value, check localStorage    |
| Styling issues   | Check Tailwind classes, check dark mode |
| Build errors     | Check TypeScript errors, check imports  |

### 20.3 Logging Standards

```tsx
// Development only
if (import.meta.env.DEV) {
  console.log('Debug info:', data)
}

// Error logging (always)
console.error('Error in function:', error)

// Firebase errors
catch (error) {
  if (import.meta.env.DEV) {
    console.error('Firebase error:', error)
  }
  // Show user-friendly message
  toast.error('Something went wrong. Please try again.')
}
```

### 20.4 Debug Checklist

1. Check browser console for errors
2. Check network tab for failed requests
3. Check Firebase emulator logs
4. Check React DevTools for state
5. Check localStorage for cached data
6. Check hash routing in URL

---

## 21. Browser Support

### 21.1 Supported Browsers

| Browser | Minimum Version | Notes          |
| ------- | --------------- | -------------- |
| Chrome  | 90+             | Primary target |
| Firefox | 88+             | Full support   |
| Safari  | 14+             | Full support   |
| Edge    | 90+             | Chromium-based |
| Opera   | 76+             | Chromium-based |

### 21.2 Mobile Browsers

| Browser          | Minimum Version |
| ---------------- | --------------- |
| Chrome Mobile    | 90+             |
| Safari iOS       | 14+             |
| Firefox Mobile   | 88+             |
| Samsung Internet | 14+             |

### 21.3 Features Used

| Feature       | Support                |
| ------------- | ---------------------- |
| CSS Grid      | All supported browsers |
| CSS Flexbox   | All supported browsers |
| ES2020+       | All supported browsers |
| Web Audio API | All supported browsers |
| PDF.js        | All supported browsers |
| localStorage  | All supported browsers |

### 21.4 Polyfills

- No polyfills currently required
- Target ES2020 in TypeScript config
- Vite handles browser targeting

---

## 22. Responsive Breakpoints

### 22.1 Tailwind Breakpoints

| Breakpoint  | Prefix | Min Width | Typical Device |
| ----------- | ------ | --------- | -------------- |
| Default     | (none) | 0px       | Mobile         |
| Small       | `sm:`  | 640px     | Large mobile   |
| Medium      | `md:`  | 768px     | Tablet         |
| Large       | `lg:`  | 1024px    | Desktop        |
| Extra Large | `xl:`  | 1280px    | Large desktop  |
| 2XL         | `2xl:` | 1536px    | Wide screens   |

### 22.2 Usage Patterns

```tsx
// Grid layouts
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

// Typography
<h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">

// Spacing
<div className="p-3 sm:p-4 md:p-6 lg:p-8">

// Flex direction
<div className="flex flex-col md:flex-row">

// Hide/Show
<div className="hidden lg:block">Desktop only</div>
<div className="lg:hidden">Mobile/Tablet only</div>

// Container width
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

### 22.3 Mobile-First Rule

Always write base styles for mobile, then add breakpoints:

```tsx
// CORRECT: Mobile-first
<div className="text-sm md:text-base lg:text-lg">

// INCORRECT: Desktop-first
<div className="text-lg md:text-base sm:text-sm">
```

---

## 23. Color Palette

### 23.1 Primary Colors

| Color     | Light Mode | Dark Mode | Usage                   |
| --------- | ---------- | --------- | ----------------------- |
| Primary   | `#3B82F6`  | `#60A5FA` | Buttons, links, accents |
| Secondary | `#8B5CF6`  | `#A78BFA` | Secondary actions       |
| Success   | `#22C55E`  | `#4ADE80` | Success states          |
| Warning   | `#F59E0B`  | `#FBBF24` | Warning states          |
| Error     | `#EF4444`  | `#F87171` | Error states            |

### 23.2 Background Colors

| Color      | Light Mode | Dark Mode | Usage             |
| ---------- | ---------- | --------- | ----------------- |
| Background | `#FFFFFF`  | `#0F172A` | Page background   |
| Surface    | `#F8FAFC`  | `#1E293B` | Cards, panels     |
| Elevated   | `#FFFFFF`  | `#334155` | Modals, dropdowns |

### 23.3 Text Colors

| Color     | Light Mode | Dark Mode | Usage           |
| --------- | ---------- | --------- | --------------- |
| Primary   | `#0F172A`  | `#F8FAFC` | Main text       |
| Secondary | `#64748B`  | `#94A3B8` | Secondary text  |
| Muted     | `#94A3B8`  | `#64748B` | Disabled, hints |

### 23.4 Tailwind Usage

```tsx
// Use Tailwind's dark mode classes
<div className="bg-white dark:bg-slate-900">
<p className="text-slate-900 dark:text-slate-100">

// Semantic colors
<button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-400">
<span className="text-green-500">Success</span>
<span className="text-red-500">Error</span>
```

---

## 24. Accessibility (a11y)

### 24.1 WCAG 2.1 AA Compliance

All components must meet WCAG 2.1 Level AA standards.

### 24.2 Required Practices

| Requirement           | Implementation                            |
| --------------------- | ----------------------------------------- |
| Color Contrast        | Minimum 4.5:1 for text                    |
| Focus Indicators      | Visible focus on all interactive elements |
| Keyboard Navigation   | All functions accessible via keyboard     |
| Screen Reader Support | ARIA labels and roles                     |
| Alt Text              | All images have descriptive alt text      |
| Form Labels           | All inputs have associated labels         |

### 24.3 ARIA Patterns

```tsx
// Buttons with icons
<button aria-label="Close menu">
  <XIcon aria-hidden="true" />
</button>

// Form inputs
<label htmlFor="email">Email</label>
<input id="email" type="email" aria-required="true" />

// Live regions
<div role="status" aria-live="polite">
  {loading && <span>Loading...</span>}
</div>

// Modal dialogs
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Modal Title</h2>
</div>
```

### 24.4 Keyboard Navigation

| Key         | Action                             |
| ----------- | ---------------------------------- |
| Tab         | Move to next focusable element     |
| Shift+Tab   | Move to previous focusable element |
| Enter/Space | Activate buttons, links            |
| Escape      | Close modals, dropdowns            |
| Arrow keys  | Navigate lists, menus              |

### 24.5 Testing Tools

- axe DevTools browser extension
- Lighthouse accessibility audit
- NVDA screen reader testing
- Keyboard-only navigation testing

---

## 25. Error Codes Reference

### 25.1 Firebase Auth Errors

| Code                          | Description              | User Message                                  |
| ----------------------------- | ------------------------ | --------------------------------------------- |
| `auth/user-not-found`         | No user with this email  | "No account found with this email"            |
| `auth/wrong-password`         | Incorrect password       | "Incorrect password. Please try again"        |
| `auth/email-already-in-use`   | Email already registered | "An account with this email already exists"   |
| `auth/weak-password`          | Password too weak        | "Password must be at least 6 characters"      |
| `auth/invalid-email`          | Invalid email format     | "Please enter a valid email address"          |
| `auth/too-many-requests`      | Too many attempts        | "Too many attempts. Please try again later"   |
| `auth/popup-closed-by-user`   | User closed popup        | "Sign in was cancelled"                       |
| `auth/network-request-failed` | Network error            | "Network error. Please check your connection" |

### 25.2 Firestore Errors

| Code                 | Description             | User Message                               |
| -------------------- | ----------------------- | ------------------------------------------ |
| `permission-denied`  | Security rules blocked  | "You don't have permission to access this" |
| `not-found`          | Document doesn't exist  | "The requested data was not found"         |
| `already-exists`     | Document already exists | "This item already exists"                 |
| `resource-exhausted` | Quota exceeded          | "Service temporarily unavailable"          |
| `unavailable`        | Service unavailable     | "Service temporarily unavailable"          |

### 25.3 Custom Error Handling

```tsx
const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    // Firebase errors
    if ('code' in error) {
      switch (error.code) {
        case 'auth/user-not-found':
          return 'No account found with this email'
        case 'auth/wrong-password':
          return 'Incorrect password'
        // ... other cases
        default:
          return 'An error occurred. Please try again'
      }
    }
    return error.message
  }
  return 'An unexpected error occurred'
}
```

---

## 26. Performance Budget

### 26.1 Bundle Size Limits

| Metric       | Budget       | Current | Status  |
| ------------ | ------------ | ------- | ------- |
| Initial JS   | < 300KB      | TBD     | Monitor |
| Initial CSS  | < 50KB       | TBD     | Monitor |
| Total Bundle | < 500KB      | TBD     | Monitor |
| Chunk Size   | < 100KB each | TBD     | Monitor |

### 26.2 Performance Metrics

| Metric                   | Target  | Measurement |
| ------------------------ | ------- | ----------- |
| First Contentful Paint   | < 1.5s  | Lighthouse  |
| Largest Contentful Paint | < 2.5s  | Lighthouse  |
| Time to Interactive      | < 3.5s  | Lighthouse  |
| Cumulative Layout Shift  | < 0.1   | Lighthouse  |
| First Input Delay        | < 100ms | Lighthouse  |

### 26.3 Optimization Rules

```tsx
// Lazy load heavy components
const PdfReader = lazy(() => import('./PdfReader'))
const AudioPlayer = lazy(() => import('./AudioPlayer'))

// Memoize expensive calculations
const sortedBooks = useMemo(() =>
  books.sort((a, b) => a.title.localeCompare(b.title)),
  [books]
)

// Callback memoization
const handleClick = useCallback((id: string) => {
  // handler logic
}, [dependency])

// Image optimization
<img
  src={coverUrl}
  alt={title}
  loading="lazy"
  decoding="async"
/>
```

### 26.4 Monitoring

- Run Lighthouse audit on each PR
- Monitor bundle size with each build
- Use React DevTools Profiler
- Track Core Web Vitals in production

---

**Last Updated:** 2026-04-03
**Version:** 1.1.0

_All AI agents must acknowledge these rules before working on this project._
