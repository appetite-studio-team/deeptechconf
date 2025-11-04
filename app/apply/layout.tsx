export const metadata = {
  title: "Apply to Exhibit, Volunteer, or Partner | DeepTech Hackers Day",
  description: "Builders, volunteers, and community partners sign up to be part of DeepTech Hackers Day. It's the place to join the crew, showcase projects, or help make the event happen IRL.",
  keywords: "DeepTech Hackers Day, Apply, Volunteer, Community Partner, Exhibit, Bengaluru, Tech Conference, Hackathon",
  openGraph: {
    title: "Apply to Exhibit, Volunteer, or Partner | DeepTech Hackers Day",
    description: "Builders, volunteers, and community partners sign up to be part of DeepTech Hackers Day. It's the place to join the crew, showcase projects, or help make the event happen IRL.",
    url: "https://deeptechconf.com/apply",
    siteName: "DeepTech Hackers Day",
    images: [
      {
        url: "https://deeptechconf.com/banner-withbg.png",
        width: 1200,
        height: 630,
        alt: "DeepTech Hackers Day Bengaluru - Apply to Exhibit, Volunteer, or Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply to Exhibit, Volunteer, or Partner | DeepTech Hackers Day",
    description: "Builders, volunteers, and community partners sign up to be part of DeepTech Hackers Day. It's the place to join the crew, showcase projects, or help make the event happen IRL.",
    images: ["https://deeptechconf.com/banner-withbg.png"],
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

