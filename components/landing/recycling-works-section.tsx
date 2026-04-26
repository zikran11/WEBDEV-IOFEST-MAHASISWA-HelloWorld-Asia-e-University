'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, ArrowRight, Eye } from 'lucide-react'
import {
  getAllPostsFirestore,
  getFirestoreErrorMessage,
} from '@/lib/blog-firestore-store'
import type { BlogPost } from '@/lib/blog-store'
import { useAuth } from '@/contexts/auth-context'
import { toast } from 'sonner'

export function RecyclingWorksSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const cardsRef = useRef<HTMLDivElement | null>(null)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const { user } = useAuth()

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = await getAllPostsFirestore()
        // Get latest 3 posts for display
        const latestPosts = allPosts
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 3)
        setPosts(latestPosts)
      } catch (error) {
        toast.error(getFirestoreErrorMessage(error, 'Gagal memuat karya daur ulang'))
        setPosts([])
      }
    }

    loadPosts()
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const cards = cardsRef.current?.querySelectorAll('.recycling-card') ?? []

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
          invalidateOnRefresh: true,
        }
      }
    )
  }, [posts])

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const handleViewMore = () => {
    if (!user) {
      window.location.href = '/login'
    } else {
      window.location.href = '/blog'
    }
  }

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-primary/5 to-secondary/10">
      <div className="container px-4 mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Karya Daur Ulang
          </h2>
          <p className="text-muted-foreground">
            Inspirasi kreatif dari komunitas kami dalam mendaur ulang bahan bekas menjadi sesuatu yang bernilai
          </p>
        </div>

        {/* Cards */}
        {posts.length > 0 ? (
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {posts.map((post) => (
              <Card key={post.id} className="recycling-card group hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-5">
                  <Badge variant="secondary" className="mb-2">
                    {post.category}
                  </Badge>

                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.createdAt)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <Eye className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Belum Ada Karya Daur Ulang
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Jadilah yang pertama membagikan karya kreatif daur ulang Anda!
            </p>
          </div>
        )}

        {/* View More Button */}
        <div className="text-center">
          <Button
            onClick={handleViewMore}
            className="gap-2"
            size="lg"
          >
            Lihat Karya Lainnya
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
