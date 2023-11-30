import { useContext } from "react"
import { ThemeContext } from "../components/Lesson-6/ThemeContext"
import './Lesson-6/ComponentMain.scss';
const Home = () => {
    const { toggleTheme, mainClass } = useContext(ThemeContext);


    return (
        <div className={mainClass}>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    )
}

export default Home;