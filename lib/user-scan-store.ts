import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  Timestamp,
} from 'firebase/firestore'
import { db, isFirebaseConfigured } from '@/lib/firebase'
import { WasteAnalysisResult } from './mock-ai-data'

const LOCAL_USER_SCAN_STORAGE_PREFIX = 'smart-waste-user-scans-'

function getLocalStorageKey(userId: string) {
  return `${LOCAL_USER_SCAN_STORAGE_PREFIX}${userId}`
}

function loadLocalUserScans(userId: string): WasteAnalysisResult[] {
  if (typeof window === 'undefined') return []

  try {
    const stored = localStorage.getItem(getLocalStorageKey(userId))
    if (!stored) return []
    return JSON.parse(stored) as WasteAnalysisResult[]
  } catch {
    return []
  }
}

function saveLocalUserScans(userId: string, scans: WasteAnalysisResult[]) {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(getLocalStorageKey(userId), JSON.stringify(scans))
  } catch {
    // ignore storage errors
  }
}

function createUserScansCollection(userId: string) {
  if (!db) throw new Error('Firestore is not initialized')
  return collection(db, 'users', userId, 'scans')
}

export async function saveUserScanResult(userId: string, scan: WasteAnalysisResult): Promise<void> {
  const normalizedScan = {
    ...scan,
    createdAt: scan.createdAt instanceof Date ? scan.createdAt : new Date(scan.createdAt),
  }

  if (isFirebaseConfigured && db) {
    const scanRef = doc(createUserScansCollection(userId), scan.id)
    await setDoc(scanRef, normalizedScan)
    return
  }

  const localScans = loadLocalUserScans(userId)
  saveLocalUserScans(userId, [normalizedScan, ...localScans])
}

export async function getUserScanHistory(userId: string): Promise<WasteAnalysisResult[]> {
  if (isFirebaseConfigured && db) {
    const scansQuery = query(
      createUserScansCollection(userId),
      orderBy('createdAt', 'desc')
    )
    const snapshot = await getDocs(scansQuery)

    return snapshot.docs.map(docSnap => {
      const data = docSnap.data() as WasteAnalysisResult & { createdAt: Timestamp }
      return {
        ...data,
        createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(data.createdAt),
      }
    })
  }

  return loadLocalUserScans(userId)
}
