import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit", // mendefinisikan variabel CSS
});

// 2. Konfigurasi font Ovo
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo", // mendefinisikan variabel CSS
});

export const metadata = {
  title: "Luthfi's Portofolio",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" className="scroll-smooth"
      
    >
      <body className={`${outfit.variable} ${ovo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
