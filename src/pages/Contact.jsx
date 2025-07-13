import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);
        setStatusMessage(null);
        try {
            const result = await emailjs.send(
                "service_339ulat",
                "template_e9wp8kd",
                formData,
                "HPF0A9Ar09uu_M9J_"
            );
            console.log(result.text);
            setStatusMessage({ type: "success", text: "Message sent successfully!" });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatusMessage({ type: "error", text: "Failed to send message." });
        }
        setIsLoading(false);
    };

    return (
        <div>
            <div className="flex md:flex-row flex-col justify-center lg:gap-20 md:gap-15 gap-10 py-20 shadow-sm relative z-2 overflow-hidden">
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1 }}
                    className="max-w-100 md:text-right md:mx-0 mx-auto md:px-0 px-8"
                >
                    <p className="font-paytone text-5xl pb-5 text-black/80 pt-10">Contact me</p>
                    <p className="text-black/50 md:text-lg">If you have a project in mind, want to work with me, or have a question, feel free to reach out on social media or send me an email.</p>
                </motion.div>
                <div className="lg:px-20 flex flex-col md:gap-5 gap-3 pl-13">
                    <motion.a
                        initial={{ x: "95vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        href="https://www.linkedin.com/in/noelalexander/" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-3 hover:scale-105 active:scale-95 duration-500 ease-in-out"
                    >
                        <img src="/images/icons/linkedin-original.png" alt="" className="md:w-15 w-12" />
                        <p className="text-[#0B69C7] my-auto text-lg font-bold">Linkedin</p>
                    </motion.a>
                    <motion.a
                        initial={{ x: "95vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        href="https://www.facebook.com/noelalexr" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-3 hover:scale-105 active:scale-95 duration-500 ease-in-out"
                    >
                        <img src="/images/icons/facebook-original.png" alt="" className="md:w-15 w-12" />
                        <p className="text-[#1877F2] my-auto text-lg font-bold">Facebook</p>
                    </motion.a>
                    <motion.a
                        initial={{ x: "95vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }} className="flex flex-row gap-3 hover:scale-105 active:scale-95 duration-500 ease-in-out"
                        href="https://www.instagram.com/biscuitt___/" target="_blank" rel="noopener noreferrer"
                    >
                        <img src="/images/icons/instagram-original.png" alt="" className="md:w-15 w-12" />
                        <p className="bg-gradient-to-r from-[#FED41B] via-[#FA2084] to-[#9000DC] bg-clip-text text-transparent my-auto text-lg font-bold">Instagram</p>
                    </motion.a>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                className="bg-gray-100 py-20 relative shadow-sm"
            >
                <div className="">
                    <p className="text-3xl text-black/75 pb-10 px-8 md:text-center">Send me an email</p>
                    <form onSubmit={handleSubmit}>
                        <div className="flex lg:flex-row flex-col justify-center gap-10">
                            <div className="flex flex-col gap-3">
                                <div className="inline-block lg:mx-0 mx-auto">
                                    <p className="pb-1 text-black/60">Name</p>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="bg-white lg:w-80 md:w-100 w-[80vw] rounded-md p-2 px-4 outline-none border-2 border-gray-300 focus:border-gray-500 transition-all duration-500 ease-in-out"
                                    />
                                </div>
                                <div className="inline-block lg:mx-0 mx-auto">
                                    <p className="pb-1 text-black/60">Email</p>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-white lg:w-80 md:w-100 w-[80vw] rounded-md p-2 px-4 outline-none border-2 border-gray-300 focus:border-gray-500 transition-all duration-500 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="lg:flex flex-col inline-block lg:mx-0 mx-auto">
                                <p className="pb-1 text-black/60">Message</p>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    required
                                    className="bg-white md:w-120 w-[80vw] rounded-md p-2 px-4 outline-none border-2 border-gray-300 focus:border-gray-500 transition-all duration-500 ease-in-out"
                                ></textarea>
                                <div className="flex md:flex-row flex-col justify-center">
                                    {statusMessage && (
                                        <p
                                            className={`my-auto md:text-right text-center ${statusMessage.type === "success" ? "text-green-600" : "text-red-500"
                                                }`}
                                        >
                                            {statusMessage.text}
                                        </p>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`bg-black/70 text-white h-10 w-42 rounded-md md:mt-3 mt-2 md:ml-auto ml-auto transition-all duration-300 hover:bg-black/80 active:bg-black/80 cursor-pointer ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                    >
                                        {isLoading ? (
                                            <div className="animate-spin rounded-full h-5 w-5 border-3 border-white border-b-white/40 mx-auto"></div>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div >
    );
};

export default Contact
