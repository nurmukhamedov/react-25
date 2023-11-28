import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Home";
import About from "../About";
import Header from "../Header";
import Footer from "../Footer";
const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router