import emailjs from '@emailjs/browser';

// Thông tin này nên để trong file .env để bảo mật
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendContactEmail = async (data: any) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        email: data.email,
        content: data.content,
      },
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};