import { motion } from "framer-motion"

const Home = () => {
    return (
        <div>
            <div className="flex justify-center relative md:gap-50 gap-20 bg-white min-w-screen lg:h-127 md:h-90 h-40 overflow-hidden shadow-sm z-1">
                <div className="bg-white/5 absolute left-1/2 -translate-x-1/2 bottom-0 w-160 h-120 z-2"></div>
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                    src="/images/me/painted-face-half-bg-white.png" alt="" className="absolute left-1/2 -translate-x-1/2 bottom-0 lg:h-120 md:h-80 h-35 z-1"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                    className="absolute bottom-0 z-10 flex lg:gap-160 md:gap-105 gap-48 lg:pb-3 md:pb-1 text-black/20 font-courier md:text-lg text-xs font-bold"
                >
                    <p className="">&lt;frontend&gt;</p>
                    <p className="">&lt;backend&gt;</p>
                </motion.div>
                <motion.div
                    initial={{ x: "-120%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.7, ease: "easeOut" }}
                    className="peer/l bg-red-50/0 h-[100%] w-[50%] z-5 flex flex-col justify-center items-center md:gap-1 font-marker md:hover:scale-110 hover:scale-105 md:hover:gap-3 transition-all duration-1000 easi-in group text-black/30 xl:ml-[12%] lg:ml-[5%] md:ml-[3%] ml-1 lg:pt-10 md:pt-3"
                >
                    <p className="md:text-3xl text-xs md:pl-30 pl-10 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-blue-800/80">HTML</p>
                    <p className="md:text-2xl text-xs md:pr-10 pr-5 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-red-800/70">CSS</p>
                    <p className="md:text-xl text-xs md:pl-15 pl-3 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-green-800/50">JavaScript</p>
                    <p className="md:text-3xl text-xs md:pr-20 pr-5 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-violet-800/90">React.js</p>
                    <p className="md:text-xl text-xs md:pl-15 pl-7 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-cyan-800/90">Tailwind CSS</p>
                    <p className="md:text-xl text-xs md:pr-15 pr-6 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-orange-800/50">Bootstrap</p>
                </motion.div>
                <motion.div
                    initial={{ x: "120%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.7, ease: "easeOut" }}
                    className="peer/r bg-blue-50/0 h-[100%] w-[50%] z-5 flex flex-col justify-center items-center md:gap-1 font-courier md:hover:scale-110 hover:scale-105 md:hover:gap-3 transition-all duration-1000 easi-in group text-black/30 xl:mr-[12%] lg:mr-[5%] md:mr-[3%] mr-1 lg:pt-10 md:pt-3"
                >
                    <p className="md:text-3xl text-xs md:pr-30 pr-10 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-black/80">Node.js</p>
                    <p className="md:text-2xl text-xs md:pl-20 pl-6 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-black/60">Express.js</p>
                    <p className="md:text-xl text-xs md:pr-15 pr-4 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-black/40">RESTful APIs</p>
                    <p className="md:text-3xl text-xs md:pl-15 pl-8 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-black/70">MongoDB</p>
                    <p className="md:text-2xl text-xs md:pr-20 pr-5 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-black/60">Postman</p>
                    <p className="md:text-xl text-xs md:pl-10 pl-3 md:hover:scale-115 hover:scale-110 transition-all duration-1000 group-hover:text-black/40">JWT / Auth</p>
                </motion.div>
                <img src="/images/me/painted-face-full-bg-white.png" alt="" className="absolute left-1/2 -translate-x-1/2 bottom-0 lg:h-120 md:h-80 h-35 opacity-0 peer-hover/l:opacity-100 z-2 transition-all duration-1000 ease-in" />
                <img src="/images/me/no-paint-face-bg-white.png" alt="" className="absolute left-1/2 -translate-x-1/2 bottom-0 lg:h-120 md:h-80 h-35 opacity-0 peer-hover/r:opacity-100 z-2 transition-all duration-1000 ease-in" />
                <div className="bg-white/5 absolute left-1/2 -translate-x-1/2 bottom-0 w-160 h-120 opacity-0 peer-hover/l:opacity-100 z-2 transition-all duration-1000 ease-in"></div>
                <div className="bg-white/5 absolute left-1/2 -translate-x-1/2 bottom-0 w-160 h-120 opacity-0 peer-hover/r:opacity-100 z-2 transition-all duration-1000 ease-in"></div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.7, ease: "easeOut" }}
                className="text-center md:py-20 py-[25%] bg-gray-100 relative shadow-sm"
            >
                <div className="pb-5 flex gap-3 justify-center items-center text-black/80">
                    <p className="md:text-4xl text-xl md:pt-7 pt-[13px]">I'm </p>
                    <p className="md:text-[65px] text-4xl font-bold tracking-wider font-paytone"> Alexander,</p>
                </div>
                <p className="text-black/50 md:w-150 w-60 mx-auto md:text-[17px] text-sm">With a background in design engineering, I bring a problem-solving mindset into web development. I recently completed a full stack web development bootcamp and enjoy building responsive, user-focused web applications that solve real-world problems.</p>
            </motion.div>
        </div >
    )
}

export default Home
