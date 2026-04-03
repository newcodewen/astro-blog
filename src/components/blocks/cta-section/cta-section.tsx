'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const CTA = () => {
  return (
    <section className='bg-background border-t border-border py-16 sm:py-24' id='get-in-touch'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-foreground text-2xl font-semibold tracking-tight sm:text-3xl'>
            Stay updated with new articles
          </h2>
          <p className='text-muted-foreground mt-3 text-lg'>
            Get notified when I publish new content about React, Node.js, TypeScript, and web development.
          </p>
          <form className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <Input
              type='email'
              placeholder='you@example.com'
              className='h-11 flex-1 text-base'
            />
            <Button type='submit' size='lg' className='h-11 px-8'>
              Subscribe
            </Button>
          </form>
          <p className='text-muted-foreground mt-4 text-sm'>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA
