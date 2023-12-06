import useRegister from "./useRegister"
const Register = () => {
    const { firstName, lastName, email, password, confirmPassword, error, handleSubmit, handleFirstNameChange, handleLastNameChange, handleEmailChange, handlePasswordChange, handleConfirmPasswordChange } = useRegister();

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleFirstNameChange} value={firstName} />
            {error.firstName && <p>{error.firstName}</p>}
            <input type="text" onChange={handleLastNameChange} value={lastName} />
            {error.lastName && <p>{error.lastName}</p>}
            <input type="email" onChange={handleEmailChange} value={email} />
            {error.email && <p>{error.email}</p>}
            <input type="password" onChange={handlePasswordChange} value={password} />
            {error.password && <p>{error.password}</p>}
            <input type="password" onChange={handleConfirmPasswordChange} value={confirmPassword} />
            {error.confirmPassword && <p>{error.confirmPassword}</p>}
            <button type="submit">Register</button>
        </form>
    )
}

export default Register