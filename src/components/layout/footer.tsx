import { GithubIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

const Footer = () => {
  return (
    <footer className='border-t border-border'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
          {/* Logo & Copyright */}
          <div className='flex items-center gap-2'>
            <span className='text-foreground text-sm font-medium'>DevBlog</span>
            <span className='text-muted-foreground text-sm'>
              ©{new Date().getFullYear()} · Built with Astro
            </span>
          </div>

          {/* Links */}
          <div className='flex items-center gap-6'>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-foreground transition-colors duration-200'
            >
              <GithubIcon className='size-5' />
              <span className='sr-only'>GitHub</span>
            </a>
            <a
              href='/rss.xml'
              className='text-muted-foreground hover:text-foreground text-sm transition-colors duration-200'
            >
              RSS
            </a>
            <a
              href='#'
              className='text-muted-foreground hover:text-foreground text-sm transition-colors duration-200'
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
