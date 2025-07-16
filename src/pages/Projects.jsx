import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div>
            <div className="flex md:flex-row flex-col justify-center lg:gap-30 md:gap-20 gap-10 py-20 shadow-sm relative z-5 overflow-hidden">
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 1.2, ease: "easeOut" }}
                    className="md:text-right md:max-w-100 max-w-120 md:my-auto md:mx-0 mx-auto md:px-0 px-8"
                >
                    <p className="font-paytone text-5xl pb-5 text-black/80">Projects</p>
                    <p className="text-black/60 md:text-lg">Here are the apps I've built, thoughtfully designed to be easy to use, visually polished, and focused on delivering a smooth user experience.</p>
                </motion.div>
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 1, ease: "easeOut" }}
                    className=" flex flex-col gap-3 justify-center items-center md:pr-20"
                >
                    <div className="flex flex-row gap-[-2] mx-auto">
                        <img src="/images/projects/motohunt-mobile.png" alt="" className="w-17 h-35 rounded-[10px] z-3" />
                        <img src="/images/projects/pawpals-mobile.png" alt="" className="w-17 h-35 rounded-[10px] -ml-5 mt-3 z-4" />
                        <img src="/images/projects/guess-the-emoji-mobile.png" alt="" className="17-15 h-35 rounded-[10px] -ml-5 -mt-2 z-2" />
                        <img src="/images/projects/healthtrackr-mobile.png" alt="" className="w-17 h-35 rounded-[10px] -ml-5 mt-5 z-1" />
                    </div>
                    <p className="text-center text-black/50 text-sm w-50">All fully responsive, works seamlessly on desktop and mobile devices.</p>
                </motion.div>
            </div>

            <div className="py-25 bg-gray-100 relative shadow-sm z-4">
                {/* MOTOHUNT */}
                <div className="flex md:flex-row flex-col justify-center md:gap-10 gap-5 lg:pr-50 md:pr-20 pr-0">
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col bg-white lg:p-3 p-2 rounded-xl shadow-xl my-auto hover:scale-105 transition-all duration-700 ease-out md:mx-0 mx-auto"
                    >
                        <img src="images/projects/motohunt.png" alt="motohunt" className="lg:w-90 w-70 rounded-t-md" />
                        <div className="flex flex-row justify-around lg:mt-2 mt-1 lg:gap-2 gap-1">
                            <a href="https://motohunt-beta.onrender.com/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-black/80 hover:bg-black/90 active:bg-black/90 text-white w-[50%] text-center rounded-bl-md py-2 transition-all duration-300 ease-in-out">
                                <img src="/images/icons/open.png" alt="" className="w-5 h-5" />
                                <p>Demo</p>
                            </a>
                            <a href="https://github.com/noelalexr/motohunt.git" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-black/80 hover:bg-black/90 active:bg-black/90 text-white w-[50%] text-center rounded-br-md py-2 transition-all duration-300 ease-in-out">
                                <img src="/images/icons/github.png" alt="" className="w-5 h-5" />
                                <p>Github</p>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="my-auto lg:w-90 md:w-80 md:mx-0 mx-auto text-left w-[80vw]"
                    >
                        <p className="text-3xl text-black/80 pb-3">MotoHunt</p>
                        <p className="text-black/60 text-sm">MotoHunt is a community-driven app built for motorcycle enthusiasts. Users can post their own bikes, browse detailed specs of other bikes, and save favorites to a personal wishlist. With a responsive UI and intuitive flow, MotoHunt makes exploring and sharing rides easy and fun.</p>
                        <div className="flex flex-wrap justify-start gap-2 mt-5">
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">React</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">Express.js</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">Node.js</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">MongoDB</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">Tailwind CSS</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">Cloudinary</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">JavaScript</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="py-25 bg-white relative shadow-sm z-3">
                {/* GUESS-THE-EMOJI */}
                <div className="flex md:flex-row flex-col justify-center md:gap-10 gap-5 lg:pl-50 md:pl-20 pl-0">
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col bg-white lg:p-3 p-2 rounded-xl shadow-xl my-auto hover:scale-105 transition-all duration-700 ease-out md:mx-0 mx-auto"
                    >
                        <img src="images/projects/guess-the-emoji.png" alt="guess-the-emoji" className="lg:w-90 w-70 rounded-t-md" />
                        <div className="flex flex-row justify-around lg:mt-2 mt-1 lg:gap-2 gap-1">
                            <a href="https://guess-the-emoji.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-black/80 hover:bg-black/90 active:bg-black/90 text-white w-[50%] text-center rounded-bl-md py-2 transition-all duration-300 ease-in-out">
                                <img src="/images/icons/open.png" alt="" className="w-5 h-5" />
                                <p>Demo</p>
                            </a>
                            <a href="https://github.com/noelalexr/guess-the-emoji.git" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-black/80 hover:bg-black/90 active:bg-black/90 text-white w-[50%] text-center rounded-br-md py-2 transition-all duration-300 ease-in-out">
                                <img src="/images/icons/github.png" alt="" className="w-5 h-5" />
                                <p>Github</p>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="my-auto lg:w-90 md:w-80 w-[80vw] md:mx-0 mx-auto text-left"
                    >
                        <p className="text-3xl text-black/80 pb-3">Guess The Emoji</p>
                        <p className="text-black/60 text-sm">Guess-the-Emoji is a fun JavaScript-based game where players guess words represented by emojis. Built with only HTML, CSS, and vanilla JavaScript, it fetches random words from an AI API and converts them into emoji puzzles. Players can choose categories, set the number of rounds, and track their score as they play.</p>
                        <div className="flex flex-wrap justify-start gap-2 mt-5">
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">JavaScript</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">HTML</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">CSS</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">AI API (Groq)</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="py-25 bg-gray-100 relative shadow-sm z-2">
                {/* PAWPALS */}
                <div className="flex md:flex-row flex-col justify-center md:gap-10 gap-5 lg:pr-50 md:pr-20 pr-0">
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col bg-white lg:p-3 p-2 rounded-xl shadow-xl my-auto hover:scale-105 transition-all duration-700 ease-out md:mx-0 mx-auto"
                    >
                        <img src="images/projects/pawpals.png" alt="pawpals" className="lg:w-90 w-70 rounded-t-md" />
                        <div className="flex flex-row justify-around lg:mt-2 mt-1 lg:gap-2 gap-1">
                            <a href="https://pawpals-beta.onrender.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-black/80 hover:bg-black/90 active:bg-black/90 text-white w-[50%] text-center rounded-bl-md py-2 transition-all duration-300 ease-in-out">
                                <img src="/images/icons/open.png" alt="" className="w-5 h-5" />
                                <p>Demo</p>
                            </a>
                            <a href="https://github.com/noelalexr/pawpals.git" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-black/80 hover:bg-black/90 active:bg-black/90 text-white w-[50%] text-center rounded-br-md py-2 transition-all duration-300 ease-in-out">
                                <img src="/images/icons/github.png" alt="" className="w-5 h-5" />
                                <p>Github</p>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="my-auto lg:w-90 md:w-80 md:mx-0 mx-auto text-left w-[80vw]"
                    >
                        <p className="text-3xl text-black/80 pb-3">Pawpals</p>
                        <p className="text-black/60 text-sm">PawPals is a pet adoption platform where users can browse pets posted by various kennels. Each pet listing includes detailed info along with kennel details, making it easy for users to find and connect with adoption centers.</p>
                        <div className="flex flex-wrap justify-start gap-2 mt-5">
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">React</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">Express.js</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">Node.js</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">MongoDB</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">Tailwind CSS</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">Cloudinary</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">JavaScript</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">AI API (Groq)</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="py-25 bg-white relative shadow-sm z-1">
                {/* HEALTHTRACKR */}
                <div className="flex md:flex-row flex-col justify-center md:gap-10 gap-5 lg:pl-50 md:pl-20 pl-0">
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col bg-white lg:p-3 p-2 rounded-xl shadow-xl my-auto hover:scale-105 transition-all duration-700 ease-out md:mx-0 mx-auto"
                    >
                        <img src="images/projects/healthtrackr.png" alt="motohunt" className="lg:w-90 w-70 rounded-t-md" />
                        <div className="flex flex-row justify-around lg:mt-2 mt-1 lg:gap-2 gap-1">
                            <a href="https://healthtrackr-beta.netlify.app" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-black/80 hover:bg-black/90 active:bg-black/90 text-white w-[50%] text-center rounded-bl-md py-2 transition-all duration-300 ease-in-out">
                                <img src="/images/icons/open.png" alt="" className="w-5 h-5" />
                                <p>Demo</p>
                            </a>
                            <a href="https://github.com/noelalexr/healthtrackr.git" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-black/80 hover:bg-black/90 active:bg-black/90 text-white w-[50%] text-center rounded-br-md py-2 transition-all duration-300 ease-in-out">
                                <img src="/images/icons/github.png" alt="" className="w-5 h-5" />
                                <p>Github</p>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="my-auto lg:w-90 md:w-80 md:mx-0 mx-auto text-left w-[80vw]"
                    >
                        <p className="text-3xl text-black/80 pb-3">HealthTrackr</p>
                        <p className="text-black/60 text-sm">HealthTrackr helps users save and monitor their vital signs with built-in health calculations. It provides instant feedback, warning users if medical attention may be needed or reassuring them when their vitals are in a healthy range.</p>
                        <div className="flex flex-wrap justify-start gap-2 mt-5">
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">React</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">Tailwind CSS</span>
                            <span className="px-2 py-1 text-black/60 bg-black/10 text-sm rounded-md">JavaScript</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default Projects
