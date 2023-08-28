"use client";
import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="flex flex-col h-screen">
            <div className="h-16">
              <Header toggleSidebar={toggleSidebar} />
            </div>
            <div>
              <Sidebar
                isOpen={isOpen}
                toggleSidebar={toggleSidebar}
                setIsOpen={setIsOpen}
              />
            </div>
            <section className="min-h-[90vh]">{children}</section>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
