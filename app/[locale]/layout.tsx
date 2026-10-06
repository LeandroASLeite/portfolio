import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leandro Leite - Portfólio",
  description: "Técnico em Eletrônica e Desenvolvedor em Formação",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Navbar />

              <main className="flex-1 pt-8">{children}</main>

              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}