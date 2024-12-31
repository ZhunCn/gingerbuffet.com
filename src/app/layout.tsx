import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import "../assets/styles.css";
import 'fomantic-ui-css/semantic.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ginger Buffet & Grill",
  description: "Open for Dine-In Buffet! Welcome to Ginger Buffet and Grill, a local family-owned Chinese restaurant. We are open and currently serving the Fairview Heights area with Dine-In Buffet and Carry-out.",
  keywords: "Ginger, Buffet, and, Grill, Chinese, Asian, Restaurant, Takeout, Take out, Dine in, Take-out, Carry out, Carryout, Carry-out, fairview, heights, il, illinois, mo, missouri, curbside, pick, pickup, up",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root" className="App">{children} </div>
      </body>
    </html>
  );
}
