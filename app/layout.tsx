import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from 'next-themes';
import Sidebar from '@/components/Sidebar';


export const metadata: Metadata = {
  title: "Clone YT Music",
  description: "Clone Youtube Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>
            {children}
          </Sidebar>
        </ThemeProvider>
      </body>
    </html>
  );
}
