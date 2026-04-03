# E-Book Nook - Project Plan

## Project Overview

**E-Book Nook** is a personal digital library web application for reading PDF books and listening to audiobooks with progress tracking, reviews, and reading goals features.

---

## Technology Stack

### Frontend

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite 6** - Build Tool & Dev Server
- **Tailwind CSS v4** - Styling (via Vite plugin)

### Backend

- **Firebase (Free Tier)**
  - Authentication (Email/Password + Google OAuth)
  - Cloud Firestore (NoSQL Database)
  - Firebase Storage (File Uploads)
  - Firebase App Check (Security)

### Hosting & Domain

- **Vercel** - Deployment & Hosting

### Animation

- **Framer Motion** - UI Animations & Transitions

### Icons

- **Lucide Icons** - Icon Library

### Code Quality Tools

- **Storybook** - Component Documentation & Testing
- **Prettier** - Code Formatting
- **ESLint** - Linting & Code Quality

---

## Development Rules

### 1. CSS Rules

- **NO inline CSS** - All styling must be done via Tailwind CSS classes
- Use Tailwind utility classes for all styling needs
- Custom CSS only in designated style files if absolutely necessary

### 2. Git Rules

- **gitignore must be complete** - All unnecessary files/folders must be ignored before first commit
- Never commit:
  - `node_modules/`
  - `dist/`, `build/`
  - `.env`, `.env.local`, `.env.*`
  - IDE settings (`.vscode/`, `.idea/`)
  - OS files (`.DS_Store`, `Thumbs.db`)
  - Log files (`*.log`)

### 3. Agent Rules (Mind Your Own Business)

- **NEVER modify** existing correct UI/UX, Logic, or Functions
- Only modify what you are explicitly asked to change
- Respect previous work by other agents
- Focus only on the assigned task

### 4. Documentation Rules

- **CHANGELOG.md** - Track all changes made
- **Last Session Summary** - Document what was done in each session
- Update documentation immediately after making changes

### 5. Git Push Workflow

Before every git push:

1. Run Storybook build
2. Run Prettier format
3. Run ESLint check
4. Fix all issues before committing
5. Commit with descriptive message
6. Push to repository

---

## Project Structure

### Modular Component Architecture

```
src/
├── components/              # Modular Components
│   ├── ComponentName/       # Each component in own folder
│   │   ├── ComponentName.tsx    # UI (Dumb)
│   │   ├── ComponentName.types.ts
│   │   └── ComponentName.stories.tsx
│   └── ...
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
├── assets/                  # Static Assets
├── lib/                     # Utility Libraries
├── types/                   # Global TypeScript Types
└── main.tsx                 # Entry Point
```

### Component Classification

| Type              | Location                         | Purpose                           |
| ----------------- | -------------------------------- | --------------------------------- |
| **Dumb (UI)**     | `components/*/ComponentName.tsx` | Pure UI/UX, no business logic     |
| **Smart (Logic)** | `hooks/use*.ts`                  | Reusable business logic           |
| **API/Functions** | `utils/*.ts`                     | API calls, formatters, validators |
| **Mock Data**     | `demo/mocks/*.ts`                | Test data for development         |

### Why This Structure?

1. **Modular Components** - Each component is self-contained
2. **Separation of Concerns** - UI and Logic are separate
3. **Reusability** - Hooks can be used across components
4. **Testability** - Easy to test in isolation
5. **Maintainability** - Clear file organization

---

## Features

### Completed Features

- [x] User Authentication (Email/Password + Google OAuth)
- [x] PDF Books Collection with Filters
- [x] Audiobooks Collection with Filters
- [x] PDF Reader with Progress Tracking
- [x] Audio Player with Progress Tracking
- [x] User Account Dashboard
- [x] Reading Goals (Mind Map with React Flow)
- [x] Reviews System
- [x] Activity Tracking with Charts
- [x] Admin Panel for Notifications
- [x] Dark Mode in Readers
- [x] Favorites & Notes
- [x] Recently Viewed History

### In Progress

- [ ] Storybook Setup
- [ ] Prettier Configuration
- [ ] ESLint Configuration
- [ ] UI/UX Improvements (Pro & Clean)
- [ ] Code Logic Cleanup

### Future Enhancements

- [ ] PWA Support (Offline)
- [ ] Unit Tests (Vitest)
- [ ] Integration Tests
- [ ] SEO Optimization
- [ ] Performance Optimization (Lazy Loading)

---

## UI/UX Goals

### Current State

- Functional UI with Tailwind CSS
- Basic responsive design
- Dark mode in readers only

### Target State

- **Pro & Clean Design** - Professional appearance
- **Clear Logic** - Easy to understand code
- **Consistent Styling** - Unified design language
- **Smooth Animations** - Framer Motion transitions
- **Full Responsive** - Mobile-first approach

---

## Responsive Design Requirements

### CRITICAL: All Components Must Be Fully Responsive

**Every component MUST work perfectly on ALL devices and screen sizes.**

### Supported Devices

| Device Type   | Screen Size     | Tailwind Prefix | Examples                  |
| ------------- | --------------- | --------------- | ------------------------- |
| Mobile        | < 640px         | (default)       | iPhone SE, Android phones |
| Tablet        | 640px - 1023px  | `sm:`, `md:`    | iPad, Android tablets     |
| Desktop       | 1024px - 1279px | `lg:`           | Laptops, small monitors   |
| Large Desktop | 1280px+         | `xl:`, `2xl:`   | Monitors, large screens   |

### Tailwind Breakpoints Reference

```css
sm:  640px   /* Tablet portrait */
md:  768px   /* Tablet landscape */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large desktop */
```

### Responsive Design Rules

#### 1. Mobile-First Approach

- Write base styles for mobile first
- Use breakpoint prefixes to add styles for larger screens
- Example: `class="text-sm md:text-base lg:text-lg"`

#### 2. Required Responsive Elements

| Element        | Mobile         | Tablet            | Desktop     |
| -------------- | -------------- | ----------------- | ----------- |
| Navigation     | Hamburger menu | Hamburger/Tab bar | Full navbar |
| Grid Layout    | 1 column       | 2 columns         | 3-4 columns |
| Font Sizes     | Smaller        | Medium            | Larger      |
| Padding/Margin | Compact        | Medium            | Spacious    |
| Modals         | Full screen    | Centered          | Centered    |
| Tables         | Card view      | Card/Table        | Full table  |
| Forms          | Full width     | Centered          | Centered    |

#### 3. Touch-Friendly Design

- Minimum touch target: 44px x 44px
- Adequate spacing between interactive elements
- No hover-only interactions on mobile

#### 4. Responsive Images & Media

- Use `max-w-full` or `w-full` for images
- Implement lazy loading for images
- Use appropriate image sizes per breakpoint

#### 5. Typography Scale

| Element | Mobile   | Tablet    | Desktop   |
| ------- | -------- | --------- | --------- |
| H1      | text-2xl | text-3xl  | text-4xl  |
| H2      | text-xl  | text-2xl  | text-3xl  |
| H3      | text-lg  | text-xl   | text-2xl  |
| Body    | text-sm  | text-base | text-base |
| Small   | text-xs  | text-sm   | text-sm   |

#### 6. Testing Requirements

- Test on actual devices when possible
- Use browser DevTools responsive mode
- Test both portrait and landscape orientations
- Test on different browsers (Chrome, Firefox, Safari, Edge)

### Common Responsive Patterns

```tsx
// Grid Layout
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

// Flex Layout
<div className="flex flex-col md:flex-row gap-4">

// Responsive Padding
<div className="p-4 md:p-6 lg:p-8">

// Responsive Text
<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">

// Hide/Show by Breakpoint
<div className="hidden md:block">Desktop only</div>
<div className="md:hidden">Mobile/Tablet only</div>

// Responsive Container
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
```

### Forbidden Responsive Practices

- ❌ Fixed pixel widths that overflow on mobile
- ❌ Horizontal scrolling on any screen size
- ❌ Tiny touch targets (< 44px)
- ❌ Hover-only functionality on touch devices
- ❌ Tiny text on mobile (< 12px)
- ❌ Elements cut off on any screen size

---

## Firebase Configuration

### Collections Structure

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

### Security Rules

- Users can only read/write their own data
- Reviews are public read, authenticated write
- Admin functions restricted by email

---

## Deployment

### Vercel Configuration

- Auto-deploy from main branch
- Environment variables in Vercel dashboard
- Custom domain (if applicable)

### Environment Variables Required

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
VITE_RECAPTCHA_SITE_KEY=
```

---

## Success Metrics

| Metric                 | Target  |
| ---------------------- | ------- |
| Lighthouse Score       | > 90    |
| First Contentful Paint | < 1.5s  |
| Time to Interactive    | < 3s    |
| Bundle Size            | < 500KB |
| Code Coverage          | > 80%   |

---

---

## Dependencies Inventory

### Production Dependencies

| Package                    | Version  | Purpose                                     |
| -------------------------- | -------- | ------------------------------------------- |
| `react`                    | ^19.1.1  | UI Library - Core framework                 |
| `react-dom`                | ^19.1.1  | React DOM rendering                         |
| `typescript`               | ~5.9.3   | Type safety and development                 |
| `vite`                     | ^7.1.7   | Build tool and dev server                   |
| `tailwindcss`              | ^4.1.17  | Utility-first CSS framework                 |
| `@tailwindcss/vite`        | ^4.1.17  | Tailwind Vite plugin                        |
| `firebase`                 | ^12.6.0  | Backend services (Auth, Firestore, Storage) |
| `framer-motion`            | -        | UI animations and transitions               |
| `lucide-react`             | ^0.554.0 | Icon library                                |
| `react-pdf`                | ^10.2.0  | PDF rendering in browser                    |
| `recharts`                 | ^2.15.4  | Charts for activity tracking                |
| `@xyflow/react`            | ^12.9.3  | Mind map / flow diagrams                    |
| `react-router-dom`         | ^7.9.6   | (Note: Not used - custom hash routing)      |
| `@headlessui/react`        | ^2.2.9   | Unstyled accessible UI components           |
| `@heroicons/react`         | ^2.2.0   | Icon set (alternative to Lucide)            |
| `@radix-ui/react-slot`     | ^1.2.4   | Radix slot primitive                        |
| `react-day-picker`         | ^9.11.2  | Calendar date picker                        |
| `react-countup`            | ^6.5.3   | Number animation                            |
| `react-icons`              | ^5.5.0   | Icon collection                             |
| `date-fns`                 | ^4.1.0   | Date manipulation                           |
| `clsx`                     | ^2.1.1   | Conditional class names                     |
| `tailwind-merge`           | ^3.4.0   | Merge Tailwind classes                      |
| `class-variance-authority` | ^0.7.1   | Component variants                          |

### Dev Dependencies

| Package                       | Version | Purpose                      |
| ----------------------------- | ------- | ---------------------------- |
| `@vitejs/plugin-react`        | ^5.0.4  | Vite React plugin            |
| `eslint`                      | ^9.36.0 | Code linting                 |
| `eslint-plugin-react-hooks`   | ^5.2.0  | React Hooks lint rules       |
| `eslint-plugin-react-refresh` | ^0.4.22 | React Refresh lint rules     |
| `prettier`                    | -       | Code formatting              |
| `typescript-eslint`           | ^8.45.0 | TypeScript ESLint rules      |
| `tw-animate-css`              | ^1.4.0  | Tailwind animation utilities |

---

## Routing Architecture

### Custom Hash-Based SPA Routing

**IMPORTANT:** This project uses a **custom hash-based routing system**, NOT React Router.

```tsx
// Routing implementation in App.tsx
const [currentPage, setCurrentPage] = useState(() => {
  const hash = window.location.hash.replace('#', '')
  const saved = localStorage.getItem('current_page')
  return hash || saved || 'home'
})

// Navigation function
const handleNavigate = (slug: string) => {
  window.location.hash = slug
  setCurrentPage(slug)
  window.scrollTo({ top: 0, behavior: 'auto' })
}
```

### Route Map

| Route (Hash)      | Component        | Description                      |
| ----------------- | ---------------- | -------------------------------- |
| `#home` or `/`    | `HeroSection`    | Landing page                     |
| `#collections`    | `Collections`    | All books collection             |
| `#pdfBooks`       | `PdfBooks`       | PDF books listing                |
| `#audiobooks`     | `Audiobooks`     | Audiobooks listing               |
| `#reviews`        | `Reviews`        | User reviews                     |
| `#readingGoals`   | `ReadingGoals`   | Reading goals (auth required)    |
| `#accountSetting` | `AccountMain`    | User account (auth required)     |
| `#ourStory`       | `OurStory`       | About page                       |
| `#feedbacks`      | `Feedbacks`      | Feedback form                    |
| `#faqs`           | `FAQs`           | FAQ page                         |
| `#termsOfService` | `TermsOfService` | Terms page                       |
| `#privacyPolicy`  | `PrivacyPolicy`  | Privacy page                     |
| `/admin-panel`    | `AdminPanel`     | Admin notifications (admin only) |

### Routing Rules

1. **Hash-based URLs** - All routes use `#route` format
2. **localStorage persistence** - Current page saved to localStorage
3. **Auth protection** - Some routes require authentication
4. **Admin route** - `/admin-panel` is a special path route (not hash)
5. **Scroll to top** - Page scrolls to top on navigation

---

## Component Inventory

### Layout Components (`src/components/Layouts/`)

| Component                 | Purpose                   |
| ------------------------- | ------------------------- |
| `Header.tsx`              | Main navigation header    |
| `Footer.tsx`              | Site footer               |
| `HeroBanner.tsx`          | Hero banner section       |
| `Breadcrumb.tsx`          | Breadcrumb navigation     |
| `Notify.tsx`              | Toast notification system |
| `ScrollUpToTopButton.tsx` | Scroll to top button      |
| `TextAnimation.tsx`       | Text animation component  |

### Hero Section Components (`src/components/HeroSection/`)

| Component           | Purpose                   |
| ------------------- | ------------------------- |
| `HeroSection.tsx`   | Main hero/landing section |
| `BookCards.tsx`     | Book card display         |
| `BooksDrawer.tsx`   | Book drawer/modal         |
| `RingAnimation.tsx` | Ring animation effect     |

### Collection Components (`src/components/Collections/`)

| Component                           | Purpose                    |
| ----------------------------------- | -------------------------- |
| `Collections.tsx`                   | Main collections container |
| `PdfBooks/PdfBooks.tsx`             | PDF books listing          |
| `PdfBooks/PdfFiltersSidebar.tsx`    | PDF filter sidebar         |
| `PdfBooks/PdfPagination.tsx`        | PDF pagination             |
| `AudioBooks/AudioBooks.tsx`         | Audiobooks listing         |
| `AudioBooks/AudioFilterSidebar.tsx` | Audio filter sidebar       |
| `AudioBooks/AudioPagination.tsx`    | Audio pagination           |

### Feature Components (`src/components/Collections/Features/`)

| Component            | Purpose                  |
| -------------------- | ------------------------ |
| `PdfReader.tsx`      | PDF reading interface    |
| `AudioPlayer.tsx`    | Audio playback interface |
| `Notes.tsx`          | Note-taking feature      |
| `FavoritesList.tsx`  | Favorites management     |
| `RecentlyViewed.tsx` | Recently viewed history  |
| `DarkMode.tsx`       | Dark mode toggle         |

### Account Components (`src/components/Account/`)

| Component                         | Purpose                                    |
| --------------------------------- | ------------------------------------------ |
| `AccountMain.tsx`                 | Main account dashboard                     |
| `AccountSidebar.tsx`              | Account navigation sidebar                 |
| `MyActivity/MyActivity.tsx`       | Activity tracking                          |
| `MyActivity/Charts/*.tsx`         | Activity charts (Bar, Line, Pie, Calendar) |
| `MyReviews/MyReviews.tsx`         | User's reviews                             |
| `MyComments/MyComments.tsx`       | User's comments                            |
| `Notifications/Notifications.tsx` | User notifications                         |
| `Help&Info/Help&Info.tsx`         | Help and info section                      |

### Auth Components (`src/components/Auth/`)

| Component       | Purpose            |
| --------------- | ------------------ |
| `SingIn.tsx`    | Sign in form       |
| `SingUp.tsx`    | Sign up form       |
| `UserPanel.tsx` | User panel display |

### Other Components

| Component               | Location          | Purpose            |
| ----------------------- | ----------------- | ------------------ |
| `ReadingGoals.tsx`      | `ReadingGoals/`   | Reading goals main |
| `GoalsForm.tsx`         | `ReadingGoals/`   | Goals form         |
| `ListView.tsx`          | `ReadingGoals/`   | Goals list view    |
| `Reviews.tsx`           | `Reviews/`        | Reviews main       |
| `ReviewsForm.tsx`       | `Reviews/`        | Review form        |
| `ReviewsPagination.tsx` | `Reviews/`        | Reviews pagination |
| `OurStory.tsx`          | `OurStory/`       | About page         |
| `Feedbacks.tsx`         | `Feedbacks/`      | Feedback form      |
| `FAQs.tsx`              | `FAQs/`           | FAQ page           |
| `TermsOfService.tsx`    | `TermsOfService/` | Terms page         |
| `PrivacyPolicy.tsx`     | `PrivacyPolicy/`  | Privacy page       |

### UI Components (`src/components/ui/`)

| Component      | Purpose                         |
| -------------- | ------------------------------- |
| `button.tsx`   | Button component (shadcn style) |
| `card.tsx`     | Card component                  |
| `calendar.tsx` | Calendar component              |
| `chart.tsx`    | Chart component                 |

---

## Hooks Inventory

**Current Status:** No custom hooks directory exists yet.

### Planned Hooks (To Be Created)

| Hook                  | Purpose                          |
| --------------------- | -------------------------------- |
| `useAuth.ts`          | Authentication state and methods |
| `useModal.ts`         | Modal open/close state           |
| `useProgress.ts`      | Reading/audio progress tracking  |
| `useFavorites.ts`     | Favorites management             |
| `useNotifications.ts` | Notifications handling           |
| `useTheme.ts`         | Theme/dark mode management       |

---

## Utils/API Inventory

### `src/lib/utils.ts`

| Function                  | Purpose                                         |
| ------------------------- | ----------------------------------------------- |
| `cn()`                    | Class name merger (clsx + tailwind-merge)       |
| `getBookStatus()`         | Calculate book reading status                   |
| `updateBookOnOpen()`      | Update progress on book open                    |
| `updateBookOnProgress()`  | Update progress on page change                  |
| `updateBookOnComplete()`  | Mark book as completed                          |
| `getAudioStatus()`        | Calculate audio listening status                |
| `updateAudioOnOpen()`     | Update progress on audio open                   |
| `updateAudioOnProgress()` | Update progress on position change              |
| `updateAudioOnComplete()` | Mark audio as completed                         |
| `saveBookProgress()`      | Save book progress to Firestore/localStorage    |
| `loadBookProgress()`      | Load book progress from Firestore/localStorage  |
| `saveAudioProgress()`     | Save audio progress to Firestore/localStorage   |
| `loadAudioProgress()`     | Load audio progress from Firestore/localStorage |

### Types Defined

| Type             | Purpose                                       |
| ---------------- | --------------------------------------------- |
| `ProgressStatus` | 'not_started' \| 'in_progress' \| 'completed' |
| `BookProgress`   | Book progress data structure                  |
| `AudioProgress`  | Audio progress data structure                 |

---

## Known Issues

| Issue                   | Description                         | Priority | Status          |
| ----------------------- | ----------------------------------- | -------- | --------------- |
| No custom hooks         | Logic embedded in components        | Medium   | Pending         |
| No Storybook stories    | Components not documented           | High     | Pending         |
| No Prettier config      | Inconsistent formatting             | High     | Pending         |
| No ESLint config        | No linting rules defined            | High     | Pending         |
| react-router-dom unused | Dependency not used                 | Low      | Pending removal |
| Typo in component names | `SingIn.tsx` should be `SignIn.tsx` | Low      | Pending         |

---

## Technical Debt

| Area           | Issue                         | Impact                     | Priority |
| -------------- | ----------------------------- | -------------------------- | -------- |
| **Hooks**      | No hooks directory            | Logic not reusable         | High     |
| **Testing**    | No test setup                 | No automated testing       | High     |
| **Storybook**  | Not configured                | No component docs          | High     |
| **Linting**    | ESLint not configured         | Code quality issues        | High     |
| **Formatting** | Prettier not configured       | Inconsistent style         | High     |
| **Types**      | No centralized types file     | Scattered type definitions | Medium   |
| **Components** | Some components too large     | Hard to maintain           | Medium   |
| **Routing**    | Custom routing not documented | Hard for new developers    | Medium   |
| **State**      | No global state management    | Prop drilling              | Low      |

---

## Priority Order

### Phase 1: Foundation (Critical)

1. **ESLint Configuration** - Code quality
2. **Prettier Configuration** - Consistent formatting
3. **Storybook Setup** - Component documentation
4. **Type Definitions** - Centralized types

### Phase 2: Architecture (High)

5. **Create Hooks Directory** - Extract reusable logic
6. **Refactor Large Components** - Improve maintainability
7. **Add Unit Tests** - Vitest setup

### Phase 3: Enhancement (Medium)

8. **UI/UX Improvements** - Pro & clean design
9. **Performance Optimization** - Lazy loading, memoization
10. **Accessibility Audit** - WCAG compliance

### Phase 4: Future (Low)

11. **PWA Support** - Offline capability
12. **SEO Optimization** - Meta tags, sitemap
13. **Remove Unused Dependencies** - Clean up package.json

---

## Milestones

| Milestone         | Target  | Status      | Description                              |
| ----------------- | ------- | ----------- | ---------------------------------------- |
| M1: Code Quality  | Q2 2026 | In Progress | ESLint, Prettier, TypeScript strict mode |
| M2: Documentation | Q2 2026 | Pending     | Storybook, component docs, API docs      |
| M3: Testing       | Q3 2026 | Pending     | Unit tests, integration tests, E2E tests |
| M4: Performance   | Q3 2026 | Pending     | Bundle optimization, lazy loading        |
| M5: PWA           | Q4 2026 | Pending     | Service worker, offline support          |
| M6: Production    | Q4 2026 | Pending     | Full production release                  |

---

## Risk Assessment

| Risk                      | Probability | Impact   | Mitigation                       |
| ------------------------- | ----------- | -------- | -------------------------------- |
| Firebase free tier limits | Medium      | High     | Monitor usage, implement caching |
| Bundle size bloat         | Medium      | Medium   | Lazy loading, code splitting     |
| No test coverage          | High        | High     | Prioritize test setup            |
| Browser compatibility     | Low         | Medium   | Test on multiple browsers        |
| Security vulnerabilities  | Low         | High     | Regular dependency updates       |
| Performance degradation   | Medium      | Medium   | Performance monitoring           |
| Data loss (Firestore)     | Low         | Critical | Regular backups, validation      |
| Auth provider changes     | Low         | Medium   | Abstract auth layer              |

---

## Last Updated

**Date:** 2026-04-03
**Version:** 1.0.0
**Status:** Active Development
