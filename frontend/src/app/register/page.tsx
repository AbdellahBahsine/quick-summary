import RegisterForm from "./components/RegisterForm/RegisterForm";


const RegisterPage = () => {
    return (
        <div className="h-full px-6 md:px-10 flex flex-col items-center">
            <div className="max-w-[1545px] w-full flex justify-center">
            <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage;