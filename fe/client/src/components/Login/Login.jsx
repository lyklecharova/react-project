import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';


import styles from './Login.module.css';
export const Login = () => {
    const [login, setLogin] = useState({
        username: '',
        password: '',
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setLogin((login) => ({
            ...login,
            [name]: value,
        }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Тук може да добавите логика за обработка на формата
        console.log(login)
    }

    return (
        <section className={styles['login-register-section']}>
            <form onSubmit={onSubmitHandler} action="submit.php" method="post" className={styles['login-register-form']} >
                <label htmlFor="username" className={styles['login-form-label']}>Username</label>

                <div className={styles['input-container']}>
                <FontAwesomeIcon icon={['fas', 'user']} style={{ color: '#f29718' }} />                
                </div>

                <input
                    type="text"
                    id="username"
                    name="username"
                    value={login.username}
                    onChange={onChangeHandler}
                    className={styles['login-form-input']}
                    placeholder="Username..."
                    required autoComplete="username"
                />
                <br />

                <label htmlFor="password" className={styles['login-form-label']}>Password</label>

                <div className={styles['input-container']}>
                    <FontAwesomeIcon icon={faUnlockAlt} className={styles['icon-password']} />
                </div>

                <input
                    type="password"
                    id="password"
                    name="password"
                    value={login.password}
                    onChange={onChangeHandler}
                    className={styles['login-form-input']}
                    placeholder="Password..."
                    required autoComplete="password"
                />
                <br />

                <input type="submit" defaultValue="Log in" className={styles['login-form-button']} />
            </form>
        </section>
    );
}