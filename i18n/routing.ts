import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en"],
  defaultLocale: "pt",

  pathnames: {
    "/": "/",
    "/sobre": {
      pt: "/sobre",
      en: "/about",
    },
    "/projetos": {
      pt: "/projetos",
      en: "/projects",
    },
    "/premiacoes": {
      pt: "/premiacoes",
      en: "/awards",
    },
    "/contato": {
      pt: "/contato",
      en: "/contact",
    },
  },
});