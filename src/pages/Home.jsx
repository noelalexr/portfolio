import { motion } from "framer-motion"
import { useState, useEffect } from "react";

const Home = () => {
    const [isMd, setIsMd] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMd(window.innerWidth >= 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <div>
            <div className="flex justify-center relative md:gap-50 gap-20 bg-white min-w-screen lg:h-127 md:h-90 h-40 overflow-hidden shadow-sm z-3">
                <div className="bg-white/7 absolute left-1/2 -translate-x-1/2 bottom-0 w-160 h-120 z-2"></div>
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                    src="/images/me/painted-face-half-bg-white.jpg" alt="" className="absolute left-1/2 -translate-x-1/2 bottom-0 lg:h-120 md:h-80 h-35 z-1"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                    className="absolute bottom-0 z-10 flex lg:gap-160 md:gap-105 gap-48 lg:pb-3 md:pb-1 text-black/40 font-courier md:text-lg text-[8px] font-bold"
                >
                    <p className="">&lt;frontend&gt;</p>
                    <p className="">&lt;backend&gt;</p>
                </motion.div>
                <motion.div
                    initial={{ x: "-120%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.7, ease: "easeOut" }}
                    className="peer/l bg-red-50/0 h-[100%] w-[50%] z-5 flex flex-col justify-center items-center md:gap-1 font-marker md:hover:scale-110 hover:scale-105 md:hover:gap-3 transition-all duration-1000 easi-in group text-[#99a1afab] xl:ml-[12%] lg:ml-[5%] md:ml-[3%] ml-1 lg:pt-10 md:pt-3"
                >
                    <p className="md:text-3xl text-[10px] md:pl-35 pl-15 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-blue-800/80">HTML</p>
                    <p className="md:text-xl text-[10px] md:pr-10 pr-0 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-green-800/50">JavaScript</p>
                    <p className="md:text-2xl text-[10px] md:pl-15 pl-8 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-red-800/70">CSS</p>
                    <p className="md:text-3xl text-[10px] md:pr-20 pr-5 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-violet-800/90">React.js</p>
                    <p className="md:text-xl text-[10px] md:pl-10 pl-3 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-cyan-800/90">Tailwind CSS</p>
                    <p className="md:text-xl text-[10px] md:pr-25 pr-10 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-orange-800/50">Bootstrap</p>
                </motion.div>
                <motion.div
                    initial={{ x: "120%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.7, ease: "easeOut" }}
                    className="peer/r bg-blue-50/0 h-[100%] w-[50%] z-5 flex flex-col justify-center items-center md:gap-1 font-courier md:hover:scale-110 hover:scale-105 md:hover:gap-3 transition-all duration-1000 easi-in group text-[#99a1aff5] xl:mr-[12%] lg:mr-[5%] md:mr-[3%] mr-1 lg:pt-10 md:pt-3"
                >
                    <p className="md:text-3xl text-[10px] md:pr-35 pr-15 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-black/80">Node.js</p>
                    <p className="md:text-2xl text-[10px] md:pl-5 pl-5 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-black/60">Express.js</p>
                    <p className="md:text-xl text-[10px] md:pr-15 pr-5 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-black/40">RESTful APIs</p>
                    <p className="md:text-3xl text-[10px] md:pl-20 pl-5 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-black/70">MongoDB</p>
                    <p className="md:text-2xl text-[10px] md:pr-10 pr-5 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-black/60">Postman</p>
                    <p className="md:text-xl text-[10px] md:pl-35 pl-10 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-black/40">JWT / Auth</p>
                </motion.div>
                <img src="/images/me/painted-face-full-bg-white.jpg" alt="" className="absolute left-1/2 -translate-x-1/2 bottom-0 lg:h-120 md:h-80 h-35 opacity-0 peer-hover/l:opacity-100 z-2 transition-all duration-1000 ease-in" />
                <img src="/images/me/no-paint-face-bg-white.jpg" alt="" className="absolute left-1/2 -translate-x-1/2 bottom-0 lg:h-120 md:h-80 h-35 opacity-0 peer-hover/r:opacity-100 z-2 transition-all duration-1000 ease-in" />
                <div className="bg-white/7 absolute left-1/2 -translate-x-1/2 bottom-0 w-160 h-120 opacity-0 peer-hover/l:opacity-100 z-2 transition-all duration-1000 ease-in"></div>
                <div className="bg-white/7 absolute left-1/2 -translate-x-1/2 bottom-0 w-160 h-120 opacity-0 peer-hover/r:opacity-100 z-2 transition-all duration-1000 ease-in"></div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.7, ease: "easeOut" }}
                className="md:text-center md:py-20 pb-20 pt-15 bg-gray-100 relative shadow-sm z- px-8"
            >
                <div className="pb-5 flex flex-col md:gap-0 gap-2 md:justify-center md:items-center">
                    <p className="md:text-2xl text-lg text-black/50">Welcome to my creative space. I'm </p>
                    <p className="md:text-[65px] text-[38px] font-bold md:tracking-wider font-paytone text-black/80"> Alexander Noel</p>
                </div>
                <p className="text-black/50 md:w-180 mx-auto md:text-lg">With a background in design engineering, I bring a problem-solving mindset into web development. I recently completed a full stack web development bootcamp and enjoy building responsive, user-focused web applications that solve real-world problems.</p>
            </motion.div>

            <div className="bg-white py-20 z-1 relative shadow-sm overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: "-120%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="md:flex flex-row justify-center items-center gap-5 pb-10 hidden"
                >
                    <div className="bg-black/15 h-[2px] max-w-70 lg:w-[20%] w-[15%] my-auto"></div>
                    <p className="text-lg text-black/45 text-center my-auto">Dive into my projects, learn more about me, or get in touch!</p>
                    <div className="bg-black/15 h-[2px] max-w-70 lg:w-[20%] w-[15%] my-auto"></div>
                </motion.div>
                <div className="flex md:flex-row flex-col justify-center md:gap-20 gap-5">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-row justify-center items-center gap-3 md:hidden"
                    >
                        <div className="bg-black/15 h-[2px] w-[15%] my-auto"></div>
                        <p className="text-lg text-black/45 text-center my-auto">Dive into my projects</p>
                        <div className="bg-black/15 h-[2px] w-[15%] my-auto"></div>
                    </motion.div>
                    <motion.a
                        initial={{ opacity: 0, y: "150%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        href="/projects"
                        className="group relative flex justify-center items-center bg-[#262626] w-40 h-30 rounded-2xl shadow-md shadow-black/50 hover:bg-[#0D0D0D] active:bg-[#0D0D0D] hover:scale-105 hover:shadow-lg transition-all duration-500 ease-out cursor-pointer md:mx-0 mx-auto"
                    >
                        <img src="/images/icons/projects.png" alt="projects" className="w-18" />
                        <p className="absolute bottom-0 group-hover:-bottom-9 text-[#262626] group-hover:text-[#0D0D0D] group-active:text-[#0D0D0D] font-bold shadow-black/50 transition-all duration-500 ease-out text-xl">Projects</p>
                    </motion.a>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-row justify-center items-center gap-3 md:hidden pt-5"
                    >
                        <div className="bg-black/15 h-[2px] w-[15%] my-auto"></div>
                        <p className="text-lg text-black/45 text-center my-auto">Learn more about me</p>
                        <div className="bg-black/15 h-[2px] w-[15%] my-auto"></div>
                    </motion.div>
                    <motion.a
                        initial={{ opacity: 0, y: "150%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }} href="/about"
                        className="group relative flex justify-center items-center bg-[#262626] w-40 h-30 rounded-2xl shadow-md shadow-black/50 hover:bg-[#0D0D0D] active:bg-[#0D0D0D] hover:scale-105 hover:shadow-lg transition-all duration-500 ease-out cursor-pointer md:mx-0 mx-auto">
                        <img src="/images/icons/about.png" alt="projects" className="w-20 m-auto" />
                        <p className="absolute bottom-0 group-hover:-bottom-9 text-[#262626] group-hover:text-[#0D0D0D] group-active:text-[#0D0D0D] font-bold shadow-black/50 transition-all duration-500 ease-out text-xl">About me</p>
                    </motion.a>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-row justify-center items-center gap-3 md:hidden pt-5"
                    >
                        <div className="bg-black/15 h-[2px] w-[15%] my-auto"></div>
                        <p className="text-lg text-black/45 text-center my-auto">Get in touch!</p>
                        <div className="bg-black/15 h-[2px] w-[15%] my-auto"></div>
                    </motion.div>
                    <motion.a
                        initial={{ opacity: 0, y: "150%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        href="/contact"
                        className="group relative flex justify-center items-center bg-[#262626] w-40 h-30 rounded-2xl shadow-md shadow-black/50 hover:bg-[#0D0D0D] active:bg-[#0D0D0D] hover:scale-105 hover:shadow-lg transition-all duration-500 ease-out cursor-pointer md:mx-0 mx-auto">
                        <img src="/images/icons/email.png" alt="projects" className="w-20 m-auto" />
                        <p className="absolute bottom-0 group-hover:-bottom-9 text-[#262626] group-hover:text-[#0D0D0D] group-active:text-[#0D0D0D] font-bold shadow-black/50 transition-all duration-500 ease-out text-xl">Contact me</p>
                    </motion.a>
                </div>
            </div>

            <div className="bg-gray-100 py-20 relative shadow-sm">
                <div className=" flex md:flex-row flex-col justify-center gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="md:text-right my-auto md:w-100 px-8"
                    >
                        <p className="text-3xl text-black/75 pb-5">Resume</p>
                        <p className="text-black/50 md:text-lg my-auto">Want to know more about my skills and experience? Feel free to view my resume or download it here!</p>
                    </motion.div>
                    <motion.a
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        a href="https://drive.google.com/file/d/1ypxM6ttVSOhLz0RX978Kk5V20_-uMJrC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-gray-700 w-40 h-30 rounded-2xl shadow-md shadow-gray-500 hover:bg-gray-800 active:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-500 ease-out cursor-pointer my-auto lg:mx-15 md:mx-10 mx-auto"
                    >
                        <img src="/images/icons/resume.png" alt="projects" className="w-20 m-auto" />
                    </motion.a>
                </div>
            </div>
        </div >
    )
}

export default Home
