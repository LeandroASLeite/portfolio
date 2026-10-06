"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("Home");
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
            {t("title")}
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("description")}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button variant="default" asChild>
              <Link href="/projetos">{t("projectsButton")}</Link>
            </Button>

            <Button variant="default" asChild>
              <Link href="/premiacoes">{t("awardsButton")}</Link>
            </Button>

            <Button variant="default" asChild>
              <Link href="/contato">{t("contactButton")}</Link>
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
              src="../Sobre.webp"
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