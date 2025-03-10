import "./globals.css";
import "./fonts.css";
import { Montserrat } from "next/font/google";
import Sidebar from "./components/layout/aside/sidebar";
import Providers from "@/providers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Logo } from "./components/layout/aside/sidebar/logo";

import { getDictionary } from "../../../getDictionary";
import { RootProvider } from "@/state/rootContext";
const Mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "PsyMI",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params }) {
  const lang = await getDictionary(params.lang);
  return (
    <html lang={lang}>
      <body
        className={
          Mont.className +
          " " +
          "min-h-screen pt-[30px] pb-[50px] px-[20px] md:px-[70px] bg-[#F2F5F8] relative"
        }
      >
        <ToastContainer
          closeButton={false}
          className={"font-montserrat text-[14px] text-center h-[20px]"}
        />
        <main>
          <RootProvider>
            <Providers>
              <div className='md:mb-[12px] ml-[25px] md:fixed mobile:ml-0'>
                <Logo lang={lang} />
              </div>
              <div className='fixed z-[60] left-0 right-0 bottom-0 md:left-[70px] md:right-auto md:bottom-auto md:top-[100px]'>
                <Sidebar lang={lang} />
              </div>
              <div className='md:pl-[350px]'>{children}</div>
            </Providers>
          </RootProvider>
        </main>
      </body>
    </html>
  );
}
