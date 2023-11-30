import { useLocation } from "react-router-dom";

const Footer = () => {
    const pathName = useLocation();
    console.log(pathName.pathname);


    const isLoginPage = pathName.pathname === "/login";
    const isRegisterPage = pathName.pathname === "/register"

    console.log(isLoginPage);

    return (
        <>
            {
                (!isLoginPage && !isRegisterPage) && <div>Footer component</div>
            }
        </>
    )
}

export default Footer