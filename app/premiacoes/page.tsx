"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Medal } from "lucide-react";

export default function PremiacoesPage() {
  const prefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  const premiacoes = [
    {
      id: 1,
      titulo: "1º Lugar na Feira de Tecnologia e Empreendedorismo da FAI",
      projeto: "SAGE- Sistema de Alerta e Gerenciamento de Emergências ",
      descricao:
        "Premiado pelo desenvolvimento do SAGE, que é uma solução inovadora que auxilia o gerenciamento de emergências em ambientes de longa permanência...",
      instituicao:
        "FAI - Centro de Ensino Superior em Gestão, Tecnologia e Educação",
      ano: "2025",
      imagem: "/Faitec2025.webp",
      icone: Trophy,
    },

    {
      id: 2,
      titulo: "1º Lugar na Feira de Tecnologia e Empreendedorismo da FAI",
      projeto: "Eventify",
      descricao:
        "Premiado pelo desenvolvimento do Eventify, que é uma solução inovadora que simplifica o planejamento e a gestão de eventos...",
      instituicao:
        "FAI - Centro de Ensino Superior em Gestão, Tecnologia e Educação",
      ano: "2024",
      imagem: "/Faitec2024.webp",
      icone: Trophy,
    },
    {
      id: 3,
      titulo: "1º Lugar na 20ª edição da Maratona de programação da FAI",
      descricao:
        "Competição que desafia equipes a resolver problemas complexos de programação em tempo limitado...",
      instituicao:
        "FAI - Centro de Ensino Superior em Gestão, Tecnologia e Educação",
      ano: "2024",
      imagem: "/Maratona2024.webp",
      icone: Trophy,
    },
    {
      id: 4,
      titulo: "2º Lugar na Feira de Tecnologia e Empreendedorismo da FAI",
      projeto: "EduClass",
      descricao:
        "Premiado pelo desenvolvimento do EduClass, uma solução para facilitar a gestão acadêmica...",
      instituicao:
        "FAI - Centro de Ensino Superior em Gestão, Tecnologia e Educação",
      ano: "2023",
      imagem: "/Faitec2023.webp",
      icone: Medal,
    },
    {
      id: 5,
      titulo: "1º Lugar na 19ª edição da Maratona de programação da FAI",
      descricao:
        "Competição que desafia equipes a resolver problemas complexos de programação em tempo limitado...",
      instituicao:
        "FAI - Centro de Ensino Superior em Gestão, Tecnologia e Educação",
      ano: "2022",
      imagem: "/Maratona2023.webp",
      icone: Trophy,
    },
    {
      id: 6,
      titulo: "1º Lugar na Feira de Tecnologia e Empreendedorismo da FAI",
      projeto: "Astro",
      descricao:
        "Premiado pelo desenvolvimento do Astro, um jogo educativo que transforma o aprendizado matemático em uma aventura divertida...",
      instituicao:
        "FAI - Centro de Ensino Superior em Gestão, Tecnologia e Educação",
      ano: "2022",
      imagem: "/maratona2022.webp",
      icone: Trophy,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 pt-16 md:pt-16">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">Premiações e Destaques</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Reconhecimentos e prêmios recebidos por projetos desenvolvidos ao
          longo da minha jornada acadêmica.
        </p>
      </motion.div>

      <div className="space-y-12">
        {premiacoes.map((premiacao, index) => {
          const IconComponent = premiacao.icone;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={premiacao.id}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="w-full md:w-1/2"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-64 w-full overflow-hidden rounded-xl border shadow-md">
                  <Image
                    src={`${prefix}${premiacao.imagem}`}
                    alt={premiacao.titulo}
                    fill
                    className={`object-cover transition-transform hover:scale-105 ${
                      premiacao.id === 3 ? "object-top" : ""
                    }`}
                  />
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <Badge className="bg-primary text-white text-sm px-3 py-1 shadow-lg">
                      <Calendar className="mr-1 h-4 w-4" /> {premiacao.ano}
                    </Badge>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="w-full md:w-1/2 space-y-4"
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <IconComponent className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">{premiacao.titulo}</h2>
                </div>

                <div className="space-y-2">
                  {premiacao.projeto && (
                    <p className="font-medium">Projeto: {premiacao.projeto}</p>
                  )}
                  <p className="text-muted-foreground">{premiacao.descricao}</p>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    Concedido por:{" "}
                    <span className="font-medium">{premiacao.instituicao}</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
