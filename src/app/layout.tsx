import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jae0's Blog",
  description: "성장과정",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
