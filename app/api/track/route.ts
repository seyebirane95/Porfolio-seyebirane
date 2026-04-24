import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

interface TrackingEvent {
  event: 'page_view' | 'cv_download' | 'project_click'
  page: string
  timestamp: string
  userAgent?: string
}

const DATA_FILE = path.join(process.cwd(), 'data', 'tracking.json')

async function ensureDataFile() {
  const dir = path.dirname(DATA_FILE)
  try {
    await fs.access(dir)
  } catch {
    await fs.mkdir(dir, { recursive: true })
  }
  try {
    await fs.access(DATA_FILE)
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify({ events: [] }))
  }
}

async function readEvents(): Promise<TrackingEvent[]> {
  await ensureDataFile()
  const data = await fs.readFile(DATA_FILE, 'utf-8')
  return JSON.parse(data).events || []
}

async function writeEvents(events: TrackingEvent[]) {
  await ensureDataFile()
  await fs.writeFile(DATA_FILE, JSON.stringify({ events }, null, 2))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { event, page } = body

    if (!event || !page) {
      return NextResponse.json({ error: 'Missing event or page' }, { status: 400 })
    }

    const trackingEvent: TrackingEvent = {
      event,
      page,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || undefined,
    }

    const events = await readEvents()
    events.push(trackingEvent)
    await writeEvents(events)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Tracking error:', error)
    return NextResponse.json({ error: 'Failed to track event' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const events = await readEvents()
    
    const stats = {
      totalViews: events.filter(e => e.event === 'page_view').length,
      cvDownloads: events.filter(e => e.event === 'cv_download').length,
      projectClicks: events.filter(e => e.event === 'project_click').length,
      pageViews: {} as Record<string, number>,
      recentEvents: events.slice(-50).reverse(),
      dailyStats: {} as Record<string, { views: number; downloads: number; clicks: number }>,
    }

    events.forEach(e => {
      if (e.event === 'page_view') {
        stats.pageViews[e.page] = (stats.pageViews[e.page] || 0) + 1
      }
      
      const date = e.timestamp.split('T')[0]
      if (!stats.dailyStats[date]) {
        stats.dailyStats[date] = { views: 0, downloads: 0, clicks: 0 }
      }
      if (e.event === 'page_view') stats.dailyStats[date].views++
      if (e.event === 'cv_download') stats.dailyStats[date].downloads++
      if (e.event === 'project_click') stats.dailyStats[date].clicks++
    })

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Stats error:', error)
    return NextResponse.json({ error: 'Failed to get stats' }, { status: 500 })
  }
}
