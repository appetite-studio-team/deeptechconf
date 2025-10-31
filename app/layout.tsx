import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "DeepTech Hackers Day Bengaluru",
  description: "A one day offline jam exploring AI, Web3, and Quantum. Join the Tech for Good Hackathon.",
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

