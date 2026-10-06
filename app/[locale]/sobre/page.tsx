"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

function TechGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-2">
      <h3 className="font-medium">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="hover:bg-primary hover:text-primary-foreground transition"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default function SobrePage() {
  const t = useTranslations("About");

  const experiences = [
    {
      cargo: t("experience.jobs.softwareJunior"),
      periodo: `Jan. 2026 – ${t("experience.present")}`,
      empresa: "Ativa Soluções",
    },
    {
      cargo: t("experience.jobs.backendIntern"),
      periodo: "Ago. 2025 – Dez. 2025",
      empresa: "Ativa Soluções",
    },
    {
      cargo: t("experience.jobs.softwareIntern"),
      periodo: "Fev. 2025 – Abr. 2025",
      empresa: "Lightera",
    },
    {
      cargo: t("experience.jobs.electronicsLightera"),
      periodo: "Nov. 2021 – Abr. 2025",
      empresa: "Lightera",
    },
    {
      cargo: t("experience.jobs.electronicsMbm"),
      periodo: "Mai. 2021 – Nov. 2021",
      empresa: "MBM",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 pt-16 md:pt-16">
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("title")}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* COLUNA ESQUERDA */}
        <div className="md:col-span-1">
          <div className="sticky top-20 text-center md:text-left">
            <motion.div
              className="relative w-40 sm:w-48 md:w-56 aspect-square overflow-hidden rounded-lg mb-4 mx-auto md:mx-0"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/portfolio/SobreMim.webp"
                alt="Leandro Leite"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-xl font-semibold">Leandro Leite</h2>

              <p className="text-muted-foreground">
                {t("role")}
              </p>

              <p className="text-muted-foreground">
                {t("degree")}
              </p>

              <p className="text-muted-foreground">
                {t("technicalDegree")}
              </p>
            </motion.div>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div className="md:col-span-4 space-y-10">
          {/* TRAJETÓRIA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              {t("journey.title")}
            </h2>

            <p className="text-muted-foreground mb-4">
              {t("journey.paragraph1")}
            </p>

            <p className="text-muted-foreground">
              {t("journey.paragraph2")}
            </p>
          </motion.section>

          {/* FORMAÇÃO */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              {t("education.title")}
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium">
                  {t("education.bachelor")}{" "}
                  <span className="text-sm text-muted-foreground">
                    ({t("education.bachelorPeriod")})
                  </span>
                </h3>

                <p className="text-muted-foreground">
                  {t("education.bachelorInstitution")}
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium">
                  {t("education.technical")}{" "}
                  <span className="text-sm text-muted-foreground">
                    ({t("education.technicalPeriod")})
                  </span>
                </h3>

                <p className="text-muted-foreground">
                  {t("education.technicalInstitution")}
                </p>
              </div>
            </div>
          </motion.section>

          {/* EXPERIÊNCIA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              {t("experience.title")}
            </h2>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-primary pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                >
                  <h3 className="font-medium">
                    {exp.cargo}{" "}
                    <span className="text-sm text-muted-foreground">
                      ({exp.periodo})
                    </span>
                  </h3>

                  <p className="text-muted-foreground">
                    {exp.empresa} – {t("experience.location")}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* TECNOLOGIAS */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">
              {t("technologies.title")}
            </h2>

            <TechGroup
              title={t("technologies.languages")}
              items={[
                "Python",
                "Go",
                "Java",
                "JavaScript",
                "TypeScript",
                "Dart",
              ]}
            />

            <TechGroup
              title={t("technologies.frameworks")}
              items={[
                "React",
                "Angular",
                "Next.js",
                "NestJS",
                "Flutter",
              ]}
            />

            <TechGroup
              title={t("technologies.databases")}
              items={[
                "MongoDB",
                "PostgreSQL",
                "Cassandra",
              ]}
            />

            <TechGroup
              title={t("technologies.style")}
              items={[
                "TailwindCSS",
                "Bootstrap",
                "shadcn/ui",
              ]}
            />

            <TechGroup
              title={t("technologies.tools")}
              items={[
                "Git",
                "GitHub",
                "Scrum",
                "Kanban",
              ]}
            />
          </motion.section>

          {/* HABILIDADES PESSOAIS */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              {t("personalSkills.title")}
            </h2>

            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>{t("personalSkills.problemSolving")}</li>
              <li>{t("personalSkills.teamwork")}</li>
              <li>{t("personalSkills.communication")}</li>
              <li>{t("personalSkills.continuousLearning")}</li>
              <li>{t("personalSkills.creativity")}</li>
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}