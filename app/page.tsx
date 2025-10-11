"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  const prefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 pt-16 md:pt-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sou Leandro Leite — Desenvolvedor Back-End em Formação e Apaixonado
            por Tecnologia.
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Sou estudante de Sistemas de Informação e atualmente atuo como
            estagiário de back-end. Apaixonado por tecnologia, venho
            desenvolvendo projetos que já foram reconhecidos em premiações.
            Estou sempre em busca de novos aprendizados e de criar soluções que
            realmente façam a diferença.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button variant="default" asChild>
              <Link href="/projetos">Meus Projetos</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/premiacoes">Projetos Premiados</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/contato">Entre em Contato</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary">
            <Image
              src={`${prefix}/Minha-foto.webp`}
              alt="Leandro Leite"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
