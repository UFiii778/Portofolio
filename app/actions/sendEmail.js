"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  // Ambil data dari form
  const firstName = formData.get("First Name");
  const lastName = formData.get("Last Name");
  const email = formData.get("Email");
  const message = formData.get("Message");

  // Setup transporter Nodemailer (contoh menggunakan Gmail)
  // Tips: Gunakan "App Password" dari Google Security, jangan password email utama!
 const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,          // Mengambil dari .env.local
      pass: process.env.GMAIL_APP_PASSWORD,  // Mengambil dari .env.local
    },
  });

  // Konfigurasi isi email yang akan masuk ke inbox-mu
  const mailOptions = {
    from: email,
    to: "EMAIL_KAMU@gmail.com", // Dikirim ke emailmu sendiri
    subject: `New Portfolio Message from ${firstName} ${lastName}`,
    text: `
      You have a new message from your portfolio website.
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Message: ${message}
    `,
    html: `
      <h3>New Portfolio Message</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Pesan berhasil dikirim via Nodemailer!" };
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return { success: false, message: "Gagal mengirim email. Silakan coba lagi." };
  }
}