"use client"

import { useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContatoPage() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState("")

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
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tem alguma pergunta ou proposta de projeto? Entre em contato comigo através do formulário abaixo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Envie uma mensagem</CardTitle>
            <CardDescription>Preencha o formulário abaixo e entrarei em contato o mais breve possível.</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" name="nome" placeholder="Seu nome completo" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="seu.email@exemplo.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="assunto">Assunto</Label>
                <Input id="assunto" name="assunto" placeholder="Assunto da mensagem" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem aqui..." rows={5} required />
              </div>
              <Button type="submit" className="w-full">Enviar Mensagem</Button>
              {status && <p className="text-center mt-2 text-sm">{status}</p>}
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Informações de Contato</CardTitle>
            <CardDescription>Outras formas de entrar em contato comigo.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">leandroleite.ll25@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h3 className="font-medium">Telefone</h3>
                <p className="text-sm text-muted-foreground">(35) 99205-8832</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h3 className="font-medium">Localização</h3>
                <p className="text-sm text-muted-foreground">Santa Rita do Sapucaí, MG - Brasil</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-medium mb-3">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/leandro-leite-760931186/"target="_blank" > 
                <Button variant="outline" size="icon" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Button>
                </a>
                <a href="https://github.com/LeandroASLeite" target="_blank"> 
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Button>
                  </a>
                  <a href="mailto:leandroleite.ll25@gmail.com" target="blank">
  <Button variant="outline" size="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
    <span className="sr-only">Enviar e-mail</span>
  </Button>
</a>
<a
  href="https://wa.me/5535992058832"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" size="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M21.5 12.2c0-5.2-4.3-9.5-9.5-9.5S2.5 7 2.5 12.2c0 1.7.4 3.3 1.2 4.7L2 22l5.3-1.5c1.3.7 2.8 1.1 4.2 1.1 5.2 0 9.5-4.3 9.5-9.5z" />
      <path d="M16.3 14.7c-.3-.1-1.7-.8-2-1s-.5-.2-.7.1-.8 1-1 1.2-.4.2-.7.1c-.3-.1-1.3-.5-2.4-1.6S7.8 11 7.7 10.7s0-.5.1-.6c.1-.1.2-.2.3-.4.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5s-.7-1.7-.9-2.3c-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.8.3s-1.1.8-1.1 2c0 1.2.9 2.3 1.1 2.6.1.1 1.8 2.8 4.4 4 .6.3 1 .5 1.3.6.5.2.9.2 1.2.1.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1z" />
    </svg>
    <span className="sr-only">Conversar no WhatsApp</span>
  </Button>
</a>


              </div>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </div>
  )
}
