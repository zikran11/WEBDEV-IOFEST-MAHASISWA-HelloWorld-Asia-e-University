'use client'

import { useEffect, useRef, useState, use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { getPostById } from '@/lib/blog-store'
import type { BlogPost } from '@/lib/blog-store'
import { toast } from 'sonner'

export default function ArtikelDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const pageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const foundPost = getPostById(resolvedParams.id)
      if (foundPost) {
        setPost(foundPost)
      } else {
        toast.error('Artikel tidak ditemukan')
        router.push('/artikel')
      }
    } catch (error) {
      toast.error('Gagal memuat artikel')
      router.push('/artikel')
    }
  }, [resolvedParams.id, router])

  useEffect(() => {
    if (!post) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
    }, pageRef)

    return () => ctx.revert()
  }, [post])

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headings
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-foreground">{line.slice(2)}</h1>
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3 text-foreground">{line.slice(3)}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold mt-4 mb-2 text-foreground">{line.slice(4)}</h3>
        }
        // List items
        if (line.startsWith('- ')) {
          return (
            <li key={index} className="ml-6 text-muted-foreground list-disc">
              {line.slice(2).split(/(\*\*.*?\*\*)/g).map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={i}>{part.slice(2, -2)}</strong>
                }
                return part
              })}
            </li>
          )
        }
        // Numbered list
        if (/^\d+\.\s/.test(line)) {
          return (
            <li key={index} className="ml-6 text-muted-foreground list-decimal">
              {line
                .replace(/^\d+\.\s/, '')
                .split(/(\*\*.*?\*\*)/g)
                .map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i}>{part.slice(2, -2)}</strong>
                  }
                  return part
                })}
            </li>
          )
        }
        // Empty line
        if (line.trim() === '') {
          return <br key={index} />
        }
        // Regular paragraph
        return <p key={index} className="text-muted-foreground leading-relaxed mb-2">{line}</p>
      })
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8">
      <div className="container px-4 mx-auto max-w-4xl">
        {/* Back Button */}
        <div className="mb-6">
          <Button
            variant="ghost"
            className="gap-2"
            onClick={() => router.push('/artikel')}
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>
        </div>

        {/* Article */}
        <article ref={contentRef}>
          {/* Cover Image */}
          <div className="aspect-video rounded-xl overflow-hidden mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Header */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                {post.author.name}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.createdAt)}
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
        </article>

        {/* Related Articles CTA */}
        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Ingin membaca artikel lainnya?
            </h3>
            <p className="text-muted-foreground mb-4">
              Jelajahi lebih banyak artikel tentang daur ulang dan ekonomi sirkular.
            </p>
            <Button asChild>
              <Link href="/artikel">
                Lihat Semua Artikel
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
