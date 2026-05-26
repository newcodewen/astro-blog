'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface SearchPost {
  slug: string
  title: string
  description: string
  category: string
  pubDate: string
}

interface SearchDialogProps {
  posts: SearchPost[]
}

export function SearchDialog({ posts }: SearchDialogProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const handler = () => setOpen(true)
    document.addEventListener('open-search', handler)

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('open-search', handler)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
      setSelectedIndex(0)
    }
  }, [open])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const filtered = query.trim()
    ? posts.filter(
        p =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : posts.slice(0, 8)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(i => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      window.location.href = `/blog/${filtered[selectedIndex].slug}`
    }
  }

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className='fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm'
        onClick={() => setOpen(false)}
      />

      {/* Dialog */}
      <div className='fixed left-1/2 top-[15vh] z-[101] w-full max-w-xl -translate-x-1/2 px-4'>
        <div className='overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl'>
          {/* Input */}
          <div className='flex items-center gap-3 border-b border-border/50 px-5 py-4'>
            <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-muted-foreground/50 shrink-0'>
              <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder='搜索文章...'
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className='flex-1 bg-transparent text-foreground placeholder-muted-foreground/40 text-base outline-none'
            />
            <button
              onClick={() => setOpen(false)}
              className='text-muted-foreground/40 hover:text-muted-foreground text-xs transition-colors'
            >
              <kbd className='rounded-md border border-border bg-muted/50 px-1.5 py-0.5 text-[10px] font-mono'>
                ESC
              </kbd>
            </button>
          </div>

          {/* Results */}
          <div className='max-h-80 overflow-y-auto p-2'>
            {filtered.length === 0 ? (
              <div className='text-muted-foreground/50 py-8 text-center text-sm'>
                没有找到相关文章
              </div>
            ) : (
              <div className='space-y-0.5'>
                {filtered.map((post, i) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={cn(
                      'flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors',
                      i === selectedIndex
                        ? 'bg-primary/10 text-foreground'
                        : 'text-foreground hover:bg-muted/50'
                    )}
                    onMouseEnter={() => setSelectedIndex(i)}
                  >
                    <span className='text-sm font-medium leading-snug'>{post.title}</span>
                    <div className='flex items-center gap-2'>
                      <span className='text-muted-foreground/60 text-xs'>{post.category}</span>
                      <span className='text-muted-foreground/30 text-xs'>·</span>
                      <span className='text-muted-foreground/60 text-xs'>{post.pubDate}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {filtered.length > 0 && (
              <div className='border-t border-border/30 mt-2 px-4 pt-3 pb-1'>
                <div className='flex items-center gap-4 text-muted-foreground/40 text-[11px]'>
                  <span><kbd className='rounded border border-border/50 px-1 font-mono'>↑↓</kbd> 导航</span>
                  <span><kbd className='rounded border border-border/50 px-1 font-mono'>↵</kbd> 打开</span>
                  <span><kbd className='rounded border border-border/50 px-1 font-mono'>ESC</kbd> 关闭</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
