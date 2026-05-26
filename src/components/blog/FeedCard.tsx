import { ArrowRight } from 'lucide-react'

export interface FeedCardProps {
  slug: string
  title: string
  description: string
  pubDate: string
  category: string
}

export function FeedCard({ slug, title, description, pubDate, category }: FeedCardProps) {
  return (
    <a
      href={`/blog/${slug}`}
      className='group block border-b border-border/40 py-6 transition-colors last:border-0 hover:border-primary/20'
    >
      <div class='space-y-2'>
        <div class='flex items-center gap-2.5 text-xs text-muted-foreground/60'>
          <time>{pubDate}</time>
          <span class='text-muted-foreground/30'>·</span>
          <span>{category}</span>
        </div>
        <div class='flex items-center gap-2'>
          <h3 class='text-foreground text-lg font-medium tracking-tight transition-colors group-hover:text-primary sm:text-xl'>
            {title}
          </h3>
          <ArrowRight class='text-muted-foreground/30 group-hover:text-primary h-4 w-4 transition-all group-hover:translate-x-0.5' />
        </div>
        <p class='text-muted-foreground/70 text-sm leading-relaxed line-clamp-2 max-w-xl'>
          {description}
        </p>
      </div>
    </a>
  )
}
