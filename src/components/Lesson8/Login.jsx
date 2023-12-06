import useRegister from "./useRegister";
const Login = () => {

    const { email, password, handlePasswordChange, handleEmailChange, handleSubmit, error } = useRegister();

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" onChange={handleEmailChange} value={email} />
            {error.email && <p>{error.email}</p>}
            <input type="password" onChange={handlePasswordChange} value={password} />
            {error.password && <p>{error.password}</p>}
        </form>
    )
}

export default Login