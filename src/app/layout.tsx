"use client";
import Header from "@/components/organisms/header/header";
import "@/app/globals.scss";
import { usePathname } from "next/navigation";
import Footer from "@/components/blocks/footer/footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isActiveUrl = (url: string) => {
    return pathname === url;
  };

  const navItems = [
    { label: "ACCUEIL", url: "/", onClick: () => {} },
    { label: "NOTRE SAVOIR-FAIRE", url: "/savoir-faire", onClick: () => {} },
    { label: "PACKAGES", url: "/packages", onClick: () => {} },
    { label: "CONTACT", url: "/contact", onClick: () => {} },
  ].map((item) => ({
    ...item,
    isActive: isActiveUrl(item.url),
  }));

  return (
    <html lang="fr">
      <body>
        <Toaster />
        <Header logoUrl="/assets/images/logo.png" navItems={navItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
