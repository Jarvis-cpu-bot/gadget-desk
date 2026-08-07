import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Archivo ships as a variable font with a width (wdth) axis up to 125 —
// the display face uses that axis maxed out to stand in for "Archivo
// Expanded" (Google does not publish Expanded as a separate static family).
const archivoExpanded = Archivo({
  variable: "--font-archivo-expanded",
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nebulameshgate.info"),
  title: "Nebula Meshgate — Verdicts before you pay",
  description:
    "Independent hardware reviews with the specs that actually change a buying decision. One verdict a week, straight to your inbox, before checkout not after.",
  openGraph: {
    title: "Nebula Meshgate — Verdicts before you pay",
    description:
      "Independent hardware reviews with the specs that actually change a buying decision. One verdict a week, before checkout not after.",
    type: "website",
    locale: "en_US",
    siteName: "Nebula Meshgate",
    url: "https://nebulameshgate.info",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nebula Meshgate — Verdicts before you pay",
    description:
      "Independent hardware reviews with the specs that actually change a buying decision.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivoExpanded.variable} ${archivo.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--bg)] font-[family-name:var(--font-body)] text-[var(--ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
