import "@/lib/css/globals.css";

import { PretendardFont, getStaticMeta } from "@/lib/utils";

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
      <body>{children}</body>
    </html>
  );
}
