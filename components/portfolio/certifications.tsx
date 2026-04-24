'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const certifications = [
  {
    title: 'Elaborer et piloter un projet data',
    issuer: 'RNCP39586-BC03',
    date: '2025',
    pdfUrl: '/certifications/elaborer-piloter-projet-data.pdf',
  },
  {
    title: 'Analyser, organiser et valoriser des données',
    issuer: 'RNCP39586-BC02',
    date: '2025',
    pdfUrl: '/certifications/analyser-organiser-valoriser-donnees.pdf',
  },
  {
    title: 'Databricks Certified Data Engineer',
    issuer: 'Databricks',
    date: 'En Cours',
    pdfUrl: null,
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-foreground mb-12 text-center"
        >
          Certifications
        </motion.h2>

        <div className="grid gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 rounded-lg bg-card border border-border flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} - {cert.date}
                  </p>
                </div>
              </div>
              {cert.pdfUrl ? (
                <Button variant="ghost" size="sm" className="gap-2" asChild>
                  <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Voir</span>
                  </a>
                </Button>
              ) : (
                <Button variant="ghost" size="sm" className="gap-2 opacity-50 cursor-not-allowed" disabled>
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">{cert.date === 'En Cours' ? 'En cours' : 'Voir'}</span>
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
