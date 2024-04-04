import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jae0's Blog",
  description: "나만희 개발 도화지, 프론트엔드 개발자 블로그",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
