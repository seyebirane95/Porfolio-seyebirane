'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useTracking } from '@/hooks/use-tracking'

const titles = [
  'Data Engineer',
  'Consultant BI',
  'Support Applicatif',
  'Expert ETL/ELT'
]

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const { trackCvDownload, trackPageView } = useTracking()

  useEffect(() => {
    trackPageView('accueil')
  }, [trackPageView])

  useEffect(() => {
    const currentTitle = titles[titleIndex]

    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        }, 80)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 40)
        return () => clearTimeout(timeout)
      } else {
        setTitleIndex((prev) => (prev + 1) % titles.length)
        setIsTyping(true)
      }
    }
  }, [displayText, isTyping, titleIndex])

  const handleCvDownload = () => {
    trackCvDownload()
  }

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10">
            <Image
              src="/images/profile.jpg"
              alt="Birane SEYE - Data Engineer"
              width={144}
              height={144}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4"
        >
          Birane SEYE
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-8 mb-6"
        >
          <span className="text-xl text-primary font-medium">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto"
        >
          Data / BI Analyst diplômée en ingénierie des données, spécialisée en infrastructures data,
          je transforme des jeux de données complexes en insights clairs, fiables et directement exploitables.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-2xl mx-auto"
        >
          Forte d&apos;expériences chez Handicap International et à l&apos;Agence Nationale de la Statistique
          et de la Démographie (ANSD), j&apos;allie expertise technique et compréhension des enjeux métiers
          pour produire des solutions data à fort impact.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-2xl mx-auto"
        >
          J&apos;interviens sur toute la chaîne de valeur de la donnée : automatisation de pipelines,
          structuration des bases SQL, et conception de dashboards Power BI performants.
          Mes solutions permettent de réduire significativement les tâches manuelles — jusqu&apos;à 80 % de gain de temps —
          et d&apos;améliorer la prise de décision.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          J&apos;évolue avec aisance dans des environnements complexes et dynamiques, où la donnée devient
          un véritable levier stratégique. Mon objectif : transformer la donnée en avantage compétitif concret.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild onClick={handleCvDownload} className="gap-2">
            <a href="/cv-birane-seye.pdf" download="CV-Birane-SEYE-Data-Engineer.pdf">
              <Download className="w-4 h-4" />
              Telecharger mon CV
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projets">Voir mes projets</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16"
        >
          <a href="#apropos" className="inline-block text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
