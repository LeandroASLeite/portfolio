"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Leandro Leite. {t("rights")}
          </p>
        </div>

        <div className="flex gap-6">
          <Link
            href="https://www.linkedin.com/in/leandro-leite-760931186/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/LeandroASLeite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub
          </Link>

          <Link
            href="mailto:leandroleite.ll25@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}