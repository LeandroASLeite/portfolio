import Image from "next/image"

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Sobre Mim</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
              <Image src="/Minha-foto.webp" alt="Leandro Leite" fill className="object-cover" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Leandro Leite</h2>
              <p className="text-muted-foreground">Técnico em Eletrônica</p>
              <p className="text-muted-foreground">Estudante de Sistemas de Informação</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Minha Trajetória</h2>
            <p className="text-muted-foreground mb-4">
              Sou técnico em eletrônica formado e atualmente estou cursando Sistemas de Informação. Minha paixão pela
              tecnologia começou desde cedo, quando desmontava aparelhos eletrônicos para entender seu funcionamento.
            </p>
            <p className="text-muted-foreground">
              Ao longo da minha jornada, desenvolvi diversos projetos que combinam hardware e software, buscando sempre
              criar soluções inovadoras para problemas reais. Minha formação técnica me deu uma base sólida para
              entender os aspectos físicos da tecnologia, enquanto meus estudos em Sistemas de Informação me permitem
              criar aplicações eficientes e escaláveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Técnicas</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Eletrônica Analógica e Digital</li>
                  <li>Microcontroladores</li>
                  <li>Desenvolvimento Web</li>
                  <li>Desenvolvimento Front-end</li>
                  <li>Desenvolvimento Back-end</li>
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
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Ferramentas</h2>
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
                <h3 className="font-medium mb-2">Metodolofia e Ferramentas de Gestão</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Scrum</li>
                  <li>Kanban</li>
                  
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Formação</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium">Bacharelado em Sistemas de Informação</h3>
                <p className="text-muted-foreground">Universidade - Em andamento</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium">Técnico em Eletrônica</h3>
                <p className="text-muted-foreground">Escola Técnica - Concluído</p>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
}

