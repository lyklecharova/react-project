import { createContext} from "react";
import { useNavigate } from "react-router";

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import { Path } from "../paths";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken); // запазва стойността на result.accessToken в localStorage в  уеб браузъра
        navigate(Path.Home); 

    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken); // запазва стойността на result.accessToken в localStorage в  уеб браузъра
        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        // премахване на стойността, свързана с ключа "accessToken" от localStorage уеб браузъра. 
        // След изпълнението на този ред код, стойността, 
        //свързана с ключа "accessToken", ще бъде изтрита от локалното съхранение, и следователно токенът за достъп няма да бъде наличен за бъдещи заявки, 
        //ако не бъде отново добавен в локалното съхранение.
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,

        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {/* Позволява да пропагейтнем възможността контекста да се достъпва през определна част от дървото  (било то част от дървото или цялото дърво)*/}
            {children}
        </AuthContext.Provider>
    );
}

AuthContext.displayName = 'AuthContext';