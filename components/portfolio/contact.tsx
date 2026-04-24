'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Linkedin, Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Message de ${formData.name}`)
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\n\n${formData.message}`
    )

    window.location.href = `mailto:seyebirane95@gmail.com?subject=${subject}&body=${body}`

    setSent(true)
    setFormData({ name: '', email: '', message: '' })

    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-card/50" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-foreground mb-4 text-center"
        >
          Contact
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-center mb-12"
        >
          Construisons ensemble des solutions data performantes
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <a
            href="mailto:seyebirane95@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/birane-seye-0050291b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </motion.div>

        <motion.form
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >



          {sent && (
            <p className="text-center text-sm text-muted-foreground">
              Votre client mail s'est ouvert avec le message pré-rempli.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}