'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-8 px-6 border-t border-border"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} Birane SEYE. Tous droits reserves.
        </p>
        <div className="flex items-center gap-4">
          <a href="#accueil" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Retour en haut
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
