
"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function SobrePage() {
  const prefix = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

  return (
    <div className="container mx-auto px-4 py-12 pt-16 md:pt-16">
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sobre Mim
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <motion.div
              className="relative w-full aspect-square overflow-hidden rounded-lg mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image src={`${prefix}/SobreMim.webp`} alt="Leandro Leite" fill className="object-cover object-top" />
            </motion.div>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-xl font-semibold">Leandro Leite</h2>
              <p className="text-muted-foreground">Técnico em Eletrônica</p>
              <p className="text-muted-foreground">Estudante de Sistemas de Informação</p>
            </motion.div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          {[
            {
              title: "Minha Trajetória",
              content: (
                <>
                  <p className="text-muted-foreground mb-4">
                    Sou técnico em eletrônica formado e atualmente curso Sistemas de Informação. Minha paixão pela tecnologia começou cedo, desmontando aparelhos para entender seu funcionamento. Após anos atuando na área técnica, decidi expandir meus horizontes para o desenvolvimento de software, onde hoje atuo como estagiário de back-end.
                  </p>
                  <p className="text-muted-foreground">
                    Ao longo da minha jornada, desenvolvi diversos projetos que combinam hardware e software, buscando sempre criar soluções inovadoras para problemas reais. Minha formação técnica me deu uma base sólida para entender os aspectos físicos da tecnologia, enquanto meus estudos em Sistemas de Informação me permitem criar aplicações eficientes e escaláveis.
                  </p>
                </>
              )
            },
            {
              title: "Habilidades",
              content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Técnicas</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Eletrônica Analógica e Digital</li>
                      <li>Microcontroladores</li>
                      <li>Desenvolvimento Web</li>
                      <li>Front-end: HTML, CSS, ReactJS, Angular</li>
                      <li>Back-end: NodeJS, NestJS, Python, Java</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Pessoais</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Resolução de problemas</li>
                      <li>Trabalho em equipe</li>
                      <li>Comunicação</li>
                      <li>Aprendizado contínuo</li>
                      <li>Criatividade</li>
                    </ul>
                  </div>
                </div>
              )
            },
            {
              title: "Ferramentas",
              content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Desenvolvimento</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Linguagens: Python, Java, HTML, CSS, Javascript, Typescript</li>
                      <li>Frameworks: ReactJS, Angular, NextJS, NestJS</li>
                      <li>Banco de Dados: MongoDB, Postgres</li>
                      <li>Ferramentas de Estilo: Bootstrap, TailwindCSS</li>
                      <li>Controle de Versão: Git, GitHub</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Metodologia e Gestão</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Scrum</li>
                      <li>Kanban</li>
                    </ul>
                  </div>
                </div>
              )
            },
            {
              title: "Formação",
              content: (
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-medium">Bacharelado em Sistemas de Informação <span className="text-sm text-muted-foreground">(2022–2025)</span></h3>
                    <p className="text-muted-foreground">FAI-MG — Em andamento</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-medium">Técnico em Eletrônica <span className="text-sm text-muted-foreground">(2015–2017)</span></h3>
                    <p className="text-muted-foreground">ETE FMC — Concluído juntamente com o Ensino Médio</p>
                  </div>
                </div>
              )
            },
            {
              title: "Experiência Profissional",
              content: (
                <div className="space-y-4">
                  {[
                    {
                      cargo: "Estagiário em Desenvolvimento Back-End",
                      periodo: "Ago. 2025 – Presente",
                      empresa: "Ativa Soluções"
                    },
                    {
                      cargo: "Estagiário em Desenvolvimento de Software",
                      periodo: "Fev. 2025 – Abr. 2025",
                      empresa: "Lightera"
                    },
                    {
                      cargo: "Técnico em Eletrônica",
                      periodo: "Nov. 2021 – Abr. 2025",
                      empresa: "Lightera"
                    },
                    {
                      cargo: "Técnico em Eletrônica",
                      periodo: "Mai. 2021 – Nov. 2021",
                      empresa: "MBM"
                    }
                  ].map((exp, index) => (
                    <motion.div
                      key={index}
                      className="border-l-4 border-primary pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <h3 className="font-medium">
                        {exp.cargo} <span className="text-sm text-muted-foreground">({exp.periodo})</span>
                      </h3>
                      <p className="text-muted-foreground">{exp.empresa} – Santa Rita do Sapucaí, MG</p>
                    </motion.div>
                  ))}
                </div>
              )
            }
          ].map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              {section.content}
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  )
}