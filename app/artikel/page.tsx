'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, Calendar, User, ArrowRight } from 'lucide-react'
import { getAllPosts, getCategories, BlogPost } from '@/lib/blog-store'
import { useAuth } from '@/contexts/auth-context'

export default function ArtikelPage() {
  const { user } = useAuth()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Define the fixed categories
  const fixedCategories = ['Lingkungan', 'Tips & Trick', 'Kreasi', 'Edukasi']

  const pageRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPosts(getAllPosts())
    setCategories(fixedCategories)
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const articleCards = document.querySelectorAll('.article-card')
    if (articleCards.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )

      gsap.fromTo(
        articleCards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, pageRef)

    return () => ctx.revert()
  }, [posts])

  const filteredPosts = posts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory =
      !selectedCategory || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8">
      <div className="container px-4 mx-auto max-w-6xl">

        {/* Header */}
        <div ref={headerRef} className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Jelajahi Dunia Daur Ulang
          </h1>
          <p className="text-muted-foreground mt-1">
            Temukan tips, panduan, dan insight untuk hidup lebih ramah lingkungan
          </p>

          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="flex-1">
              <Input
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                Semua
              </Button>

              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredPosts.length > 0 ? (
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredPosts.map((post) => (
              <Card key={post.id} className="article-card overflow-hidden group hover:shadow-lg transition">

                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                <CardContent className="p-5">
                  <Badge className="mb-3" variant="secondary">
                    {post.category}
                  </Badge>

                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author.name}
                    </div>

                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.createdAt)}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-5 pt-0">
                  <Button asChild variant="ghost" className="w-full gap-2">
                    <Link href={`/artikel/${post.id}`}>
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>

              </Card>
            ))}

          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            Tidak ada artikel ditemukan
          </div>
        )}

      </div>
    </div>
  )
}