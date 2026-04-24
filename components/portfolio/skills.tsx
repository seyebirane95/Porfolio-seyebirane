'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Settings, Cloud, BarChart3, Database } from 'lucide-react'

const skillCategories = [
  {
    icon: Settings,
    title: 'Data Engineering',
    skills: ['ETL / ELT (SSIS, Talend)', 'Pipelines de donnees', 'Ingestion batch & API', 'Monitoring & logs'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Big Data',
    skills: ['Azure, GCP', 'BigQuery, Databricks', 'Spark'],
  },
  {
    icon: BarChart3,
    title: 'Data & BI',
    skills: ['Power BI (DAX)', 'SQL', 'Excel Avancé', 'SAP Analytics', 'Modélisation de données'],
  },
  {
    icon: Database,
    title: 'Bases de donnees',
    skills: ['SQL Server', 'BigQuery', 'Snowflake', 'Neo4j', 'Cassandra', 'PostgreSQL', 'MongoDB'],
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="competences" className="py-24 px-6 bg-card/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-foreground mb-12 text-center"
        >
          Compétences & Outils
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-background border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
