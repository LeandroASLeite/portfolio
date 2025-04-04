import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, Award, Medal } from "lucide-react"

export default function PremiacoesPage() {
  const premiacoes = [
    {
      id: 1,
      titulo: "1º Lugar na Feira de Tecnologia e Empreendedorismo da FAI",
      projeto: "Eventify",
      descricao:
        "Premiado pelo desenvolvimento do Eventify, que é uma solução inovadora que simplifica o planejamento e a gestão de eventos, oferecendo ferramentas intuitivas para organização, agendamento, registro de participantes e divulgação. Feito para tornar o processo mais eficiente e conectado, ele é ideal para atender às necessidades de organizadores e participantes de forma prática.",
      instituicao: "FAI- Centro de Ensino Superior em Gestão, Tecnologia e Educação",
      ano: "2024",
      imagem: "/Faitec2024.webp",
      icone: Trophy,
    },
    {
      id: 2,
      titulo: "1º Lugar na 20ª edição da Maratona de programação da FAI",
      descricao:"Competição que desafia equipes a resolver problemas complexos de programação em tempo limitado, demonstrando habilidades excepcionais em lógica, análise e desenvolvimento de soluções.",
      instituicao: "FAI- Centro de Ensino Superior em Gestão, Tecnologia e Educação",
      ano: "2024",
      imagem: "/Maratona2024.webp",
      icone: Trophy,
    },
    {
      id: 3,
      titulo: "2º Lugar na Feira de Tecnologia e Empreendedorismo da FAI",
      projeto: "EduClass",
      descricao:"Premiado pelo desenvolvimento do Eventify, que é uma solução para facilitar a gestão acadêmica de professores e alunos. Ele permite que os professores verifiquem e atribuam notas, enquanto os alunos podem consultar suas notas e frequência de forma prática e eficiente. ",
      instituicao: "FAI- Centro de Ensino Superior em Gestão, Tecnologia e Educação",
      ano: "2023",
      imagem: "/Faitec2023.webp",
      icone: Medal,
    },
    {
      id: 4,
      titulo: "1º Lugar na 19ª edição da Maratona de programação da FAI",
      descricao:"Competição que desafia equipes a resolver problemas complexos de programação em tempo limitado, demonstrando habilidades excepcionais em lógica, análise e desenvolvimento de soluções.",
      instituicao: "FAI- Centro de Ensino Superior em Gestão, Tecnologia e Educação",
      ano: "2022",
      imagem: "/Maratona2023.webp",
      icone: Trophy,
    },
    {
      id: 5,
      titulo: "1º Lugar na Feira de Tecnologia e Empreendedorismo da FAI",
      projeto: "Astro",
      descricao:"Premiado pelo desenvolvimento do Astro, um jogo educativo que transforma o aprendizado matemático em uma aventura divertida e cativante, com planos de expansão para outras disciplinas.",
      instituicao: "FAI- Centro de Ensino Superior em Gestão, Tecnologia e Educação",
      ano: "2022",
      imagem: "/maratona2022.webp",
      icone: Trophy,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Premiações e Destaques</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Reconhecimentos e prêmios recebidos por projetos desenvolvidos ao longo da minha carreira.
        </p>
      </div>

      <div className="space-y-12">
        {premiacoes.map((premiacao, index) => {
          const IconComponent = premiacao.icone
          const isEven = index % 2 === 0

          return (
            <div
              key={premiacao.id}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-64 w-full overflow-hidden rounded-xl border">
                  <Image
                    src={premiacao.imagem || "/placeholder.svg"}
                    alt={premiacao.titulo}
                    fill
                    // className="object-cover transition-transform hover:scale-105 "
                    className={`object-cover transition-transform hover:scale-105 ${premiacao.id === 3 ? "object-top" : ""}`}

                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      <Calendar className="mr-1 h-3 w-3" /> {premiacao.ano}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-2">
                  <IconComponent className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">{premiacao.titulo}</h2>
                </div>

                <div className="space-y-2">
                  <p className="font-medium">Projeto: {premiacao.projeto}</p>
                  <p className="text-muted-foreground">{premiacao.descricao}</p>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    Concedido por: <span className="font-medium">{premiacao.instituicao}</span>
                  </p>
                </div>

               
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

