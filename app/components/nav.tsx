'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation' // Required for active state detection

const navItems = {
  '/': {
    name: 'About Me',
  },
  '/projects': {
    name: 'Projects'
  },
  '/experience': {
    name: 'Experience'
  },
  '/education': {
    name: 'Education'
  },
  '/blog': {
    name: 'Blog',
  },
}

export function Navbar() {
  const pathname = usePathname() // Gets current route path

  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-4 pb-1 pt-1 fade md:overflow-auto scroll-pr-8 md:relative bg-gray-600"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              // Check if current route starts with the path (for nested routes)
              const isActive = path === '/' ? pathname === path : pathname.startsWith(path)

              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all flex align-middle relative py-1 px-4 m-1 text-white text-lg ${
                    isActive 
                    ? 'text-white font-bold underline underline-offset-4 decoration-2' 
                    : 'text-neutral-200 hover:text-white dark:text-neutral-300 dark:hover:text-white hover:underline hover:underline-offset-4 hover:decoration-2'
                  }`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
