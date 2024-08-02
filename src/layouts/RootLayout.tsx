import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className='grid min-h-screen grid-rows-[_auto_1fr_auto]'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
