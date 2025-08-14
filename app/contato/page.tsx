'use client'

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
// import { Mail, Phone, MapPin } from "lucide-react"
import { Linkedin, Github, Mail, Phone, MapPin, MessageSquare } from "lucide-react"



export default function ContatoPage() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState("")
  const redes = [
  { label: "LinkedIn", href: "...", icon: <Linkedin className="h-5 w-5" /> },
  { label: "GitHub", href: "...", icon: <Github className="h-5 w-5" /> },
  { label: "Email", href: "...", icon: <Mail className="h-5 w-5" /> },
  { label: "WhatsApp", href: "...", icon: <MessageSquare className="h-5 w-5" /> },
]


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      console.log("E-mail enviado:", response)
      setStatus("Mensagem enviada com sucesso!")
      form.current.reset()
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error)
      setStatus("Erro ao enviar a mensagem. Tente novamente.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 pt-16 md:pt-16">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tem alguma pergunta ou proposta de projeto? Entre em contato comigo através do formulário abaixo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Envie uma mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entrarei em contato o mais breve possível.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome</Label>
                    <Input id="nome" name="nome" placeholder="Seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="seu.email@exemplo.com" required />
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Label htmlFor="assunto">Assunto</Label>
                  <Input id="assunto" name="assunto" placeholder="Assunto da mensagem" required />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem aqui..." rows={5} required />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button type="submit" className="w-full">Enviar Mensagem</Button>
                  {status && <p className="text-center mt-2 text-sm">{status}</p>}
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
              <CardDescription>Outras formas de entrar em contato comigo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "leandroleite.ll25@gmail.com" },
                { icon: Phone, label: "Telefone", value: "(35) 99205-8832" },
                { icon: MapPin, label: "Localização", value: "Santa Rita do Sapucaí, MG - Brasil" },
              ].map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.label}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-medium">{info.label}</h3>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.div>
                )
              })}

              <motion.div
                className="pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="font-medium mb-3">Redes Sociais</h3>
                <div className="flex space-x-4">
                  {redes.map((rede) => (

                    <motion.a
                      key={rede.label}
                      href={rede.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                     <Button variant="outline" size="icon" className="h-10 w-10">
  {rede.icon}
</Button>

                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}