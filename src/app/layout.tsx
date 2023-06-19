import { Inter } from "next/font/google";
import { ReactNode } from "react";
import '../global/styles.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Displacement App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
