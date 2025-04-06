import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProjetosPage() {
  const prefix = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

  const projetos = [
    {
      id: 1,
      titulo: "Book Auctions",
      descricao:
        "Este projeto é uma plataforma inovadora para leilão de livros, projetada para conectar leitores e colecionadores em um ambiente interativo e eficiente. A aplicação permite que usuários criem leilões personalizados, acompanhem lances em tempo real e gerenciem transações de maneira prática e segura.",
      imagem: "/BookAuctions.webp",
      tecnologias: ["NextJS", "NestJS", "Postgress", "Docker"],
    },
    {
      id: 2,
      titulo: "Eventify",
      descricao:
        "Eventify é uma plataforma de gestão de eventos colaborativos desenvolvida para facilitar a organização e a divisão de despesas em grupo. Seu objetivo principal é promover maior transparência nos custos e simplificar a coordenação entre os participantes...",
      imagem: "/Eventify.webp",
      tecnologias: ["Angular", "CSS", "Java Springboot", "GCP"],
    },
    {
      id: 3,
      titulo: "ASTRO",
      descricao:
        "Astro é um jogo de aprendizado matemático. Os usuários praticam e competem entre si e através de um sistema de ranking...",
      imagem: "/Astro.webp",
      tecnologias: ["Python", "PyGame", "Pandas"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 pt-16 md:pt-16">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Meus Projetos</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Conheça alguns dos projetos que desenvolvi combinando meus conhecimentos em eletrônica e programação.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projetos.map((projeto) => (
          <Card key={projeto.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={`${prefix}${projeto.imagem || "/placeholder.svg"}`}
                alt={projeto.titulo}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{projeto.titulo}</CardTitle>
              <CardDescription>{projeto.descricao}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map((tech) => (
                  <span key={tech} className="bg-muted text-xs px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
