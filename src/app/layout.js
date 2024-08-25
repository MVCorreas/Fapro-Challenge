import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "./components/Providers";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "500", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "500", "600", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SessionProvider>
          <Toaster />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
