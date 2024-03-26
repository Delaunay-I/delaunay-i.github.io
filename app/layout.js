
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amirhossein | Portfolio",
  description: "Portfolio of Amirhossein Mirshahi, MASc UBC, software developer. Software developer and dedicated data scientist. Dive into my projects and discover the world of code, science, and innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
