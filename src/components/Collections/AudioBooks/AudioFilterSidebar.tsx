import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid'
import type { Section } from './audioFilterConstants'

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

interface AudioFiltersSidebarProps {
  filters: Section[]
  selected: Record<string, Set<string>>
  onToggle: (sectionId: string, value: string) => void
}

export default function AudioFiltersSidebar({
  filters,
  selected,
  onToggle,
}: AudioFiltersSidebarProps) {
  return (
    <form className="block rounded-xl shadow-xl ring-1 ring-black/5 bg-white p-4">
      <h3 className="sr-only">Categories</h3>
      {filters.map((section) => (
        <Disclosure
          key={section.id}
          as="div"
          className={classNames(
            section.id === 'essaysAndArticles' ? '' : 'border-b border-gray-200',
            'py-6'
          )}
        >
          <h3 className="-my-3 flow-root">
            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">{section.name}</span>
              <span className="ml-6 flex items-center">
                <PlusIcon aria-hidden className="size-5 group-data-open:hidden" />
                <MinusIcon aria-hidden className="size-5 group-not-data-open:hidden" />
              </span>
            </DisclosureButton>
          </h3>
          <DisclosurePanel className="pt-6">
            <div className="space-y-4">
              {section.options.map((option, optionIdx) => (
                <div key={option.value} className="flex gap-3">
                  <div className="flex h-5 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        type="checkbox"
                        checked={Boolean(selected[section.id]?.has(option.value))}
                        onChange={() => onToggle(section.id, option.value)}
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-cyan-600 checked:bg-cyan-600 indeterminate:border-cyan-600 indeterminate:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-indeterminate:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <label
                    htmlFor={`filter-${section.id}-${optionIdx}`}
                    className="text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </form>
  )
}
