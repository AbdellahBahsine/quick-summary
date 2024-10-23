import { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { UserProvider } from "./context/UserContext";
import { SummariesProvider } from "./context/SummariesContext";
import ToastProvider from "@/lib/react-toastify/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "QuickSummary - Summarize your favorite books",
  description: "QuickSummary is a platform where you can summarize your favorite books and share them with others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        <ToastProvider>
          <UserProvider>
            <Header />
            <main>
              <SummariesProvider>
                {children}
              </SummariesProvider>
            </main>
          </UserProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
