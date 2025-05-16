import { motion } from "motion/react";


const Projects = () => {
    return (
        <>
            <section >
                <span className=" text-[13px]md:text-2xl text-base text-neutral-300">Projects</span>
                <hr className="text-secondary/5 dark:text-white/5 mb-4" />
                <motion.div
                    className="mt-4 grid md:grid-cols-3 grid-cols-1 gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <a className="rounded-md" href="/portfolio/bio-bandits">
                        <div className="relative">
                            <img
                                alt="Een afbeelding gerelateerd aan dit project"
                                srcSet="
        https://res.cloudinary.com/dm8qh4w9a/image/upload/w_384/aca5e3a7-54e2-44cb-8584-37dcc89928b9 1x,
        https://res.cloudinary.com/dm8qh4w9a/image/upload/w_640/aca5e3a7-54e2-44cb-8584-37dcc89928b9 2x
      "
                                src="https://res.cloudinary.com/dm8qh4w9a/image/upload/w_640/aca5e3a7-54e2-44cb-8584-37dcc89928b9"
                                width={300}
                                height={50}
                                decoding="async"
                                data-nimg="1"
                                className="w-full aspect-video mb-4 rounded-lg object-cover"
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <h3 className="text-base md:text-largest mb-1 md:mb-2">Bio Bandits</h3>
                        <p className="dark:text-white/40">
                            Een creatieve website voor heerlijke organische sauzen
                        </p>
                    </a>
                    <a className="rounded-md" href="/portfolio/bio-bandits">
                        <div className="relative">
                            <img
                                alt="Een afbeelding gerelateerd aan dit project"
                                srcSet="
        https://res.cloudinary.com/dm8qh4w9a/image/upload/w_384/aca5e3a7-54e2-44cb-8584-37dcc89928b9 1x,
        https://res.cloudinary.com/dm8qh4w9a/image/upload/w_640/aca5e3a7-54e2-44cb-8584-37dcc89928b9 2x
      "
                                src="https://res.cloudinary.com/dm8qh4w9a/image/upload/w_640/aca5e3a7-54e2-44cb-8584-37dcc89928b9"
                                width={300}
                                height={50}
                                decoding="async"
                                data-nimg="1"
                                className="w-full aspect-video mb-4 rounded-lg object-cover"
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <h3 className="text-base md:text-largest mb-1 md:mb-2">Bio Bandits</h3>
                        <p className="dark:text-white/40">
                            Een creatieve website voor heerlijke organische sauzen
                        </p>
                    </a>
                    <a className="rounded-md" href="/portfolio/bio-bandits">
                        <div className="relative">
                            <img
                                alt="Een afbeelding gerelateerd aan dit project"
                                srcSet="
        https://res.cloudinary.com/dm8qh4w9a/image/upload/w_384/aca5e3a7-54e2-44cb-8584-37dcc89928b9 1x,
        https://res.cloudinary.com/dm8qh4w9a/image/upload/w_640/aca5e3a7-54e2-44cb-8584-37dcc89928b9 2x
      "
                                src="https://res.cloudinary.com/dm8qh4w9a/image/upload/w_640/aca5e3a7-54e2-44cb-8584-37dcc89928b9"
                                width={300}
                                height={50}
                                decoding="async"
                                data-nimg="1"
                                className="w-full aspect-video mb-4 rounded-lg object-cover"
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <h3 className="text-base md:text-largest mb-1 md:mb-2">Bio Bandits</h3>
                        <p className="dark:text-white/40">
                            Een creatieve website voor heerlijke organische sauzen
                        </p>
                    </a>
                    <a className="rounded-md" href="/portfolio/bio-bandits">
                        <div className="relative">
                            <img
                                alt="Een afbeelding gerelateerd aan dit project"
                                srcSet="
        https://res.cloudinary.com/dm8qh4w9a/image/upload/w_384/aca5e3a7-54e2-44cb-8584-37dcc89928b9 1x,
        https://res.cloudinary.com/dm8qh4w9a/image/upload/w_640/aca5e3a7-54e2-44cb-8584-37dcc89928b9 2x
      "
                                src="https://res.cloudinary.com/dm8qh4w9a/image/upload/w_640/aca5e3a7-54e2-44cb-8584-37dcc89928b9"
                                width={300}
                                height={50}
                                decoding="async"
                                data-nimg="1"
                                className="w-full aspect-video mb-4 rounded-lg object-cover"
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <h3 className="text-base md:text-largest mb-1 md:mb-2">Bio Bandits</h3>
                        <p className="dark:text-white/40">
                            Een creatieve website voor heerlijke organische sauzen
                        </p>
                    </a>
                </motion.div>
            </section>
        </>
    )
}
export default Projects;