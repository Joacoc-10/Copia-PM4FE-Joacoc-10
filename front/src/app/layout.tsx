import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "../styles/reset.css";
// import "../styles/globals.css";
import { Bounce, ToastContainer } from "react-toastify";
import { AuthProvider } from "@/context/authContext";
import { CartProvider } from "@/context/cartContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FuturaTech",
  description: "Ecommerce de venta de productos de tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="apple-touch-icon" sizes="180x180" href="../public/Frame.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../public/Frame.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../public/Frame.png"/>
      </head> */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <CartProvider>
            {children}
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
