import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from "../pages/blog";
import Mains from "../pages/mains";
import Projects from "../pages/projects";
import About from "../pages/about";


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path="/" element={<Mains />}/>
                        <Route path="/blog" element={<Blog />}/>
                        <Route path="/About" element={<About />}/>
                        <Route path="/Projects" element={<Projects />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router;