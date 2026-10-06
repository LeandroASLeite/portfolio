import Home from "../../components/home";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default function HomePage() {
  return <Home />;
}