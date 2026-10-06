"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (newLocale: "pt" | "en") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b bg-background transition-colors duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          Leandro Leite
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-white"
          aria-label="Abrir menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {t("home")}
          </Link>

          <Link
            href="/sobre"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {t("about")}
          </Link>

          <Link
            href="/projetos"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {t("projects")}
          </Link>

          <Link
            href="/premiacoes"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {t("awards")}
          </Link>

          <Link
            href="/contato"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {t("contact")}
          </Link>
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => changeLocale("pt")}
              className={`px-1 transition-opacity ${
                locale === "pt"
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-100"
              }`}
              aria-label="Português"
            >
              PT
            </button>

            <span className="text-muted-foreground">|</span>

            <button
              onClick={() => changeLocale("en")}
              className={`px-1 transition-opacity ${
                locale === "en"
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-100"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <ModeToggle />

          <Button asChild>
            <Link href="/contato">{t("contactButton")}</Link>
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-background border-b">
          <ul className="flex flex-col space-y-4 p-4">
            {/* Language switcher */}
            <li>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    changeLocale("pt");
                    setIsOpen(false);
                  }}
                  className={`text-sm font-medium ${
                    locale === "pt"
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  PT
                </button>

                <span className="text-muted-foreground">|</span>

                <button
                  onClick={() => {
                    changeLocale("en");
                    setIsOpen(false);
                  }}
                  className={`text-sm font-medium ${
                    locale === "en"
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  EN
                </button>
              </div>
            </li>

            {/* Theme */}
            <li>
              <ModeToggle />
            </li>

            <li>
              <Link
                href="/"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("home")}
              </Link>
            </li>

            <li>
              <Link
                href="/sobre"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("about")}
              </Link>
            </li>

            <li>
              <Link
                href="/projetos"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("projects")}
              </Link>
            </li>

            <li>
              <Link
                href="/premiacoes"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("awards")}
              </Link>
            </li>

            <li>
              <Link
                href="/contato"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}