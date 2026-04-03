'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import { MenuIcon } from 'lucide-react'

import ThemeToggle from '@/components/layout/theme-toggle'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import MenuDropdown from '@/components/blocks/menu-dropdown'
import MenuNavigation from '@/components/blocks/menu-navigation'
import type { NavigationSection } from '@/components/blocks/menu-navigation'

import { cn } from '@/lib/utils'

import LogoSvg from '@/assets/svg/logo'

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const path = window.location.pathname

      if (path !== '/') {
        return
      }

      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = section as HTMLElement
        const { offsetTop, offsetHeight } = element

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          if (element.id !== activeSection) {
            setActiveSection(element.id)
          }
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection])

  useLayoutEffect(() => {
    const path = window.location.pathname

    setTimeout(() => {
      if (path === '/' || path === '/#home') {
        setActiveSection('home')
      } else if (path.startsWith('/blog/')) {
        setActiveSection('')
      } else if (path.startsWith('/contact')) {
        setActiveSection('')
      } else {
        setActiveSection('')
      }
    }, 0)
  }, [])

  return (
    <header
      className={cn(
        'bg-background/80 backdrop-blur-md sticky top-0 z-50 h-16 w-full border-b transition-all duration-200',
        {
          'border-border': isScrolled,
          'border-transparent': !isScrolled
        },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='/#home' className='flex items-center gap-2'>
          <LogoSvg />
          <span className='text-foreground text-lg font-semibold tracking-tight'>DevBlog</span>
        </a>

        {/* Navigation */}
        <MenuNavigation navigationData={navigationData} activeSection={activeSection} className='max-lg:hidden' />

        {/* Actions */}
        <div className='flex items-center gap-2'>
          <ThemeToggle />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='ghost' size='icon' className='lg:hidden' asChild>
                  <a href='/contact-us'>
                    <MenuIcon />
                    <span className='sr-only'>Menu</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Menu</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <MenuDropdown
            align='end'
            navigationData={navigationData}
            activeSection={activeSection}
            trigger={
              <Button variant='outline' size='sm' className='hidden lg:flex'>
                Contact
              </Button>
            }
          />
        </div>
      </div>
    </header>
  )
}

export default Header
