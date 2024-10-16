import { Inter, Prompt } from "next/font/google";
import "../public/css/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const prompt = Prompt({
  subsets: ["latin"],
  variable: "--prompt",
  weight: "300",
});

export const metadata = {
  title: "TownHome Chinnakhet - Ngamwongwan",
  description: "TownHome Chinnakhet - Ngamwongwan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo/logo.jpg" />
      </head>

      <body className={(inter.className, prompt.variable)}>
        <div className="flex flex-col items-center justify-between w-full min-h-screen font-prompt">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
