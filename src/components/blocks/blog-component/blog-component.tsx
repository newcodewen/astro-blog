'use client'

import { useState } from 'react'

import { SearchIcon, ArrowRightIcon, CalendarDaysIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

export type BlogPost = {
  id: number
  slug: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  pubDate: string
  author: string
  avatarUrl: string
  category: string
  readTime: number
  featured: boolean
}

interface BlogProps {
  blogData?: BlogPost[]
}

const BlogGrid = ({ posts, onCategoryClick }: { posts: BlogPost[]; onCategoryClick: (category: string) => void }) => {
  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map(post => (
        <a
          href={`/blog/${post.slug}`}
          key={post.id}
          className='group h-full cursor-pointer transition-all duration-200'
          onClick={e => {
            const target = e.target as HTMLElement

            if (target.closest('.badge')) {
              e.preventDefault()
              e.stopPropagation()
            }
          }}
        >
          <Card className='h-full overflow-hidden border-border bg-card transition-shadow duration-200 hover:shadow-lg'>
            <CardContent className='space-y-3 p-0'>
              <div className='aspect-video overflow-hidden'>
                <img
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                  loading='lazy'
                />
              </div>
              <div className='space-y-3 p-5'>
                <div className='flex items-center justify-between gap-2'>
                  <div className='text-muted-foreground flex items-center gap-1.5 text-sm'>
                    <CalendarDaysIcon className='size-4' />
                    <span>{post.pubDate}</span>
                  </div>
                  <Badge
                    variant='secondary'
                    className='badge cursor-pointer text-xs'
                    onClick={e => {
                      e.preventDefault()
                      e.stopPropagation()
                      onCategoryClick(post.category)
                    }}
                  >
                    {post.category}
                  </Badge>
                </div>
                <h3 className='text-foreground line-clamp-2 text-lg font-semibold leading-snug'>{post.title}</h3>
                <p className='text-muted-foreground line-clamp-2 text-sm'>{post.description}</p>
                <div className='flex items-center justify-between pt-2'>
                  <span className='text-foreground text-sm font-medium'>{post.author}</span>
                  <Button
                    size='sm'
                    variant='ghost'
                    className='gap-1 text-primary hover:text-primary p-0'
                  >
                    Read <ArrowRightIcon className='size-4' />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  )
}

const Blog = ({ blogData = [] }: BlogProps) => {
  const [selectedTab, setSelectedTab] = useState('All')

  const nonFeaturedPosts = blogData.filter(post => !post.featured).sort((a, b) => b.id - a.id)

  const uniqueCategories = [...new Set(nonFeaturedPosts.map(post => post.category))]
  const categories = ['All', ...uniqueCategories.sort()]

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab)

    if (tab === 'All') {
      window.location.href = '#categories'
    }
  }

  return (
    <section className='bg-muted/50 py-12 sm:py-16 lg:py-24' id='categories'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='space-y-4'>
          {selectedTab === 'All' && <p className='text-sm font-medium text-muted-foreground'>All Posts</p>}
          {selectedTab !== 'All' && (
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href='#'>Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{selectedTab}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          )}

          <h2 className='text-foreground text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl'>
            Latest Articles
          </h2>

          <p className='text-muted-foreground max-w-2xl text-lg'>
            Explore tutorials, best practices, and deep dives into modern web development.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue='All' value={selectedTab} onValueChange={handleTabChange} className='gap-6'>
          <div className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
            <ScrollArea className='w-full sm:w-auto'>
              <TabsList className='h-auto gap-1 bg-transparent p-0'>
                {categories.map(category => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    id={`category-${category}`}
                    className='cursor-pointer rounded-md border border-transparent bg-muted px-4 py-1.5 text-sm transition-colors hover:bg-muted/80 data-[state=active]:border-border data-[state=active]:bg-background'
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>

            <div className='relative w-full max-w-xs'>
              <SearchIcon className='text-muted-foreground pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2' />
              <Input
                type='search'
                placeholder='Search posts...'
                className='pl-9'
              />
            </div>
          </div>

          <TabsContent value='All' className='mt-0'>
            <BlogGrid posts={nonFeaturedPosts} onCategoryClick={handleTabChange} />
          </TabsContent>

          {categories.slice(1).map((category, index) => (
            <TabsContent key={index} value={category} className='mt-0'>
              <BlogGrid
                posts={nonFeaturedPosts.filter(post => post.category === category)}
                onCategoryClick={handleTabChange}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default Blog
