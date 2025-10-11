import emailjs from "@emailjs/browser";

const next_emailjs_serviceId = "service_agm77xo";
const next_emailjs_template = "template_qjzbjnb";
const next_emailjs_publicKey = "o8TsJFVYU6UM2Tr8m";

export const sendEmail = async (form) => {
  try {
    const response = await emailjs.sendForm(
      next_emailjs_serviceId,
      next_emailjs_template,
      form,
      next_emailjs_publicKey
    );
    return response;
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    throw error;
  }
};
