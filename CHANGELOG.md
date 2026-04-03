# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- **New Favicon System** - Designed and implemented a new "Open Book + Lightbulb" favicon conceptually aligned with the brand.
- **Theme Consistency** - Unified favicon colors with the official Cyan-700 project theme.
- **Firestore Security Rules** - Configured comprehensive security rules for all user namespaces (readingProgress, audioProgress, readingTime, my_library, favorites, recentlyViewed, readingGoals, appActivity, notes, mindmaps, reviews, comments, notifications).
- **Firestore Composite Indexes** - Created 3 composite indexes for optimized queries (reviews by bookType/createdAt, reviews by authorId/createdAt, notifications by to/createdAt).

### Changed

- **Branding Assets** - Replaced the old complex logo favicon with a simplified, high-fidelity vector `favicon/favicon.svg`.
- **index.html** - Updated icon reference to point to `/favicon/favicon.svg`.
- **Firestore Configuration** - Moved from local files to Firebase Console for better management.
- **Firebase Imports** - Fixed runtime error by separating value imports from type imports in `firebaseConfig.ts`.

### Removed

- **Legacy Favicon Assets** - Cleaned up temporary favicon exploration files in `public/favicon/`.
- **Local Firestore Files** - Removed `firestore.rules` and `firestore.indexes.json` as rules and indexes are now managed directly in Firebase Console.

### Added (2026-04-03 - Documentation Enhancement)

#### PROJECT_PLAN.md - 10 New Sections

- **Dependencies Inventory** - Complete package.json dependencies with purposes
- **Routing Architecture** - Custom hash-based SPA routing documentation
- **Component Inventory** - All 55+ components listed by category
- **Hooks Inventory** - Current status and planned hooks
- **Utils/API Inventory** - All utility functions documented
- **Known Issues** - Current bugs and issues tracking
- **Technical Debt** - Areas needing refactoring
- **Priority Order** - Task prioritization by phase
- **Milestones** - Target dates and progress tracking
- **Risk Assessment** - Potential risks and mitigations

#### PROJECT_RULES.md - 12 New Sections

- **Routing Rules** - Hash-based routing rules and patterns
- **State Management Rules** - Local state vs Context vs Firestore guidelines
- **Git Branch Strategy** - Branch naming and workflow
- **Commit Message Format** - Conventional commits specification
- **Code Review Checklist** - PR pre-check requirements
- **Debugging Guidelines** - Debug methods and tools
- **Browser Support** - Supported browsers and versions
- **Responsive Breakpoints** - Tailwind breakpoints usage patterns
- **Color Palette** - Design tokens and theming
- **Accessibility (a11y)** - WCAG 2.1 AA compliance guidelines
- **Error Codes Reference** - Firebase/custom error codes quick reference
- **Performance Budget** - Bundle size limits and optimization rules

---

## Session Summaries

### Session: 2026-04-04

**Agent:** Antigravity
**Tasks Completed:**

- Deep scan of Project Plan, Change Log, Session Summary, and Project Rules.
- Codebase exploration to understand routing, state management, and component architecture.
- Designed and generated 3 new favicon concepts based on brand identity.
- Implemented the chosen "Open Book + Glowing Lightbulb" favicon in SVG format.
- Renamed the finalized concept to `favicon.svg` and moved it to the `public/favicon/` directory.
- Updated `index.html` to correctly link to `/favicon/favicon.svg`.
- Removed all temporary SVG exploration assets.

**Files Created/Modified:**

- `public/favicon/favicon.svg` (Created)
- `index.html` (Updated)
- `CHANGELOG.md` (Updated)
- `LAST_SESSION_SUMMARY.md` (Updated)

**Next Steps:**

- Proceed with Storybook stories for UI components.
- Continue with UI/UX improvements and responsive design audits.

---

## [1.0.0] - Initial Release

### Features

#### Authentication

- Email/Password sign-in with "Remember me" option
- Google OAuth sign-in
- Password reset functionality
- Session persistence (local/session storage)

#### PDF Books

- Grid/List view toggle
- Filtering by language (English/Myanmar) and tags
- Sorting (Best Rating, Latest, A-Z, Z-A)
- Pagination (20 items per page)
- PDF viewer with:
  - Page navigation & jump to page
  - Reading progress tracking
  - Dark mode toggle
  - Favorites, Notes, Recently Viewed

#### Audiobooks

- Similar filtering/sorting as PDF books
- Custom audio player with:
  - Progress tracking & persistence
  - Dark mode support
  - Favorites & Notes integration

#### User Account

- Profile management (username, avatar upload)
- Password change
- Account deletion with re-authentication
- My Reviews, My Comments sections
- My Activity with charts (Line, Bar, Pie)
- Notifications center
- Help & Info

#### Reading Goals

- Visual mind map using React Flow
- Editable nodes
- Firestore persistence
- List view alternative

#### Reviews System

- Star ratings (1-5)
- Country selection
- Book type association
- Pagination

#### Admin Panel

- System notifications to all users
- Category selection (Maintenance, New Content, Recommendations)

### Technical Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- Firebase (Auth, Firestore, Storage, App Check)
- React Flow (Mind Maps)
- Recharts (Charts)
- react-pdf (PDF Viewer)
- Headless UI + Heroicons + Lucide Icons

---

## Change Log Format

Each entry should follow this format:

```
### [Category] - Brief Description
- What was changed
- Why it was changed
- Any breaking changes or notes
```

### Categories

- **Added** - New features
- **Changed** - Changes to existing features
- **Deprecated** - Features to be removed
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Security improvements
