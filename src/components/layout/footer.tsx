const Footer = () => {
  return (
    <footer className='border-t border-border/50 mt-24'>
      <div className='mx-auto max-w-4xl px-6 py-8'>
        <div className='flex flex-col items-center justify-between gap-2 sm:flex-row'>
          <span className='text-muted-foreground/60 text-xs'>
            ©{new Date().getFullYear()} newcode wen
          </span>
          <div className='flex items-center gap-4'>
            <a
              href='/rss.xml'
              className='text-muted-foreground/60 hover:text-foreground text-xs transition-colors'
            >
              RSS
            </a>
            <a
              href='https://github.com/newcodewen'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground/60 hover:text-foreground text-xs transition-colors'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
