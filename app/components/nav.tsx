'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react' // Added for mobile menu toggle

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
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // Added for mobile menu state

  // Function to handle PDF download
  const handleDownload = () => {
    const pdfUrl = '/documents/resume.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'MuyingZhao_Resume.pdf' 
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <aside className="-ml-[8px] mb-8 tracking-tight w-full">
      {/* Mobile menu button - hidden on desktop */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex items-center justify-between w-full px-4 py-3 bg-gray-700 text-white rounded-md mb-2"
        aria-label="Toggle menu"
      >
        <span>Menu</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block lg:sticky lg:top-20`}>
        <nav
          className="flex flex-col md:flex-row items-start md:items-center justify-between relative px-4 py-2 md:px-4 md:pb-1 md:pt-1 fade md:overflow-auto scroll-pr-8 bg-gray-600 rounded-md"
          id="nav"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-0 w-full md:w-auto">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === '/' ? pathname === path : pathname.startsWith(path)

              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all flex align-middle relative py-2 px-4 md:py-1 md:m-1 text-white text-lg ${
                    isActive 
                    ? 'text-white font-bold underline underline-offset-4 decoration-2' 
                    : 'text-neutral-200 hover:text-white dark:text-neutral-300 dark:hover:text-white hover:underline hover:underline-offset-4 hover:decoration-2'
                  }`}
                  onClick={() => setMobileMenuOpen(false)} // Close menu when a link is clicked
                >
                  {name}
                </Link>
              )
            })}
          </div>
          
          {/* Download Resume Button - full width on mobile */}
          <button
            onClick={handleDownload}
            className="mt-2 md:mt-0 w-full md:w-auto ml-0 md:ml-4 px-4 py-2 bg-black-700 hover:bg-green-800 text-white rounded-md transition-colors duration-200 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download Resume
          </button>
        </nav>
      </div>
    </aside>
  )
}