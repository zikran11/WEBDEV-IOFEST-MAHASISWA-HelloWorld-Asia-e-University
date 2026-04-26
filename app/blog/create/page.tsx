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
import {
  createPostFirestore,
  getAllPostsFirestore,
  getCategoriesFromPosts,
  getFirestoreErrorMessage,
} from '@/lib/blog-firestore-store'
import { useAuth } from '@/contexts/auth-context'
import { toast } from 'sonner'

const defaultCategories = [
  'Lingkungan',
  'Tips',
  'Kreasi',
  'Edukasi'
]

export default function CreateBlogPage() {
  const router = useRouter()
  const { user, loading } = useAuth()

  const [categories, setCategories] = useState<string[]>(defaultCategories)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null)
  const [coverImagePreview, setCoverImagePreview] = useState('')

  const pageRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const posts = await getAllPostsFirestore()
        const existingCategories = getCategoriesFromPosts(posts)
        setCategories(Array.from(new Set([...defaultCategories, ...existingCategories])))
      } catch (error) {
        toast.error(getFirestoreErrorMessage(error, 'Gagal memuat kategori'))
      }
    }
    loadCategories()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
    }, pageRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!coverImageFile) {
      setCoverImagePreview('')
      return
    }

    const objectUrl = URL.createObjectURL(coverImageFile)
    setCoverImagePreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [coverImageFile])

  // 🔥 Upload ke Cloudinary
  const uploadImageToCloudinary = async (file: File) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET

    if (!cloudName || !uploadPreset) {
      throw new Error('Cloudinary belum dikonfigurasi')
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', uploadPreset)

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData
      }
    )

    if (!res.ok) throw new Error('Upload gagal')

    const data = await res.json()
    return data.secure_url
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !excerpt || !content || !category) {
      toast.error('Lengkapi semua field')
      return
    }

    if (!coverImageFile) {
      toast.error('Upload gambar cover')
      return
    }

    if (!user?.uid) {
      toast.error('User tidak valid')
      return
    }

    setIsSubmitting(true)

    try {
      // Upload gambar
      const imageUrl = await uploadImageToCloudinary(coverImageFile)

      // Simpan ke Firestore
      await createPostFirestore({
        title,
        excerpt,
        content,
        category,
        coverImage: imageUrl,
        author: {
          name: user.email?.split('@')[0] || 'User',
          email: user.email || ''
        }
      }, user.uid)

      toast.success('Blog berhasil dipublish!')
      router.push('/blog')
    } catch (error) {
      toast.error(getFirestoreErrorMessage(error, 'Gagal publish blog'))
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return <div className="flex justify-center p-10">Loading...</div>
  }

  if (!user) return null

  return (
    <div ref={pageRef} className="min-h-screen py-8">
      <div className="container max-w-3xl mx-auto px-4">

        <Button variant="ghost" onClick={() => router.push('/blog')}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali
        </Button>

        <Card ref={formRef} className="mt-4">
          <CardHeader>
            <CardTitle>Tulis Blog Baru</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">

              <Input
                placeholder="Judul Blog"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <Textarea
                placeholder="Deskripsi singkat"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
              />

              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div>
                <Label>Upload Gambar</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) setCoverImageFile(file)
                  }}
                />
              </div>

              {coverImagePreview && (
                <div className="w-full h-64 overflow-hidden rounded-lg">
                  <img
                    src={coverImagePreview}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <Textarea
                rows={10}
                placeholder="Isi blog..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Uploading...
                  </>
                ) : 'Publikasikan'}
              </Button>

            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}