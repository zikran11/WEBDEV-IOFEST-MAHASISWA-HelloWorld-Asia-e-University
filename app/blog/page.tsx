'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { PenSquare, Search, Calendar, User, ArrowRight } from 'lucide-react'
import {
  getAllPostsFirestore,
  getFirestoreErrorMessage,
} from '@/lib/blog-firestore-store'
import type { BlogPost } from '@/lib/blog-store'
import { useAuth } from '@/contexts/auth-context'
import { toast } from 'sonner'

export default function BlogPage() {
  const { user } = useAuth()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const pageRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // 🔥 FIXED CATEGORY
  const fixedCategories = ['Lingkungan', 'Tips & Trick', 'Kreasi', 'Edukasi']

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await getAllPostsFirestore()
        setPosts(fetchedPosts)
        setCategories(fixedCategories)
      } catch (error) {
        setPosts([])
        setCategories(fixedCategories)
        toast.error(getFirestoreErrorMessage(error, 'Gagal memuat blog dari Firestore'))
      }
    }

    loadPosts()
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const blogCards = document.querySelectorAll('.blog-card')
    if (blogCards.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 }
      )

      gsap.fromTo(
        blogCards,
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

  const formatDate = (date: any) => {
    const d = date?.toDate ? date.toDate() : new Date(date)
    return d.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8">
      <div className="container px-4 mx-auto max-w-6xl">

        {/* 🔥 HEADER */}
        <div ref={headerRef} className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Jelajahi Dunia Daur Ulang
              </h1>
              <p className="text-muted-foreground mt-1">
                Temukan tips, panduan, dan insight untuk hidup lebih ramah lingkungan
              </p>
            </div>

            {user && (
              <Button asChild className="gap-2">
                <Link href="/blog/create">
                  <PenSquare className="w-4 h-4" />
                  Tulis Blog
                </Link>
              </Button>
            )}

          </div>

          {/* 🔍 SEARCH + FILTER */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
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

        {/* 📰 BLOG GRID */}
        {filteredPosts.length > 0 ? (
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredPosts.map((post) => (
              <Card key={post.id} className="blog-card overflow-hidden hover:shadow-lg transition-all duration-300 group">

                <div className="w-full h-48 overflow-hidden rounded-t-xl bg-muted">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <CardContent className="p-5">
                  <Badge className="mb-3">{post.category}</Badge>

                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
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
                  <Button variant="ghost" className="w-full gap-2" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>

              </Card>
            ))}

          </div>
        ) : (
          <Card className="py-16">
            <CardContent className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                Tidak Ada Artikel
              </h3>
              <p className="text-muted-foreground">
                Belum ada artikel atau tidak ditemukan
              </p>
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  )
}