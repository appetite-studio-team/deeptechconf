export const metadata = {
  title: "Tech for Good Hackathon | DeepTech Hackers Day | Oct 31 - Nov 10",
  description: "Join the online global Tech for Good Hackathon from Oct 31 to Nov 10. ₹1,00,000 prize for winner. Winners showcased at DeepTech Hackers Day Bengaluru on Nov 12.",
  keywords: "Tech for Good Hackathon, Hackathon, DeepTech, Bengaluru, Nov 12, Online Hackathon, DoraHacks",
  openGraph: {
    title: "Tech for Good Hackathon | DeepTech Hackers Day",
    description: "Join the online global Tech for Good Hackathon from Oct 31 to Nov 10. ₹1,00,000 prize for winner.",
    url: "https://deeptechconf.com/hack",
    siteName: "DeepTech Hackers Day",
    images: [
      {
        url: "https://deeptechconf.com/banner-hackathon.png",
        width: 1200,
        height: 630,
        alt: "DeepTech Hackers Day Bengaluru - Tech for Good Hackathon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech for Good Hackathon | DeepTech Hackers Day",
    description: "Join the online global Tech for Good Hackathon from Oct 31 to Nov 10. ₹1,00,000 prize for winner.",
    images: ["https://deeptechconf.com/banner-hackathon.png"],
  },
};

export default function HackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

