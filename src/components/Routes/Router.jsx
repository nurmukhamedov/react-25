import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Home";
import About from "../About";
import Header from "../Header";
import Footer from "../Footer";
import Login from "../Login";
import Register from "../Register";
import SingleNews from "../Lesson-6/SingleNews";
import Error from "../Lesson-6/Error";
const Router = () => {
    return (
        <BrowserRouter>
            {window.location.pathname !== '/login' && window.location.pathname !== "/register" ? <Header /> : null}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/news/:id" element={<SingleNews />} />
                <Route path="/register" element={<Register />} />
                <Route path="/error" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router