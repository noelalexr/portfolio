import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* <div className="w-[100%] h-[1px] bg-gray-300"></div>
            <div className="w-[100%] h-[1px] bg-gray-300/60"></div> */}
            <div className="bg-gray-300 text-sm text-gray-500 flex justify-around px-[10%] pt-10 pb-9">
                <a href="/">© 2025 Alexander Noel</a>
                <div className="md:flex flex-row gap-5 hidden">
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <p>Resume</p>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </motion.div>
    )
}

export default Footer
