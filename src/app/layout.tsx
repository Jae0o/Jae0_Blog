import "@/lib/css/globals.css";

import { Inter } from "next/font/google";

import { AsideBar, MainFrame, NavBar } from "@/lib/container/server";

import { PretendardFont, getStaticMeta } from "@/lib/utils";

import { TanstackProvider } from "./_components";

export const metadata = getStaticMeta("HOME");

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="ko"
      className={`${PretendardFont.className}`}
    >
      <body className={inter.className}>
        <TanstackProvider>
          <AsideBar />
          <NavBar />
          <MainFrame>{children}</MainFrame>
        </TanstackProvider>
      </body>
    </html>
  );
};

export default RootLayout;
