'use client'

import { useCallback } from 'react'

type TrackingEvent = 'page_view' | 'cv_download' | 'project_click'

export function useTracking() {
  const track = useCallback(async (event: TrackingEvent, page: string) => {
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, page }),
      })
    } catch (error) {
      console.error('Tracking failed:', error)
    }
  }, [])

  const trackPageView = useCallback((page: string) => {
    track('page_view', page)
  }, [track])

  const trackCvDownload = useCallback(() => {
    track('cv_download', 'cv')
  }, [track])

  const trackProjectClick = useCallback((projectName: string) => {
    track('project_click', projectName)
  }, [track])

  return { track, trackPageView, trackCvDownload, trackProjectClick }
}
