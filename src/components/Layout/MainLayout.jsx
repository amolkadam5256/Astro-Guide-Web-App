import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "../Common/SEO";
import WhatsAppFloating from "../Common/WhatsAppFloating";
import ThemeToggle from "../Common/ThemeToggle";

const MainLayout = ({ children, title, description, keywords, ogImage }) => {
  return (
    <div className="min-h-screen transition-colors duration-300 flex flex-col">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />
      <Navbar />
      <main className="pt-18 grow">{children}</main>
      <div className="fixed right-0 top-1/3 -translate-y-1/2 z-50 bg-black dark:bg-white p-1 rounded-l-full">
        <ThemeToggle />
      </div>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default MainLayout;
