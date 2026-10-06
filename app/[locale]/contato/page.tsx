"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Linkedin,
  Github,
  Mail,
  MapPin,
} from "lucide-react";
import { useTranslations } from "next-intl";

const next_emailjs_serviceId = "service_agm77xo";
const next_emailjs_template = "template_qjzbjnb";
const next_emailjs_publicKey = "o8TsJFVYU6UM2Tr8m";

export default function ContatoPage() {
  const t = useTranslations("Contact");

  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const redes = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/leandro-leite-760931186",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      label: "GitHub",
      href: "https://github.com/LeandroASLeite",
      icon: <Github className="h-5 w-5" />,
    },
    {
      label: "Email",
      href: "mailto:leandroleite.ll25@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      const response = await emailjs.sendForm(
        next_emailjs_serviceId,
        next_emailjs_template,
        form.current,
        next_emailjs_publicKey
      );

      console.log("E-mail enviado:", response);

      setStatus(t("form.success"));
      form.current.reset();
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setStatus(t("form.error"));
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 pt-16 md:pt-16">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("description")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{t("form.title")}</CardTitle>

              <CardDescription>
                {t("form.description")}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="to_email"
                  value="leandroleite.ll25@gmail.com"
                />

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="from_name">
                      {t("form.name")}
                    </Label>

                    <Input
                      id="from_name"
                      name="from_name"
                      placeholder={t("form.namePlaceholder")}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="from_email">
                      {t("form.email")}
                    </Label>

                    <Input
                      id="from_email"
                      name="from_email"
                      type="email"
                      placeholder={t("form.emailPlaceholder")}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Label htmlFor="subject">
                    {t("form.subject")}
                  </Label>

                  <Input
                    id="subject"
                    name="subject"
                    placeholder={t("form.subjectPlaceholder")}
                    required
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Label htmlFor="message">
                    {t("form.message")}
                  </Label>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("form.messagePlaceholder")}
                    rows={5}
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button type="submit" className="w-full">
                    {t("form.submit")}
                  </Button>

                  {status && (
                    <p className="text-center mt-2 text-sm">
                      {status}
                    </p>
                  )}
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{t("info.title")}</CardTitle>

              <CardDescription>
                {t("info.description")}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <motion.div
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />

                <div>
                  <h3 className="font-medium">
                    {t("info.email")}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    leandroleite.ll25@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />

                <div>
                  <h3 className="font-medium">
                    {t("info.location")}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Santa Rita do Sapucaí, MG - Brasil
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="font-medium mb-3">
                  {t("info.social")}
                </h3>

                <div className="flex space-x-4">
                  {redes.map((rede) => (
                    <motion.a
                      key={rede.label}
                      href={rede.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10"
                      >
                        {rede.icon}
                      </Button>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}