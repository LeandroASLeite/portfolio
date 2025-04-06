import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  const prefix = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

  return (
    
    <div className="container mx-auto px-4 py-12 md:py-24 pt-16 md:pt-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Sou Leandro Leite - Técnico em Eletrônica e Desenvolvedor em Formação.
          </h1>
          <p className="text-lg text-muted-foreground">Sou técnico em eletrônica, estudante de Sistemas de Informação e apaixonado por tecnologia. Tenho desenvolvido alguns projetos, incluindo alguns reconhecidos em premiações, e estou sempre em busca de aprender mais e criar soluções tecnológicas que façam a diferença.</p>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" asChild>
              <Link href="/projetos">Meus Projetos</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/premiacoes">Projetos Premiados</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary">
            <Image
              src={`${prefix}/Minha-foto.webp`}
              alt="Leandro Leite"
              fill
              className="object-cover "
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

