"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjetosPage() {
  const prefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  const projetos = [
    {
      id: 1,
      titulo: "SAGE – Sistema de Alerta e Gerenciamento de Emergências",
      descricao:
        "O Sistema de Alerta e Gerenciamento de Emergências (SAGE) é uma plataforma composta por software e hardware, desenvolvida para otimizar a assistência e a segurança em instituições de longa permanência, permitindo o acionamento de alarmes e o gerenciamento de emergências em tempo real.",
      imagem: "/SAGE.webp",
      tecnologias: ["AngularJS", "Java Spring Boot", "PostgreSQL", "Docker"],
    },
    {
      id: 2,
      titulo: "Book Auctions",
      descricao:
        "Plataforma web para leilão de livros que conecta leitores e colecionadores, permitindo a criação de leilões, acompanhamento de lances em tempo real e gerenciamento seguro das transações.",
      imagem: "/BookAuctions.webp",
      tecnologias: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    },
    {
      id: 3,
      titulo: "Eventify",
      descricao:
        "Plataforma colaborativa para gestão de eventos e divisão de despesas em grupo, focada em transparência, organização e colaboração entre os participantes.",
      imagem: "/Eventify.webp",
      tecnologias: ["Angular", "Java Spring Boot", "GCP"],
    },
    {
      id: 4,
      titulo: "ASTRO",
      descricao:
        "Jogo educacional focado no aprendizado de matemática, onde usuários praticam, competem entre si e acompanham sua evolução por meio de um sistema de ranking.",
      imagem: "/Astro.webp",
      tecnologias: ["Python", "PyGame", "Pandas"],
    },
    {
      id: 5,
      titulo: "Schedulr",
      descricao:
        "Aplicação web inspirada no Google Agenda, desenvolvida durante um processo seletivo, com criação e gerenciamento de reuniões em um calendário interativo.",
      imagem: "/Schedulr.webp",
      tecnologias: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 6,
      titulo: "QueroLer",
      descricao:
        "Aplicativo mobile desenvolvido em Flutter para gerenciamento de livros desejados, com autenticação e integração com APIs externas para busca e organização.",
      imagem: "/QueroLer.webp",
      tecnologias: ["Flutter", "Dart", "OpenLibrary API"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 pt-16 md:pt-16">
      {/* Header */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">Meus Projetos</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Alguns dos projetos que desenvolvi ao longo da minha trajetória como
          desenvolvedor, aplicando boas práticas, arquitetura e tecnologias
          modernas.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projetos.map((projeto, index) => (
          <motion.div
            key={projeto.id}
            className="h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card className="h-full flex flex-col overflow-hidden">
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={`${prefix}${projeto.imagem}`}
                  alt={projeto.titulo}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Header */}
              <CardHeader className="flex-1">
                <CardTitle>{projeto.titulo}</CardTitle>
                <CardDescription className="mt-2">
                  {projeto.descricao}
                </CardDescription>
              </CardHeader>

              {/* Techs */}
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {projeto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              {/* Footer */}
              <CardFooter className="mt-auto" />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
