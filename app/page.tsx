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
            Sou Leandro Leite — Desenvolvedor Back-End com experiência em
            aplicações modernas.
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Sou formado em Sistemas de Informação e atuo como desenvolvedor, com
            experiência em back-end e front-end. Venho desenvolvendo soluções
            web modernas, focadas em performance, organização e boas práticas.
            Gosto de programar, aprender constantemente e transformar problemas
            reais em software bem construído.
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
              src={`${prefix}/Sobre.webp`}
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
