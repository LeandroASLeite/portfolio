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
import { useTranslations } from "next-intl";

export default function ProjetosPage() {
  const t = useTranslations("Projects");

  const prefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  const projetos = [
    {
      id: 1,
      titulo: t("items.workoutPlan.title"),
      descricao: t("items.workoutPlan.description"),
      imagem: "/workout-plan.webp",
      tecnologias: [
        "Next.js 16",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Firebase",
        "Vercel",
      ],
    },

    {
      id: 2,
      titulo: t("items.sage.title"),
      descricao: t("items.sage.description"),
      imagem: "/SAGE.webp",
      tecnologias: ["AngularJS", "Java Spring Boot", "PostgreSQL", "Docker"],
    },

    {
      id: 3,
      titulo: t("items.bookAuctions.title"),
      descricao: t("items.bookAuctions.description"),
      imagem: "/BookAuctions.webp",
      tecnologias: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    },

    {
      id: 4,
      titulo: t("items.eventify.title"),
      descricao: t("items.eventify.description"),
      imagem: "/Eventify.webp",
      tecnologias: ["Angular", "Java Spring Boot", "GCP"],
    },

    {
      id: 5,
      titulo: t("items.astro.title"),
      descricao: t("items.astro.description"),
      imagem: "/Astro.webp",
      tecnologias: ["Python", "PyGame", "Pandas"],
    },

    {
      id: 6,
      titulo: t("items.schedulr.title"),
      descricao: t("items.schedulr.description"),
      imagem: "/Schedulr.webp",
      tecnologias: ["React", "Node.js", "Express", "MongoDB"],
    },

    {
      id: 7,
      titulo: t("items.queroLer.title"),
      descricao: t("items.queroLer.description"),
      imagem: "/QueroLer.webp",
      tecnologias: ["Flutter", "Dart", "OpenLibrary API"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 pt-16 md:pt-16">
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("description")}
        </p>
      </motion.div>

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
              <div className="relative h-48 w-full">
                <Image
                  src={`${prefix}${projeto.imagem}`}
                  alt={projeto.titulo}
                  fill
                  className="object-cover"
                />
              </div>

              <CardHeader className="flex-1">
                <CardTitle>{projeto.titulo}</CardTitle>

                <CardDescription className="mt-2">
                  {projeto.descricao}
                </CardDescription>
              </CardHeader>

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

              <CardFooter className="mt-auto" />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}