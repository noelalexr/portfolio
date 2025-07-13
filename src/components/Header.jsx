import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative z-50">
            <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                exit={{ y: "-100%", opacity: 0 }}
                className="md:bg-black/90 bg-[#191919] md:h-20 h-15 flex flex-row justify-between lg:px-[20%] md:px-[10%] px-3 z-50"
            >
                <a href="/" className="md:w-11 md:h-11 w-9 h-9 my-auto relative">
                    <div className="hover:bg-black/45 active:bg-black/45 absolute top-0 left-0 w-[100%] h-[100%] rounded-full transition-all duration-300"></div>
                    <motion.img
                        src="/images/logo/my-logo.png" alt="" className="w-[100%] h-[100%] rounded-full hover:scale-115 transition-all ease-out duration-500"
                    />
                </a>
                <div className="md:flex hidden gap-15">
                    <div className="flex flex-row gap-5 text-white my-auto">
                        <a href="/about" className="hover:text-gray-400 active:text-gray-400 transition-all duration-300">About</a>
                        <a href="/projects" className="hover:text-gray-400 active:text-gray-400 transition-all duration-300">Projects</a>
                        <a href="https://drive.google.com/file/d/1ypxM6ttVSOhLz0RX978Kk5V20_-uMJrC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 active:text-gray-400 transition-all duration-300">Resume</a>
                        <a href="/contact" className="hover:text-gray-400 active:text-gray-400 transition-all duration-300">Contact</a>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-5">
                        <a href="https://www.linkedin.com/in/noelalexander/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 my-auto relative">
                            <div className="hover:bg-black/45 active:bg-black/45 absolute top-0 left-0 w-8 h-8 rounded-full transition-all duration-300"></div>
                            <img src="/images/icons/linkedin.png" alt="linkedin" className="w-8 h-8" />
                        </a>
                        <a href="https://www.facebook.com/noelalexr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 my-auto relative">
                            <div className="hover:bg-black/45 active:bg-black/45 absolute top-0 left-0 w-8 h-8 rounded-full transition-all duration-300"></div>
                            <img src="/images/icons/facebook.png" alt="linkedin" className="w-[100%] h-[100%]" />
                        </a>
                        <a href="https://www.instagram.com/biscuitt___/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 my-auto relative">
                            <div className="hover:bg-black/45 active:bg-black/45 absolute top-0 left-0 w-8 h-8 rounded-full transition-all duration-300"></div>
                            <img src="/images/icons/instagram.png" alt="linkedin" className="w-[100%] h-[100%]" />
                        </a>
                    </div>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className={`my-auto md:hidden  ${isOpen ? "text-gray-500" : "text-white"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        exit={{ x: "100%", opacity: 0 }}
                        className="absolute top-14 right-0 md:hidden bg-[#191919] z-20 w-[70%] text-white text-center flex flex-col rounded-bl-xl"
                    >
                        <a href="/about" className="py-3 hover:bg-black active:bg-black transition-all duration-300">About</a>
                        <a href="/projects" className="py-3 hover:bg-black active:bg-black transition-all duration-300">Projects</a>
                        <a href="https://drive.google.com/file/d/1ypxM6ttVSOhLz0RX978Kk5V20_-uMJrC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="py-3 hover:bg-black active:bg-black transition-all duration-300">Resume</a>
                        <a href="/contact" className="py-3 hover:bg-black active:bg-black transition-all duration-300">Contact</a>
                        <div className={`flex flex-row justify-center items-center gap-8 py-5`}>
                            <a href="https://www.linkedin.com/in/noelalexander/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 my-auto relative">
                                <div className="hover:bg-black/45 active:bg-black/45 absolute top-0 left-0 w-8 h-8 rounded-full transition-all duration-300"></div>
                                <img src="/images/icons/linkedin.png" alt="linkedin" className="w-8 h-8" />
                            </a>
                            <a href="https://www.facebook.com/noelalexr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 my-auto relative">
                                <div className="hover:bg-black/45 active:bg-black/45 absolute top-0 left-0 w-8 h-8 rounded-full transition-all duration-300"></div>
                                <img src="/images/icons/facebook.png" alt="linkedin" className="w-[100%] h-[100%]" />
                            </a>
                            <a href="https://www.instagram.com/biscuitt___/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 my-auto relative">
                                <div className="hover:bg-black/45 active:bg-black/45 absolute top-0 left-0 w-8 h-8 rounded-full transition-all duration-300"></div>
                                <img src="/images/icons/instagram.png" alt="linkedin" className="w-[100%] h-[100%]" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Header
