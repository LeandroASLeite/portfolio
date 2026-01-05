// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function SobrePage() {
//   const prefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

//   return (
//     <div className="container mx-auto px-4 py-12 pt-16 md:pt-16">
//       <motion.h1
//         className="text-3xl font-bold mb-8"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Sobre Mim
//       </motion.h1>

//       <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
//         <div className="md:col-span-1">
//           <div className="sticky top-20">
//             <motion.div
//               className="relative w-40 sm:w-48 md:w-56 aspect-square overflow-hidden rounded-lg mb-4 mx-auto"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Image
//                 src={`${prefix}/SobreMim.webp`}
//                 alt="Leandro Leite"
//                 fill
//                 className="object-cover w-full h-full "
//               />
//             </motion.div>
//             <motion.div
//               className="space-y-2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               <h2 className="text-xl font-semibold">Leandro Leite</h2>
//               <h2 className="text-muted-foreground">
//                 Desenvolvedor Back-end & Front-end
//               </h2>
//               <p className="text-muted-foreground">
//                 Bacharel em Sistemas de Informação
//               </p>
//               <p className="text-muted-foreground">Técnico em Eletrônica</p>
//             </motion.div>
//           </div>
//         </div>

//         <div className="md:col-span-4 space-y-6">
//           {[
//             {
//               title: "Minha Trajetória",
//               content: (
//                 <>
//                   <p className="text-muted-foreground mb-4">
//                     Atuo como desenvolvedor de software, com foco em back-end e
//                     front-end, criando aplicações bem estruturadas, funcionais e
//                     voltadas para resolver problemas reais. Programar é algo que
//                     realmente me motiva, e busco constantemente evoluir tanto
//                     tecnicamente quanto na forma de pensar soluções.
//                   </p>

//                   <p className="text-muted-foreground">
//                     Minha formação como técnico em eletrônica contribuiu para
//                     uma base sólida em lógica, análise e resolução de problemas,
//                     influenciando diretamente minha forma de desenvolver
//                     software. Concluí recentemente a graduação em Sistemas de
//                     Informação, consolidando minha atuação profissional na área
//                     de desenvolvimento.
//                   </p>
//                 </>
//               ),
//             },
//             {
//               title: "Formação",
//               content: (
//                 <div className="space-y-4">
//                   <div className="border-l-4 border-primary pl-4">
//                     <h3 className="font-medium">
//                       Bacharelado em Sistemas de Informação{" "}
//                       <span className="text-sm text-muted-foreground">
//                         (2022–2025)
//                       </span>
//                     </h3>
//                     <p className="text-muted-foreground">FAI-MG — Concluído</p>
//                   </div>
//                   <div className="border-l-4 border-primary pl-4">
//                     <h3 className="font-medium">
//                       Técnico em Eletrônica{" "}
//                       <span className="text-sm text-muted-foreground">
//                         (2015–2017)
//                       </span>
//                     </h3>
//                     <p className="text-muted-foreground">
//                       ETE FMC — Concluído juntamente com o Ensino Médio
//                     </p>
//                   </div>
//                 </div>
//               ),
//             },
//             {
//               title: "Experiência Profissional",
//               content: (
//                 <div className="space-y-4">
//                   {[
//                     {
//                       cargo: "Desenvolvedor de Software Junior",
//                       periodo: "Jan. 2026 – Presente",
//                       empresa: "Ativa Soluções",
//                     },
//                     {
//                       cargo: "Estagiário em Desenvolvimento Back-End",
//                       periodo: "Ago. 2025 – Dez. 2025",
//                       empresa: "Ativa Soluções",
//                     },
//                     {
//                       cargo: "Estagiário em Desenvolvimento de Software",
//                       periodo: "Fev. 2025 – Abr. 2025",
//                       empresa: "Lightera",
//                     },
//                     {
//                       cargo: "Técnico em Eletrônica",
//                       periodo: "Nov. 2021 – Abr. 2025",
//                       empresa: "Lightera",
//                     },
//                     {
//                       cargo: "Técnico em Eletrônica",
//                       periodo: "Mai. 2021 – Nov. 2021",
//                       empresa: "MBM",
//                     },
//                   ].map((exp, index) => (
//                     <motion.div
//                       key={index}
//                       className="border-l-4 border-primary pl-4"
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.4, delay: index * 0.1 }}
//                     >
//                       <h3 className="font-medium">
//                         {exp.cargo}{" "}
//                         <span className="text-sm text-muted-foreground">
//                           ({exp.periodo})
//                         </span>
//                       </h3>
//                       <p className="text-muted-foreground">
//                         {exp.empresa} – Santa Rita do Sapucaí, MG
//                       </p>
//                     </motion.div>
//                   ))}
//                 </div>
//               ),
//             },
//             {
//               title: "Habilidades",
//               content: (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="border rounded-lg p-4">
//                     <h3 className="font-medium mb-2">Técnicas</h3>
//                     <ul className="list-disc list-inside text-muted-foreground space-y-1">
//                       <li>Eletrônica Analógica e Digital</li>
//                       <li>Microcontroladores</li>
//                       <li>Desenvolvimento Web</li>
//                       <li>
//                         Front-end: HTML, CSS, JavaScript, TypeScript, Dart
//                       </li>
//                       <li>Back-end: NodeJS, NestJS, Python, Java, Go</li>
//                     </ul>
//                   </div>
//                   <div className="border rounded-lg p-4">
//                     <h3 className="font-medium mb-2">Pessoais</h3>
//                     <ul className="list-disc list-inside text-muted-foreground space-y-1">
//                       <li>Resolução de problemas</li>
//                       <li>Trabalho em equipe</li>
//                       <li>Comunicação</li>
//                       <li>Aprendizado contínuo</li>
//                       <li>Criatividade</li>
//                     </ul>
//                   </div>
//                 </div>
//               ),
//             },
//             {
//               title: "Ferramentas",
//               content: (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="border rounded-lg p-4">
//                     <h3 className="font-medium mb-2">Desenvolvimento</h3>
//                     <ul className="list-disc list-inside text-muted-foreground space-y-1">
//                       <li>
//                         Linguagens: Python, Go, Java, HTML, CSS, Javascript,
//                         Typescript
//                       </li>
//                       <li>
//                         Frameworks: ReactJS, Angular, NextJS, NestJS, Flutter
//                       </li>
//                       <li>Banco de Dados: MongoDB, Postgres, Cassandra</li>
//                       <li>Ferramentas de Estilo: Bootstrap, TailwindCSS</li>
//                       <li>Controle de Versão: Git, GitHub</li>
//                     </ul>
//                   </div>
//                   <div className="border rounded-lg p-4">
//                     <h3 className="font-medium mb-2">Metodologia e Gestão</h3>
//                     <ul className="list-disc list-inside text-muted-foreground space-y-1">
//                       <li>Scrum</li>
//                       <li>Kanban</li>
//                     </ul>
//                   </div>
//                 </div>
//               ),
//             },
//           ].map((section, index) => (
//             <motion.section
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
//               {section.content}
//             </motion.section>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
  const prefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

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
                src={`${prefix}/SobreMim.webp`}
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
                Desenvolvedor Back-end & Front-end
              </p>
              <p className="text-muted-foreground">
                Bacharel em Sistemas de Informação
              </p>
              <p className="text-muted-foreground">Técnico em Eletrônica</p>
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
            <h2 className="text-2xl font-semibold mb-4">Minha Trajetória</h2>
            <p className="text-muted-foreground mb-4">
              Atuo como desenvolvedor de software, com foco em back-end e
              front-end, criando aplicações bem estruturadas, funcionais e
              voltadas para resolver problemas reais. Programar é algo que
              realmente me motiva, e busco constantemente evoluir tanto
              tecnicamente quanto na forma de pensar soluções.
            </p>
            <p className="text-muted-foreground">
              Minha formação como técnico em eletrônica contribuiu para uma base
              sólida em lógica, análise e resolução de problemas. Concluí
              recentemente a graduação em Sistemas de Informação, consolidando
              minha atuação profissional na área de desenvolvimento.
            </p>
          </motion.section>

          {/* FORMAÇÃO */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Formação</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium">
                  Bacharelado em Sistemas de Informação{" "}
                  <span className="text-sm text-muted-foreground">
                    (2022–2025)
                  </span>
                </h3>
                <p className="text-muted-foreground">FAI-MG — Concluído</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium">
                  Técnico em Eletrônica{" "}
                  <span className="text-sm text-muted-foreground">
                    (2015–2017)
                  </span>
                </h3>
                <p className="text-muted-foreground">
                  ETE FMC — Ensino Médio Integrado
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
              Experiência Profissional
            </h2>

            <div className="space-y-4">
              {[
                {
                  cargo: "Desenvolvedor de Software Júnior",
                  periodo: "Jan. 2026 – Presente",
                  empresa: "Ativa Soluções",
                },
                {
                  cargo: "Estagiário em Desenvolvimento Back-End",
                  periodo: "Ago. 2025 – Dez. 2025",
                  empresa: "Ativa Soluções",
                },
                {
                  cargo: "Estagiário em Desenvolvimento de Software",
                  periodo: "Fev. 2025 – Abr. 2025",
                  empresa: "Lightera",
                },
                {
                  cargo: "Técnico em Eletrônica",
                  periodo: "Nov. 2021 – Abr. 2025",
                  empresa: "Lightera",
                },
                {
                  cargo: "Técnico em Eletrônica",
                  periodo: "Mai. 2021 – Nov. 2021",
                  empresa: "MBM",
                },
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
                    {exp.cargo}{" "}
                    <span className="text-sm text-muted-foreground">
                      ({exp.periodo})
                    </span>
                  </h3>
                  <p className="text-muted-foreground">
                    {exp.empresa} – Santa Rita do Sapucaí, MG
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
            <h2 className="text-2xl font-semibold">Tecnologias</h2>

            <TechGroup
              title="Linguagens"
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
              title="Frameworks & Bibliotecas"
              items={["React", "Angular", "Next.js", "NestJS", "Flutter"]}
            />

            <TechGroup
              title="Banco de Dados"
              items={["MongoDB", "PostgreSQL", "Cassandra"]}
            />

            <TechGroup
              title="Estilo & UI"
              items={["TailwindCSS", "Bootstrap", "shadcn/ui"]}
            />

            <TechGroup
              title="Ferramentas & Metodologias"
              items={["Git", "GitHub", "Scrum", "Kanban"]}
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
              Habilidades Pessoais
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Resolução de problemas</li>
              <li>Trabalho em equipe</li>
              <li>Comunicação</li>
              <li>Aprendizado contínuo</li>
              <li>Criatividade</li>
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
