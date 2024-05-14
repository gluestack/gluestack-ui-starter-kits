"use client";

import { Inter } from "next/font/google";
import "../styles/global.css";
import StyledJsxRegistry from "./registry";
import { GluestackUIProvider } from "@base-template/ui/gluestack-ui-provider";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: "flex" }}>
        <StyledJsxRegistry>
          <GluestackUIProvider mode="dark">{children}</GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
