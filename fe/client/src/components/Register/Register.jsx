import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import styles from './Register.module.css'
export const Register = () => {
    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setRegister((register) => ({
            ...register,
            [name]: value,
        }));
    };


    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Тук може да добавите логика за обработка на формата
        console.log(register)
    };
    return (
        <section className={styles['login-register-section']}>
            <form onSubmit={onSubmitHandler} action="submit.php" method="post" className={styles['login-register-form']}>
                <label htmlFor="username" className={styles['login-form-label']}>Username</label>

                <div className={styles['input-container']}>
                    <FontAwesomeIcon icon={faUser} className={styles['icon-user']} />
                </div>

                <input
                    type="text"
                    id="username"
                    name="username"
                    value={register.username}
                    onChange={onChangeHandler}
                    className={styles['login-form-input']}
                    placeholder="Username"
                    required= {true}
                    autoComplete="username"
                />
                <br />

                <label htmlFor="email" className={styles['login-form-label']}>Email</label>

                <div className={styles['input-container']}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles['icon-user']} />
                </div>

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={register.email}
                    onChange={onChangeHandler}
                    className={styles['login-form-input']}
                    placeholder="Email"
                    required= {true} 
                    autoComplete="email"
                />
                <br />

                <label htmlFor="password" className={styles['login-form-label']}>Password</label>

                <div className={styles['input-container']}>
                    <FontAwesomeIcon icon={faUnlockAlt} className={styles['icon-password']} />
                </div>

                <input type="password"
                    id="password"
                    name="password"
                    value={register.password}
                    onChange={onChangeHandler}
                    className={styles['login-form-input']}
                    placeholder="Password"
                    required= {true} 
                    autoComplete="password"
                />
                <br />

                <label htmlFor="confirm_password" className={styles['login-form-label']}>Confirm Password</label>

                <div className={styles['input-container']}>
                    <FontAwesomeIcon icon={faLock} className={styles['icon-password']} />
                </div>

                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={register.confirmPassword}
                    onChange={onChangeHandler}
                    className={styles['login-form-input']}
                    placeholder="Confirm Password"
                    required= {true}
                    autoComplete="confirm-password"
                />
                <br />

                <input type="submit" defaultValue="Registration" className={styles['login-form-button']} />
            </form>
        </section>
    );
}