import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

import { AuthContext } from '../../contexts/authContext';

import styles from './Register.module.css';
export const Register = () => {
    const { isAuthenticated, registerSubmitHandler, getErrorMsgRegister, clearErrorMsgRegister  } = useContext(AuthContext);
    if (isAuthenticated) {
        return <Navigate to="/" />
    }

    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    

    const onChange = (e) => {
        const { name, value } = e.target;
        setRegister((register) => ({
            ...register,
            [name]: value,
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            // Call the registration submit handler from the AuthContext
            await registerSubmitHandler(register);
            // If registration is successful, clear any previous registration errors
            
        } catch (error) {
            console.error('Registration failed:', error.message);
        }

    }
    useEffect(()=>{
        clearErrorMsgRegister();
    }, []);

    const inputChangeHandler = (e) => {
        clearErrorMsgRegister();
        onChange(e);
    };

    return (
        <section className={styles['login-register-section']}>
            <form onSubmit={onSubmitHandler} action="submit.php" method="post" className={styles['login-register-form']}>

                <label htmlFor="email" className={styles['login-form-label']}>Email</label>

                <div className={styles['input-container']}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles['email-icon']} />
                </div>

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={register.email}
                    onChange={inputChangeHandler}
                    className={styles['login-form-input']}
                    placeholder="Email"
                    required={true}
                    autoComplete="email"
                />
                <br />

                <label htmlFor="password" className={styles['login-form-label']}>Password</label>

                <div className={styles['input-container']}>
                    <FontAwesomeIcon icon={faUnlock} className={styles['unlock-password']} />
                </div>

                <input type="password"
                    id="password"
                    name="password"
                    value={register.password}
                    onChange={inputChangeHandler}
                    className={styles['login-form-input']}
                    placeholder="Password"
                    required={true}
                    autoComplete="password"
                />
                <br />

                <label htmlFor="confirm_password" className={styles['login-form-label']}>Confirm Password</label>

                <div className={styles['input-container']}>
                    <FontAwesomeIcon icon={faLock} className={styles['lock-password-icon']} />
                </div>

                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={register.confirmPassword}
                    onChange={inputChangeHandler}
                    className={styles['login-form-input']}
                    placeholder="Confirm Password"
                    required={true}
                    autoComplete="confirm-password"
                />
                <br />

                {getErrorMsgRegister() && <p className={styles['login-error-msg']}>{getErrorMsgRegister()}</p>}

                <input type="submit" defaultValue="Registration" className={styles['login-form-button']} />
            </form>
        </section>
    );
}