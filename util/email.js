import emailjs from '@emailjs/browser';

export const sendEmail = async (form) => {
  try {
    const response = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Public Key
    );
    return response;
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    throw error;
  }
};
