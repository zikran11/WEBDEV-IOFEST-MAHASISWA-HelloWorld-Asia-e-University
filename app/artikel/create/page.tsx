'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { createPost } from '@/lib/blog-store'
import { useAuth } from '@/contexts/auth-context'
import { toast } from 'sonner'

const defaultCategories = [
  'Lingkungan',
  'Tips & Trick',
  'Kreasi',
  'Edukasi'
]

export default function CreateArtikelPage() {
  const router = useRouter()
  const { user, loading } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const pageRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )
    }, pageRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      toast.error('Anda harus login untuk membuat artikel')
      return
    }

    if (!title || !excerpt || !content || !category || !coverImage) {
      toast.error('Semua field harus diisi')
      return
    }

    setIsSubmitting(true)

    try {
      const newPost = createPost({
        title,
        excerpt,
        content,
        coverImage,
        category,
        author: {
          name: user.displayName || user.email?.split('@')[0] || 'Anonymous',
          email: user.email || ''
        }
      })

      toast.success('Artikel berhasil dibuat!')
      router.push('/artikel')
    } catch (error) {
      toast.error('Gagal membuat artikel')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8">
      <div className="container px-4 mx-auto max-w-4xl">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            className="gap-2"
            onClick={() => router.push('/artikel')}
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Buat Artikel Baru</h1>
            <p className="text-muted-foreground">Bagikan pengetahuan Anda tentang daur ulang</p>
          </div>
        </div>

        {/* Form */}
        <Card ref={formRef}>
          <CardHeader>
            <CardTitle>Detail Artikel</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="space-y-2">
                <Label htmlFor="title">Judul Artikel</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Masukkan judul artikel"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Ringkasan</Label>
                <Textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Ringkasan singkat artikel (max 200 karakter)"
                  rows={3}
                  disabled={isSubmitting}
                  maxLength={200}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  {excerpt.length}/200 karakter
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Kategori</Label>
                <Select value={category} onValueChange={setCategory} disabled={isSubmitting}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {defaultCategories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverImage">URL Gambar Cover</Label>
                <Input
                  id="coverImage"
                  type="url"
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  disabled={isSubmitting}
                  required
                />
                {coverImage && (
                  <div className="mt-2">
                    <img
                      src={coverImage}
                      alt="Preview"
                      className="w-full max-w-md h-48 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Konten Artikel</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Tulis konten artikel Anda di sini..."
                  rows={15}
                  disabled={isSubmitting}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Gunakan format markdown sederhana: # untuk heading, - untuk list, **text** untuk bold
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/artikel')}
                  disabled={isSubmitting}
                >
                  Batal
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Membuat...
                    </>
                  ) : (
                    'Buat Artikel'
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
