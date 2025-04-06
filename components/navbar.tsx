"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
<header className="fixed top-0 left-0 w-full z-50 border-b bg-white dark:bg-background transition-colors duration-300">

      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        <Link href="/" className="font-bold text-xl">
          Leandro Leite
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-white"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>


        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Início
          </Link>
          <Link href="/sobre" className="text-sm font-medium hover:underline underline-offset-4">
            Sobre
          </Link>
          <Link href="/projetos" className="text-sm font-medium hover:underline underline-offset-4">
            Projetos
          </Link>
          <Link href="/premiacoes" className="text-sm font-medium hover:underline underline-offset-4">
            Premiações
          </Link>
          <Link href="/contato" className="text-sm font-medium hover:underline underline-offset-4">
            Contato
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button asChild>
            <Link href="/contato">Entre em Contato</Link>
          </Button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-b">
          <ul className="flex flex-col space-y-4 p-4">
          <ModeToggle />
            <li>
              <Link href="/" className="block py-2" onClick={() => setIsOpen(false)}>Início</Link>
            </li>
            <li>
              <Link href="/sobre" className="block py-2" onClick={() => setIsOpen(false)}>Sobre</Link>
            </li>
            <li>
              <Link href="/projetos" className="block py-2" onClick={() => setIsOpen(false)}>Projetos</Link>
            </li>
            <li>
              <Link href="/premiacoes" className="block py-2" onClick={() => setIsOpen(false)}>Premiações</Link>
            </li>
            <li>
              <Link href="/contato" className="block py-2" onClick={() => setIsOpen(false)}>Contato</Link>
            </li>
            <li className="pt-2">
              
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
