import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';

import styles from './Login.module.css';
import { Navigate } from 'react-router-dom';




export const Login = () => {
    const { isAuthenticated, getErrorMsgLogin, clearErrorMsgLogin, loginSubmitHandler } = useContext(AuthContext);
    if (isAuthenticated) {
        return <Navigate to="/" />
    }

    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

   

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setLogin((login) => ({
            ...login,
            [name]: value,
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            await loginSubmitHandler(login);
        } catch (error) {
            console.error('Login failed:', error.message);
            
        }
    };


   
    useEffect(() => {
        clearErrorMsgLogin();
    }, []);
    const inputChangeHandler = (e) => {
        onChangeHandler(e);
    };

    return (
        <section className={styles['login-register-section']}>
            <form onSubmit={onSubmitHandler} action="submit.php" method="post" className={styles['login-register-form']} >
                <label htmlFor="email" className={styles['login-form-label']}>Email</label>

                <div className={styles['input-container']}>
                    <FontAwesomeIcon icon={faUser} className={styles['user-icon']} />
                </div>

                <input
                    type="text"
                    id="email"
                    name="email"
                    
                    onChange={inputChangeHandler}
                    value={login.email}
                   
                    className={styles['login-form-input']}
                    placeholder="Email..."
                    required autoComplete="email"
                />
                <br />

                <label htmlFor="password" className={styles['login-form-label']}>Password</label>

                <div className={styles['input-container']}>
                    <FontAwesomeIcon icon={faLock} className={styles['password-icon']} />
                </div>

                <input
                    type="password"
                    id="password"
                    name="password"
                    
                    onChange={inputChangeHandler}
                    value={login.password}
                    className={styles['login-form-input']}
                    placeholder="Password..."
                    required autoComplete="password"
                />
                <br />
                {getErrorMsgLogin() && <p className={styles['login-error-msg']}>{getErrorMsgLogin()}</p>}

                <input type="submit" defaultValue="Log in" className={styles['login-form-button']} />
            </form>
        </section>
    );
}