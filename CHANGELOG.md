# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- PROJECT_PLAN.md - Comprehensive project plan with all specifications
- CHANGELOG.md - Change tracking documentation
- LAST_SESSION_SUMMARY.md - Session tracking documentation
- PROJECT_RULES.md - Comprehensive rules for all AI agents
- .trae/rules/project_rules.md - Trae IDE specific rules
- .claude/CLAUDE.md - Claude AI specific instructions
- .cursorrules - Cursor IDE rules
- .github/copilot-instructions.md - GitHub Copilot instructions

### Changed

- Updated .gitignore with comprehensive ignore rules for Storybook, testing, cache, Vercel, and Firebase
- Added comprehensive Responsive Design Requirements section to PROJECT_PLAN.md
- Added Responsive Design Rules (Section 5.4) to PROJECT_RULES.md

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

---

## Session Summaries

### Session: 2026-04-03 (Updated)

**Agent:** Claude (Trae IDE)
**Tasks Completed:**

- Deep scan of entire codebase
- Created PROJECT_PLAN.md with all specifications
- Created CHANGELOG.md for change tracking
- Created LAST_SESSION_SUMMARY.md for session tracking
- Created PROJECT_RULES.md - comprehensive rules for all AI agents
- Created AI agent-specific rule files:
  - .trae/rules/project_rules.md (Trae IDE)
  - .claude/CLAUDE.md (Claude AI)
  - .cursorrules (Cursor IDE)
  - .github/copilot-instructions.md (GitHub Copilot)
- Updated .gitignore with comprehensive ignore rules

**Files Created:**

- PROJECT_PLAN.md
- CHANGELOG.md
- LAST_SESSION_SUMMARY.md
- PROJECT_RULES.md
- .trae/rules/project_rules.md
- .claude/CLAUDE.md
- .cursorrules
- .github/copilot-instructions.md

**Next Steps:**

- Setup Storybook
- Configure Prettier
- Configure ESLint
- UI/UX improvements

---
