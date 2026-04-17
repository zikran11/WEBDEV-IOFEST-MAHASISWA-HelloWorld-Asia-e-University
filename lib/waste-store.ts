import { WasteAnalysisResult } from './mock-ai-data'

const STORAGE_KEY = 'smart-waste-scan-history'
let scanHistory: WasteAnalysisResult[] = []

function loadHistoryFromStorage(): WasteAnalysisResult[] {
  if (typeof window === 'undefined') return scanHistory

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? (JSON.parse(stored) as WasteAnalysisResult[]) : scanHistory
  } catch {
    return scanHistory
  }
}

function saveHistoryToStorage(history: WasteAnalysisResult[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
  } catch {
    // ignore storage errors in demo mode
  }
}

export function addScanToHistory(scan: WasteAnalysisResult): void {
  // Hanya simpan hasil yang valid sebagai sampah ke history/dashboard
  if (scan.validationStatus === 'trash') {
    const history = getScanHistory()
    scanHistory = [scan, ...history]
    saveHistoryToStorage(scanHistory)
  }
}

export function getScanHistory(): WasteAnalysisResult[] {
  scanHistory = loadHistoryFromStorage()
  return scanHistory
}

export function clearHistory(): void {
  scanHistory = []
  saveHistoryToStorage(scanHistory)
}

export function getTotalStats() {
  const history = getScanHistory()

  const totalScans = history.length
  const totalEconomicValue = history.reduce((sum, scan) => sum + scan.pricePerKg, 0)
  const totalCo2Reduction = history.reduce((sum, scan) => sum + scan.environmentalImpact.co2Reduction, 0)
  const totalEnergySaving = history.reduce((sum, scan) => sum + scan.environmentalImpact.energySaving, 0)
  const totalWaterSaving = history.reduce((sum, scan) => sum + scan.environmentalImpact.waterSaving, 0)
  const totalTreeEquivalent = history.reduce((sum, scan) => sum + scan.environmentalImpact.treeEquivalent, 0)

  return {
    totalScans,
    totalEconomicValue,
    totalCo2Reduction,
    totalEnergySaving,
    totalWaterSaving,
    totalTreeEquivalent
  }
}
