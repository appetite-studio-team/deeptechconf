import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  metadataBase: new URL('https://deeptechconf.com'),
  title: "DeepTech Hackers Day Bengaluru | Nov 12 | AI, Web3, Quantum",
  description: "Join DeepTech Hackers Day in Bengaluru on Nov 12. A one day offline jam exploring AI, Web3, and Quantum. Register now for the Tech for Good Hackathon.",
  keywords: "DeepTech, Hackers Day, Bengaluru, Nov 12, AI, Web3, Quantum, Hackathon, Tech Conference, Bengaluru Tech Event",
  alternates: {
    canonical: "https://deeptechconf.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "DeepTech Hackers Day Bengaluru | Nov 12",
    description: "Join DeepTech Hackers Day in Bengaluru on Nov 12. A one day offline jam exploring AI, Web3, and Quantum.",
    url: "https://deeptechconf.com",
    siteName: "DeepTech Hackers Day",
    images: [
      {
        url: "https://deeptechconf.com/banner-withbg.png",
        width: 1200,
        height: 630,
        alt: "DeepTech Hackers Day Bengaluru - Nov 12",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepTech Hackers Day Bengaluru | Nov 12",
    description: "Join DeepTech Hackers Day in Bengaluru on Nov 12. A one day offline jam exploring AI, Web3, and Quantum.",
    images: ["https://deeptechconf.com/banner-withbg.png"],
  },
  other: {
    "theme-color": "#0a0a0a",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} max-w-3xl mx-auto px-4 sm:px-6 py-12`}>{children}</body>
    </html>
  );
}

