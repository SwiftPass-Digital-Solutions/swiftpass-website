import "./globals.css";
import Navigation from "./components/layout/Navigation";
import { Archivo } from 'next/font/google';
import Footer from "./components/layout/Footer";

const archivo = Archivo({ 
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Navigation />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
