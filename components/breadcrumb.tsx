'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumb() {
  const pathname = usePathname()

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ]

    if (pathname.includes('/news')) {
      items.push({ label: 'News', href: '/news' })
      if (pathname.includes('/category')) {
        const category = pathname.split('/').pop()
        items.push({
          label: category?.charAt(0).toUpperCase() + category?.slice(1) || 'Category',
          href: pathname
        })
      }
    } else if (pathname.includes('/ads')) {
      items.push({ label: 'Ads', href: '/ads' })
      if (pathname.includes('/category')) {
        const category = pathname.split('/').pop()
        items.push({
          label: category?.charAt(0).toUpperCase() + category?.slice(1) || 'Category',
          href: pathname
        })
      }
      if (pathname.includes('/learning')) {
        items.push({ label: 'Learning', href: '/ads/learning' })
      }
    }

    return items
  }

  const breadcrumbs = getBreadcrumbs()

  if (breadcrumbs.length <= 1) return null

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 text-sm">
      <div className="container mx-auto max-w-6xl flex items-center gap-2 text-muted-foreground">
        {breadcrumbs.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            {idx > 0 && <ChevronRight size={16} />}
            {idx === breadcrumbs.length - 1 ? (
              <span className="text-foreground font-medium">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
