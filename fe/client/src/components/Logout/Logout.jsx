import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../../services/authService';
import { Path } from "../../paths";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export const Logout = () => {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);
    useEffect(() => {
        authService.logout()
            .then(()=>{
                logoutHandler()
                navigate(Path.Home)
            })
            .catch(() => navigate(Path.Home))
    }, []);

    return null;
};