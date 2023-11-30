import ComponentMainB from "./ComponentMainB"
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
const ComponentMain = () => {

    const { toggleTheme, mainClass } = useContext(ThemeContext);



    return (
        <div>
            <div className={mainClass}>
                Hello from Component Main
            </div>
            <button onClick={toggleTheme}>Change Theme</button>

            <ComponentMainB />
        </div>
    )
}

export default ComponentMain