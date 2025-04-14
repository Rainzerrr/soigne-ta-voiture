import Header from "@/components/organisms/header/header";
import "@/app/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header
          logoUrl="/assets/images/logo.png"
          navItems={[
            { label: "ACCUEIL", url: "/", isActive: true },
            { label: "NOTRE SAVOIR-FAIRE", url: "/", isActive: false },
            { label: "PACKAGES", url: "/", isActive: false },
            { label: "CONTACT", url: "/", isActive: false },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
