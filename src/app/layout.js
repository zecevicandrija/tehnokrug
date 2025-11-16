import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "tehnoKrug - Kupovina i prodaja polovnih telefona | Najbolje cene u Srbiji",
  description: "tehnoKrug je vaš pouzdan partner za kupovinu i prodaju polovnih telefona. Garantujemo kvalitet, 12 meseci garancije, besplatna dostava, povrat novca u 14 dana. Otkup telefona sa isplatom odmah.",
  keywords: "polovni telefoni, otkup telefona, prodaja telefona, mobilni telefoni beograd, telefoni na rate, garancija na telefone, besplatna dostava telefona",
  openGraph: {
    title: "tehnoKrug - Kupovina i prodaja polovnih telefona",
    description: "Najbolje cene, garancija 12 meseci, besplatna dostava. Prodaj svoj telefon uz trenutnu isplatu!",
    type: "website",
    locale: "sr_RS",
  },
  twitter: {
    card: "summary_large_image",
    title: "tehnoKrug - Kupovina i prodaja polovnih telefona",
    description: "Najbolje cene, garancija 12 meseci, besplatna dostava. Prodaj svoj telefon uz trenutnu isplatu!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
