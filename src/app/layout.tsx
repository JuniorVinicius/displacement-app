import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { MenuContainer } from "@/components/utils";
import "../global/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Displacement App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <MenuContainer>{children}</MenuContainer>
      </body>
    </html>
  );
}
