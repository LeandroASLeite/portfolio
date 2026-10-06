"use client";

import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    const languages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];

    const prefersEnglish = languages.some((language) =>
      language.toLowerCase().startsWith("en")
    );

    const locale = prefersEnglish ? "en" : "pt";

    const basePath =
      process.env.NODE_ENV === "production" ? "/portfolio" : "";

    window.location.replace(`${basePath}/${locale}/`);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <p>Redirecionando...</p>
    </main>
  );
}