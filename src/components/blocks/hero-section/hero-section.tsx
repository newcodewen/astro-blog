import { ArrowUpRightIcon, CalendarDaysIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { BlogPost } from '@/components/blocks/blog-component/blog-component'

const HeroSection = ({ blogData }: { blogData: BlogPost[] }) => {
  const featuredPosts = blogData.filter(post => post.featured)

  return (
    <section id='home' className='bg-background -mt-16 pt-32 pb-12 sm:pb-16 lg:pb-24'>
      <div className='mx-auto flex h-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8'>
        {/* Hero Header */}
        <div className='flex max-w-3xl flex-col items-start gap-4'>
          <Badge variant='outline' className='text-sm font-normal'>
            Full-Stack Development
          </Badge>
          <h1 className='text-foreground text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl'>
            Practical insights for modern developers.
          </h1>
          <p className='text-muted-foreground text-lg sm:text-xl'>
            Deep dives into React, Node.js, TypeScript, and the tools that power production applications.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            {featuredPosts.map((item, index) => (
              <div key={`${item.author}-${index}`} className='group'>
                <Card className='cursor-default overflow-hidden border-border bg-card transition-shadow duration-200 hover:shadow-lg'>
                  <CardContent className='grid grid-cols-1 p-0 xl:grid-cols-2'>
                    <div className='relative overflow-hidden'>
                      <a href={`/blog/${item.slug}`} className='block aspect-video xl:aspect-square'>
                        <img
                          src={item.imageUrl}
                          alt={item.imageAlt}
                          className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                          loading='lazy'
                        />
                      </a>
                    </div>
                    <div className='flex flex-col justify-center gap-4 p-6'>
                      <div className='flex items-center gap-3'>
                        <div className='text-muted-foreground flex items-center gap-1.5 text-sm'>
                          <CalendarDaysIcon className='size-4' />
                          <span>{item.pubDate}</span>
                        </div>
                        <Badge
                          variant='secondary'
                          className='cursor-pointer text-xs'
                          onClick={e => {
                            e.preventDefault()
                            e.stopPropagation()
                            window.location.href = `/#category-${item.category}`
                          }}
                        >
                          {item.category}
                        </Badge>
                      </div>
                      <a href={`/blog/${item.slug}`} className='block'>
                        <h3 className='text-foreground text-xl font-semibold leading-snug'>{item.title}</h3>
                      </a>
                      <p className='text-muted-foreground line-clamp-2 text-sm'>{item.description}</p>
                      <div className='flex w-full items-center justify-between'>
                        <span className='text-foreground text-sm font-medium'>{item.author}</span>
                        <Button
                          size='sm'
                          variant='ghost'
                          className='gap-1 text-primary hover:text-primary'
                          asChild
                        >
                          <a href={`/blog/${item.slug}`}>
                            Read <ArrowUpRightIcon className='size-4' />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
