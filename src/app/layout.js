import "./globals.css";
import {quicksand, montserrat} from "@/app/ui/fonts";


import MainHeader from "@/components/main-header";

export const metadata = {
  title: "Create Next Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
      <MainHeader/>
      {children}
      </body>
    </html>
  );
}
