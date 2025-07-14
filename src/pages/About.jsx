import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const About = () => {
    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "Tailwind", level: 95 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 90 },
        { name: "Node.js & Express", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "REST API", level: 75 },
        { name: "Postman", level: 80 },
        { name: "JWT / Auth", level: 75 },
    ];

    const SkillBar = ({ name, level }) => {
        const controls = useAnimation();
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        useEffect(() => {
            if (isInView) {
                controls.start({ width: `${level}%` });
            }
        }, [isInView, controls, level]);

        return (
            <div ref={ref} className="mb-4 md:w-80 w-[80vw] lg:mx-10 mx-8">
                <div className="flex justify-between mb-0">
                    <span className="text-black/60 md:text-lg">{name}</span>
                    <span className="text-black/45 mt-auto">{level}%</span>
                </div>
                <div className=" bg-gray-300/50 rounded-sm h-7 overflow-hidden">
                    <motion.div
                        className="h-7 bg-gray-500"
                        initial={{ width: 0 }}
                        animate={controls}
                        transition={{ duration: 0.8, ease: "easeOut", }}
                    />
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="md:flex justify-center lg:gap-20 md:gap-15 gap-10 py-20 shadow-sm relative z-4">
                <motion.div
                    initial={{ x: "50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 1.40, ease: "easeOut" }}
                    className="text-right lg:w-100 md:w-80 w-60 my-auto hidden md:block"
                >
                    <p className="font-paytone text-5xl pb-5 text-black/80">About me</p>
                    <p className="text-black/50 text-lg">I'm a design engineer turned full-stack web developer. I'm passionate about building meaningful, user-focused solutions through code and design. Right now, I'm focused on growing my skills in modern web technologies and creating projects that solve real-world problems while showcasing my creativity and technical ability.</p>
                </motion.div>
                <div className="relative my-auto md:mx-0 mx-auto xl:w-90 lg:w-80 md:w-70 w-60 md:block hidden">
                    <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-white/10 rounded-full"></div>
                    <motion.img
                        animate={{
                            x: ["-65%", "-65%", 0],
                            opacity: [0, 1, 1]
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            times: [0, 0.75, 1],
                            delay: 1
                        }}
                        src="/images/me/side.png" alt="" className="w-[100%] h-[100%] bg-gray-100 rounded-full shadow-lg my-auto"
                    />
                </div>
                <div className="relative my-auto mx-auto w-60 md:hidden">
                    <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-white/5 rounded-full"></div>
                    <motion.img
                        initial={{ x: "50%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1, ease: "easeOut" }}
                        src="/images/me/side.png" alt="" className="w-[100%] h-[100%] bg-gray-100 rounded-full shadow-lg my-auto"
                    />
                </div>
                <motion.div
                    initial={{ x: "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.3, ease: "easeOut" }}
                    className="text-left px-8 md:hidden max-w-120 mx-auto"
                >
                    <p className="font-paytone text-5xl pb-5 text-black/80 pt-10">About me</p>
                    <p className="text-black/50 text-md">Hi there! I'm Alexander, a design engineer turned full-stack web developer. I'm passionate about building meaningful, user-focused solutions through code and design. Right now, I'm focused on growing my skills in modern web technologies and creating projects that solve real-world problems while showcasing my creativity and technical ability.</p>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.7, ease: "easeOut" }}
                className="bg-gray-100 py-20 shadow-sm relative z-3"
            >
                <p className="text-3xl text-black/75 text-center pb-5">Skills</p>
                <div className="flex justify-center">
                    <div className="md:grid grid-rows-5 grid-flow-col">
                        {skills.map((skill) => (
                            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.7, ease: "easeOut" }}
                className="flex md:flex-row py-20 justify-center lg:gap-60 md:gap-30 gap-20 flex-col text-center shadow-sm relative z-2 px-8"
            >
                <div className="flex flex-col gap-5">
                    <p className="text-3xl text-black/75">Job Experience</p>
                    <div>
                        <p className="font-semibold text-lg text-black/70">Design Engineer</p>
                        <div className="text-black/40">
                            <p>Philippine EDS Techno Service Inc.</p>
                            <p>October 2021 - Present</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-lg text-black/70">Technical Engineer</p>
                        <div className="text-black/40">
                            <p>M5 Telecom Solutions Inc.</p>
                            <p>March 2020 - April 2021</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-3xl text-black/75">Education</p>
                    <div>
                        <p className="font-semibold text-lg text-black/70">Full-Stack Web Development</p>
                        <div className="text-black/40">
                            <p>Uplift Code Camp</p>
                            <p>January 2025 - July 2025</p>
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold text-lg text-black/70">
                            <p>Bachelor of Science in</p>
                            <p>Electronics and Communications Engineering</p>
                        </div>
                        <div className="text-black/40">
                            <p>Cavite Sate University</p>
                            <p>June 2013 - June 2019</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.7, ease: "easeOut" }}
                className="bg-[url('/images/backgrounds/nature.jpg')] bg-cover bg-center w-full shadow-sm shadow-gray-400 relative z-1">
                <div
                    className="md:text-center bg-white/50 py-20"
                >
                    <div className="max-w-170 px-8 mx-auto z-5">
                        <p className="text-3xl text-black/70 pb-5">More About Me</p>
                        <p className="text-black/50 md:text-lg">Outside of coding, I enjoy riding my motorcycle, diving into story-driven video games, and getting lost in music. These hobbies keep me balanced and inspired. Whether I'm cruising down open roads, exploring virtual worlds, or discovering new sounds, I always come back with fresh ideas and energy for building cool things with code.</p>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default About
