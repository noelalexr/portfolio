import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { motion, AnimatePresence } from "framer-motion"

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main>
                <Outlet />
            </main>
            <AnimatePresence>
                {showScrollTop && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-15 right-0 z-100 transition-all duration-500 transform translate-y-0 opacity-100"
                    >
                        <button
                            onClick={scrollToTop}
                            className="bg-black/75 text-white py-4 px-3 rounded-l-full shadow-md cursor-pointer hover:pr-6 transition-all duration-500"
                            title="Back to top"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
            <Footer />
        </div>
    )
}

export default Layout
