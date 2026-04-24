'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, GraduationCap, Target, Lightbulb } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="apropos" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-foreground mb-12 text-center"
        >
          A propos
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-lg bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <User className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Qui suis-je</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Data Engineer et Consultant BI, je suis spécialisé dans la conception de pipelines de données, la qualité des données et l’intégration de systèmes complexes.J’interviens sur l’ensemble de la chaîne data, de l’ingestion à la valorisation, en concevant des architectures robustes (Cloud, Data Warehouse, ETL/ELT, APIs) adaptées aux enjeux métiers.Fort d’une expérience en environnement de production critique, je suis également impliqué dans le support applicatif, le diagnostic d’incidents complexes et l’amélioration continue des systèmes.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-lg bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Formation</h3>
            </div>
            <ul className="text-muted-foreground text-sm space-y-2">
              <li> 2023-2025 Mastere Data Engineer - Ynov Lyon </li>
              <li> 2022-2023  Master 1 Intelligence Artificielle Distribué - Paris Cité </li>
              <li> 2020-2022 Master Statistiques & Informatique Decisionnelle </li>
              <li> 2017-2020 Licence 3 Statistiques & Informatique Decisionnelle</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-lg bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Objectifs</h3>
            </div>
            <ul className="text-muted-foreground text-sm space-y-2">
              <li>Concevoir des pipelines de données robustes et des plateformes décisionnelles à fort impact en combinant ingénierie data, IA conversationnelle et développement fullstack pour transformer la donnée brute en valeur métier concrète et mesurable.</li>

            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-lg bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Esprit analytique', 'Communication', 'Rigueur', 'Autonomie', 'Conseil'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
