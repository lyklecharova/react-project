import { createContext, useState } from "react";
import { useNavigate } from "react-router";

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";

import { Path } from "../paths";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();

    // usePersistedState  инициализира auth състоянието в React компонент с ключа 'auth' и празен обект като начална стойност, 
    //като същевременно осигурява персистентността му чрез локалното хранилище на браузъра.
    const [auth, setAuth] = usePersistedState('auth', {});
    const [errorMsgLogin, setErrorMsgLogin] = useState(null);
    const [errorMsgRegister, setErrorMsgRegister] = useState(null);

    // const [auth, setAuth] = useState(() => {
    //     // initial function to delete token , return empty object
    //     localStorage.removeItem("accessToken");
    //     return {};
    // })
    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken); // запазва стойността на result.accessToken в localStorage в  уеб браузъра
            navigate(Path.Home);
        } catch (error) {
            console.error("Login failed:", error.message);
            // Check if the error message indicates a login or password mismatch
            if (error.message.includes("Login or password don't match")) {
                setErrorMsgLogin("Email or password don't match");
            } else {
                setErrorMsgLogin('Please check your data!');
            }
        }
    };

    const registerSubmitHandler = async (values) => {
        //[a-zA-Z0-9._-]+: Позволява букви (главни и малки), цифри, точки, подчертавки и тирета. + означава, че трябва да има поне една или повече от тези символи.
        // [a-zA-Z0-9.-]+: Позволява букви (главни и малки), цифри, точки и тирета за домейн (след "@").
        // \.: Изисква точка след домейна.
        // [a-zA-Z]{2,4}: Изисква от две до четири букви (главни и/или малки) за топ-левел домейн (например, .com, .net).
        // $: Завършва се на края на низа.
        const emailHandler = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

        try {
            // Stop registration if email is not valid
            if (!emailHandler.test(values.email)) {
                setErrorMsgRegister("Wrong data input!");
                return;
            };

            // Stop registration if passwords do not match
            if (values.password !== values.confirmPassword) {
                setErrorMsgRegister("Passwords do not match");
                return;
            }
            const result = await authService.register(values.email, values.password);
            setAuth(result);
            // запазва стойността на result.accessToken в localStorage в  уеб браузъра
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Home);


        } catch (error) {
            console.error("Registration failed:", error.message);
            setErrorMsgRegister('Please check your data!');

            // Check if the error message indicates a duplicate email
            if (error.message.includes("A user with the same email already exists")) {
                setErrorMsgRegister("A user with the same email already exists");
            } else {
                setErrorMsgRegister('Please check your data!');
            }
        }
    };

    const logoutHandler = () => {
        setAuth({});
        // премахване на стойността, свързана с ключа "accessToken" от localStorage уеб браузъра. 
        // След изпълнението на този ред код, стойността, 
        //свързана с ключа "accessToken", ще бъде изтрита от локалното съхранение, и следователно токенът за достъп няма да бъде наличен за бъдещи заявки, 
        //ако не бъде отново добавен в локалното съхранение.
        localStorage.removeItem('accessToken');

    };

    const getErrorMsgLogin = () => errorMsgLogin;
    const clearErrorMsgLogin = () => setErrorMsgLogin(null);

    const getErrorMsgRegister = () => errorMsgRegister;
    const clearErrorMsgRegister = () => setErrorMsgRegister(null);

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,

        username: auth.username || auth.email,
        email: auth?.email || null,
        userId: auth?._id || null,
        isAuthenticated: !!auth.accessToken,

        getErrorMsgLogin,
        clearErrorMsgLogin,

        getErrorMsgRegister,
        clearErrorMsgRegister,

    };

    return (
        <>
            {/* Позволява да пропагейтнем възможността контекста да се достъпва през определна част от дървото  (било то част от дървото или цялото дърво)*/}
            <AuthContext.Provider value={values}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

AuthContext.displayName = 'AuthContext';