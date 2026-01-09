import type { Metadata } from \"next\";
import { Geist, Geist_Mono } from \"next/font/google\";
import \"./globals.css\";
import { ThemeProvider } from \"@/components/theme-provider\";
import { ExitIntent } from \"@/components/ExitIntent\";
import { StickyCTA } from \"@/components/StickyCTA\";

const geistSans = Geist({
  variable: \"--font-geist-sans\",\n  subsets: [\"latin\"],\n});

const geistMono = Geist_Mono({
  variable: \"--font-geist-mono\",\n  subsets: [\"latin\"],\n});

export const metadata: Metadata = {
  title: \"GACKX | Enterprise AI Automation Platform\",
  description: \"Automate smarter with GACKX. The world-class AI automation platform for modern businesses. Build, run & scale workflows with bank-grade security.\",
  keywords: [\"AI automation\", \"workflow automation\", \"business process automation\", \"no-code automation\", \"AI productivity tools\"],
  authors: [{ name: \"Garvit Sharma\" }],
  openGraph: {
    title: \"GACKX | Enterprise AI Automation Platform\",
    description: \"Automate smarter with GACKX. The world-class AI automation platform for modern businesses.\",
    url: \"https://vlovsol.com\",
    siteName: \"GACKX\",
    type: \"website\",
  },
  twitter: {
    card: \"summary_large_image\",
    title: \"GACKX | Enterprise AI Automation Platform\",
    description: \"Automate smarter with GACKX. The world-class AI automation platform for modern businesses.\",
  },
  other: {
    \"google-adsense-account\": \"ca-pub-8027467954361300\",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang=\"en\" suppressHydrationWarning>
      <head>
        <script 
          async 
          src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8027467954361300\"
          crossOrigin=\"anonymous\"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute=\"class\"
          defaultTheme=\"dark\"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ExitIntent />
          <StickyCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
