import "@/lib/css/globals.css";

import { MainFrame } from "@/lib/components/server";

import { AsideBar, NavBar } from "@/lib/container/server";

import { PretendardFont, getStaticMeta } from "@/lib/utils";

import { TanstackProvider } from "./_components";

export const metadata = getStaticMeta("HOME");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${PretendardFont.className}`}
    >
      <body>
        <TanstackProvider>
          <AsideBar />
          <NavBar />
          <MainFrame>{children}</MainFrame>
        </TanstackProvider>
      </body>
    </html>
  );
}
