'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, AlertCircle, CheckCircle2, TrendingUp, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTracking } from '@/hooks/use-tracking'

type Project = {
  id: string
  title: string
  problem: string
  solution: string
  impact: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: '#01',
    title: "Dashboard Intelligence Climatique — Côte d'Ivoire",
    problem:
      "Les décisions agricoles en Côte d'Ivoire reposent sur des hypothèses climatiques peu fiables, entraînant des pertes de récoltes et une allocation inefficace des ressources.",
    solution:
      "Construction d'un pipeline de données complet : extraction de données satellite NASA via API, traitement Python, visualisation Power BI — permettant aux équipes agronomiques de prendre des décisions basées sur les données.",
    impact:
      "Couvre 5 villes sur 10 ans de données climatiques. Identifie les risques de sécheresse et d'inondation par saison et région.",
    tags: ['Python', 'NASA Power API', 'Power BI', 'Pandas'],
    link: 'https://github.com/ton-username/dashboard-climatique',
  },
  {
    id: '#02',
    title: "Plateforme Décisionnelle ITSM — Handicap International",
    problem:
      "Absence de vision consolidée des performances IT due à des données dispersées entre plusieurs outils (GLPI, Redmine) et à des traitements manuels chronophages.",
    solution:
      "Mise en place d'une architecture décisionnelle complète avec pipelines ETL (SSIS), centralisation des données dans un Data Warehouse, modélisation analytique et création de dashboards Power BI pour le suivi des KPI IT.",
    impact:
      "Réduction significative du temps de reporting, amélioration de la qualité des données et pilotage IT optimisé grâce à une vision fiable et en temps réel des performances.",
    tags: ['SSIS', 'SQL Server', 'Power BI', 'ETL'],
    link: 'https://github.com/ton-username/plateforme-itsm',
  },
  {
    id: '#03',
    title: "Maison Faki — Plateforme E-commerce Fullstack",
    problem:
      "La marque Maison Faki ne disposait d'aucun canal de vente en ligne, limitant sa portée commerciale et obligeant les clients à passer par des canaux non optimisés.",
    solution:
      "Développement fullstack d'une plateforme e-commerce complète : back-end Django avec gestion produits, panier et commandes, paiement sécurisé via Stripe (checkout + webhooks), déploiement cloud sur Render, médias via Cloudinary et configuration hybride MySQL (local) / PostgreSQL (prod).",
    impact:
      "Application production-ready, scalable et maintenable. Pipeline de paiement Stripe opérationnel, performances optimisées (cache Redis, index BDD) et expérience utilisateur fluide sur mobile et desktop.",
    tags: ['Django', 'Python', 'Stripe', 'PostgreSQL', 'Cloudinary', 'Redis', 'Render'],
    link: 'https://github.com/seyebirane95/maison-faki',
  }, ,
  {
    id: '#04',
    title: "Assistant Chatbot Restaurant — Réservations & Menu",
    problem:
      "Les restaurants perdent du temps à répondre manuellement aux demandes répétitives des clients (réservations, horaires, menu), au détriment de l'expérience en salle.",
    solution:
      "Développement d'un chatbot conversationnel avec reconnaissance d'intentions via SpaCy (réservation, menu, horaires), extraction d'entités (date, heure, couverts) et une architecture client-serveur — interface Streamlit côté client, API Flask déployée sur Render.",
    impact:
      "Automatisation complète des demandes courantes, réduction de la charge opérationnelle et amélioration de l'expérience client grâce à un dialogue fluide et disponible 24h/24.",
    tags: ['Python', 'SpaCy', 'Flask', 'Streamlit', 'NLP'],
    link: 'https://github.com/seyebirane95/chatbot',
  },
  {
    id: '#05',
    title: "Plateforme Data Cloud GCP — Analyse & Prédiction de Trajets",
    problem:
      "Les données issues de millions de trajets de taxis étaient massives, hétérogènes et difficiles à exploiter, limitant l’analyse de la demande, la compréhension des comportements clients et l’optimisation de la rentabilité.",

    solution:
      "Conception d’une architecture data end-to-end sur GCP avec mise en place d’un Data Lake (Cloud Storage) et d’un Data Warehouse analytique (BigQuery). Développement de pipelines ETL/ELT robustes et industrialisés avec ingestion automatisée de fichiers Parquet, gestion des chargements incrémentaux, déduplication, monitoring et préparation des données pour l’analytics avancée et la prédiction.",

    impact:
      "Mise à disposition d’une plateforme scalable permettant l’analyse de la demande, de la saisonnalité et de la rentabilité des trajets, avec des données fiables et prêtes pour des cas d’usage avancés (optimisation opérationnelle, prédiction).",

    tags: ['GCP', 'BigQuery', 'Cloud Storage', 'Airflow', 'Python', 'SQL'],

    link: 'https://github.com/seyebirane95/Taxis-jaune-nyc-'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { trackProjectClick } = useTracking()

  const handleProjectClick = (projectTitle: string) => {
    trackProjectClick(projectTitle)
  }

  return (
    <section id="projets" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-foreground mb-12 text-center"
        >
          Projets
        </motion.h2>

        <div className="grid gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors cursor-pointer group"
              onClick={() => handleProjectClick(project.title)}
            >
              {/* Top row: id + external link */}
              <div className="flex items-start justify-between mb-1">
                <span className="font-mono text-[11px] text-muted-foreground tracking-widest">
                  {project.id}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-bold text-foreground mb-5 leading-snug">
                {project.title}
              </h3>

              {/* Problem / Solution / Impact columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                {/* Problem */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <AlertCircle className="w-3 h-3 text-red-500 flex-shrink-0" />
                    <span className="font-mono text-[10px] font-medium tracking-widest uppercase text-red-500">
                      Problem
                    </span>
                  </div>
                  <p className="text-[12.5px] leading-relaxed text-muted-foreground">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                    <span className="font-mono text-[10px] font-medium tracking-widest uppercase text-emerald-500">
                      Solution
                    </span>
                  </div>
                  <p className="text-[12.5px] leading-relaxed text-muted-foreground">
                    {project.solution}
                  </p>
                </div>

                {/* Impact */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <TrendingUp className="w-3 h-3 text-blue-500 flex-shrink-0" />
                    <span className="font-mono text-[10px] font-medium tracking-widest uppercase text-blue-500">
                      Impact
                    </span>
                  </div>
                  <p className="text-[12.5px] leading-relaxed text-muted-foreground">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border mb-4" />

              {/* Tags */}
              <div className="flex items-center gap-2 flex-wrap">
                <Layers className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-background border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <Button variant="outline">Voir plus</Button>
        </motion.div>
      </div>
    </section>
  )
}
