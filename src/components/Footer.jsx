import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="bg-gray-300 text-sm text-gray-500 flex justify-around px-[10%] pt-10 pb-9">
                <a href="/" className="hover:text-gray-700 active:text-gray-700 transition-all duration-300">© 2025 Alexander Noel</a>
                <div className="md:flex flex-row gap-5 hidden">
                    <a href="/about" className="hover:text-gray-700 active:text-gray-700 transition-all duration-300">About</a>
                    <a href="/projects" className="hover:text-gray-700 active:text-gray-700 transition-all duration-300">Projects</a>
                    <a href="https://drive.google.com/file/d/1ypxM6ttVSOhLz0RX978Kk5V20_-uMJrC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 active:text-gray-700 transition-all duration-300">Resume</a>
                    <a href="/contact" className="hover:text-gray-700 active:text-gray-700 transition-all duration-300">Contact</a>
                </div>
            </div>
        </motion.div>
    )
}

export default Footer
