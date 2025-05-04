'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

  // Function to handle PDF download
  const handleDownload = () => {
    // Replace with your actual PDF path
    const pdfUrl = '/documents/resume.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'MuyingZhao_Resume.pdf' 
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-4 pb-1 pt-1 fade md:overflow-auto scroll-pr-8 md:relative bg-gray-600"
          id="nav"
        >
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
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
          
          {/* Download Resume Button */}
          <button
            onClick={handleDownload}
            className="ml-4 px-4 py-2 bg-black-700 hover:bg-green-800 text-white rounded-md transition-colors duration-200 flex items-center"
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