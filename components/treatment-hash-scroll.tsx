'use client'

import { useEffect } from 'react'

// Lets short or mixed-case links like /treatments#PRX-PLUS or #pixel reach the
// matching card. Exact slug hashes are already handled natively by the browser.
export function TreatmentHashScroll({ slugs }: { slugs: string[] }) {
  useEffect(() => {
    function scrollToHash() {
      const raw = window.location.hash.slice(1)
      if (!raw) return

      let hash: string
      try {
        hash = decodeURIComponent(raw)
      } catch {
        hash = raw
      }
      if (document.getElementById(hash)) return

      const needle = hash.trim().toLowerCase().replace(/[\s_]+/g, '-')
      if (!needle) return
      const slug =
        slugs.find((candidate) => candidate === needle) ??
        slugs.find((candidate) => candidate.startsWith(needle)) ??
        slugs.find((candidate) => candidate.includes(needle))

      if (slug) document.getElementById(slug)?.scrollIntoView({ block: 'start' })
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [slugs])

  return null
}
