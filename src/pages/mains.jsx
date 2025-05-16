

import Header from "../components/header";
import Alternative from "../alternative";
import Footer from "../components/footer";
import { Context } from "../context/context";

import { useContext } from "react";

const Mains = () => {
    const { state, setState } = useContext(Context)

    return (
        <>
            <main>
                <div className="">
                    <Header />
                </div>
                {/*  */}
                <section className="container mx-auto p-3 space-y-17 md:p-11 mt-5">
                    { state }
                </section>
                <div className="">
                    <Footer />
                </div>
            </main>
        </>
    )
}
export default Mains;