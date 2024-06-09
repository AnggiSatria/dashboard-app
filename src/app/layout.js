import { Oxygen } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";

const oxygen = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Dahsboard App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={oxygen.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
