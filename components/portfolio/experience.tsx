'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    title: 'Consultant BI & Data Engineer',
    company: 'Handicap International – Lyon',
    period: 'Septembre 2023 – Aujourd’hui',
    tasks: [
      "Conception de solutions BI et data pour le pilotage stratégique des directions RH et Logistique",
      "Développement de dashboards Power BI performants et orientés décision",
      "Digitalisation des processus métiers via Power Apps (adoptées par +100 utilisateurs)",
      "Automatisation des flux métiers avec Power Automate, générant un gain de temps de 60 %",
      "Conception et industrialisation de flux de données (SSIS, Talend)",
      "Intégration et transformation de données multi-sources pour fiabiliser les reportings",
      "Analyse et résolution d’incidents data (support niveau 2/3)",
      "Collaboration avec les métiers pour définir des KPI pertinents et exploitables",
      "Rédaction de documentations techniques et procédures d’exploitation"
    ],
    stack: [
      "SQL Server",
      "Power BI",
      "SSIS",
      "Talend",
      "Power Apps",
      "Power Automate",
      "Docker",
      "Git",
      "Kibana",
      "ElasticSearch",
      "Jira",
      "ServiceNow",
      "Confluence",
      "Redmine",
      "GLPI",
      "Architecture Data"
    ]
  },
  {
    title: 'Analyste Développeur Data',
    company: 'Jokalanté',
    period: '2021 - 2022',
    tasks: [
      "Conception et développement de solutions data et d’applications web orientées métiers",
      "Développement en Python avec intégration et structuration de données",
      "Mise en place d’architectures applicatives complètes : API back-end, bases de données et interfaces utilisateurs",
      "Automatisation de processus pour améliorer l’efficacité opérationnelle et la fiabilité des données "
    ],
  },
  {
    title: 'Data Analyst',
    company: 'ANSD – Sénégal (Diourbel)',
    period: 'Septembre 2019 – Décembre 2019',
    tasks: [
      "Analyse de données démographiques à des fins statistiques et décisionnelles",
      "Développement de dashboards interactifs pour le suivi des indicateurs clés",
      "Identification d’incohérences et amélioration de la qualité des données",
      "Contribution à l’optimisation des méthodes de collecte et de traitement des données"
    ],
    stack: ["Excel", "SPSS", "Power BI", "R", "Python"]
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experiences" className="py-24 px-6 bg-card/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-foreground mb-12 text-center"
        >
          Experiences
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
                  }`}
              >
                <div
                  className={`absolute top-1 w-3 h-3 rounded-full bg-primary border-2 border-background left-0 md:left-1/2 md:-translate-x-1.5`}
                />
                <div className={`p-6 rounded-lg bg-background border border-border ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <span className="text-xs text-primary font-medium">{exp.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                  <ul className={`space-y-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.tasks.map((task) => (
                      <li key={task} className="text-muted-foreground text-sm">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
