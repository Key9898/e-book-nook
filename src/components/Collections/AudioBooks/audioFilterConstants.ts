export interface Option {
  value: string
  label: string
  checked?: boolean
}

export interface Section {
  id: string
  name: string
  options: Option[]
}

export const defaultFilters: Section[] = [
  {
    id: 'bookLanguages',
    name: 'Book Languages',
    options: [
      { value: 'english', label: 'English', checked: false },
      { value: 'myanmar', label: 'Myanmar', checked: false },
    ],
  },
  {
    id: 'fiction',
    name: 'Fiction',
    options: [
      { value: 'novels', label: 'Novels', checked: false },
      { value: 'shortStories', label: 'Short Stories', checked: false },
      { value: 'poetry', label: 'Poetry', checked: false },
      { value: 'fantasy', label: 'Fantasy', checked: false },
      { value: 'sciFi', label: 'Sci-Fi', checked: false },
    ],
  },
  {
    id: 'educationAndLearning',
    name: 'Education & Learning',
    options: [
      { value: 'learningIT', label: 'Learning IT', checked: false },
      { value: 'learningEnglish', label: 'Learning English', checked: false },
      { value: 'learningScience', label: 'Learning Science', checked: false },
    ],
  },
  {
    id: 'personalDevelopment',
    name: 'Personal Development',
    options: [
      { value: 'selfHelp', label: 'Self-Help', checked: false },
      { value: 'productivity', label: 'Productivity', checked: false },
      { value: 'psychology', label: 'Psychology', checked: false },
    ],
  },
  {
    id: 'biographiesAndHistory',
    name: 'Biographies & History',
    options: [
      { value: 'biographies', label: 'Biographies', checked: false },
      { value: 'history', label: 'History', checked: false },
      { value: 'autobiographies', label: 'Autobiographies', checked: false },
      { value: 'memoirs', label: 'Memoirs', checked: false },
    ],
  },
  {
    id: 'essaysAndArticles',
    name: 'Essays & Articles',
    options: [
      { value: 'essays', label: 'Essays', checked: false },
      { value: 'articles', label: 'Articles', checked: false },
      { value: 'literaryCriticism', label: 'Literary Criticism', checked: false },
      { value: 'journalism', label: 'Journalism', checked: false },
    ],
  },
]
