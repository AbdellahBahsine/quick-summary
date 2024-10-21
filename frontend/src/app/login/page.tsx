import LoginForm from "./components/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <div className="h-full px-6 md:px-10 flex flex-col items-center">
            <div className="max-w-[1545px] w-full flex justify-center">
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;