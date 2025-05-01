'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation' // Required for active state detection

const navItems = {
  '/': {
    name: 'HOME',
  },
  '/projects': {
    name: 'PROJECTS'
  },
  '/experience': {
    name: 'EXPERIENCE'
  },
  '/education': {
    name: 'EDUCATION'
  },
  '/blog': {
    name: 'BLOG',
  },
}

export function Navbar() {
  const pathname = usePathname() // Gets current route path

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative bg-gradient-to-r from-orange-600 to-orange-400"
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
                  className={`transition-all flex align-middle relative py-1 px-2 m-1 ${
                    isActive 
                      ? 'text-white font-bold bg-orange-800 dark:bg-orange-800' 
                      : 'text-neutral-200 hover:text-white dark:text-neutral-300 dark:hover:text-white'
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
