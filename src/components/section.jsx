
import { motion } from "motion/react"
import {
    Frontend_, iconMap, Tools, Tools_,
    Database, Database_, Backend, Backend_
} from "../data/data";

const Section = () => {
    return (
        <>
            <section className="space-y-11 ">
                <motion.div className="">
                    <span className=" text-[13px]md:text-2xl text-base text-neutral-300">Frontend</span>
                    <hr className="text-secondary/5 dark:text-white/5 mb-4" />
                    <motion.div className="mt-4 grid md:grid-cols-3 grid-cols-1 gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {Frontend_.map((tech, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                key={index} className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl animate__animated">
                                <div className="p-2 items-center justify-center rounded-lg bg-[#7ee1fc26] ">
                                    <img
                                        src={iconMap[tech]}
                                        alt={tech}
                                        className="w-10 h-10 object-contain"
                                    // width={"21"}
                                    />
                                </div>
                                <span className="text-white capitalize">{tech}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
                {/* backend */}
                <div className="">
                    <span className="text-2xl text-base text-neutral-300">Backend</span>
                    <hr className="text-secondary/5 dark:text-white/5 mb-4" />
                    <div className="mt-4 grid md:grid-cols-3 grid-cols-1 gap-4">
                        {Backend_.map((tech, index) => (
                            <motion.div key={index} className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl animate__animated"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <img
                                    src={Backend[tech]}
                                    alt={tech}
                                    className="w-10 h-10 object-contain"
                                />
                                <span className="text-white capitalize">{tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* TOOLS */}
                <div className="">
                    <span className="text-2xl text-base text-neutral-300">Tools</span>
                    <hr className="text-secondary/5 dark:text-white/5 mb-4" />
                    <motion.div className="mt-4 grid md:grid-cols-3 grid-cols-1 gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {Tools_.map((tech, index) => (
                            <div key={index} className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl animate__animated">
                                <img
                                    src={Tools[tech]}
                                    alt={tech}
                                    className="w-10 h-10 object-contain"
                                />
                                <span className="text-white capitalize">{tech}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
                {/* database */}
                <div className="">
                    <span className="text-2xl text-base text-neutral-300">Database</span>
                    <hr className="text-secondary/5 dark:text-white/5 mb-4" />
                    <motion.div className="mt-4 grid md:grid-cols-3 grid-cols-1 gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {Database_.map((tech, index) => (
                            <div key={index} className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl animate__animated">
                                <img
                                    src={Database[tech]}
                                    alt={tech}
                                    className="w-10 h-10 object-contain"
                                />
                                <span className="text-white capitalize">{tech}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Section;
