'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import ThemeToggle from '@/components/layout/theme-toggle'

type HeaderProps = {
  className?: string
}

const Header = ({ className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openSearch = () => {
    document.dispatchEvent(new CustomEvent('open-search'))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        openSearch()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 h-16 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent border-transparent',
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-4xl items-center justify-between px-6'>
        <a href='/' className='flex items-center gap-2'>
          <span
            className={cn(
              'text-foreground text-lg font-semibold tracking-tight transition-all duration-300',
              'font-serif'
            )}
          >
            newcode wen
          </span>
        </a>

        <div className='flex items-center gap-2'>
          <button
            onClick={openSearch}
            className='text-muted-foreground hover:text-foreground flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors hover:bg-muted/50'
            aria-label='搜索文章'
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/>
            </svg>
            <span className="hidden sm:inline text-muted-foreground/70">搜索</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded-md border border-border bg-muted/50 px-1.5 py-0.5 text-[10px] text-muted-foreground/60 font-mono">
              <span>⌘</span>K
            </kbd>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
