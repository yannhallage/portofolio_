

const Section_one = () => {
    return (
        <>
            <section className="p-3 container mx-auto mt-23">
                <div className="">
                    <span>
                        pages
                    </span>
                    <hr
                        className="text-secondary/5 dark:text-white/5 mb-4"
                    />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-2 mt-3">
                    <div className="border p-3 rounded-md">
                        <span>
                            <a target="_self" class="rounded-md p-5 bg-secondary/5 dark:bg-[#ffffff0a] dark:hover:bg-[#ffffff0f] dark:backdrop-blur-2xl transition-all duration-1000 opacity-1 -translate-y-0" href="/blog"><h3 class="text-base mb-1 md:mb-2 md:font-medium">Blog</h3><p class="dark:text-grey-light-900 text-small md:text-base mb-0">Lees wat ik met de wereld deel</p></a>
                        </span>
                    </div>
                </div>

            </section>
            {/* Technologies */}

            <section className="container mx-auto mt-2">
                <div className="border-b-1">
                    <span>
                        Technologies
                    </span>

                </div>

                <div className=" mt-3">
                    <span>Frontend</span>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 p-3 gap-4">
                    <div className="flex border rounded-md p-4">
                        <span>icon</span>
                        <span>titre</span>
                    </div>
                </div>
            </section>

            <section className=" container mx-auto">
                <div className="p-1">
                    <span>Backend</span>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 p-3 gap-4">
                    <div className="flex border rounded-md p-4">
                        <span>icon</span>
                        <span>titre</span>
                    </div>
                </div>
            </section>

            <section className=" container mx-auto">

                <div className="p-1">
                    <span>Tools</span>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 p-3 gap-4">
                    <div className="flex border rounded-md p-4">
                        <span>icon</span>
                        <span>titre</span>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section_one;