import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

import { AuthContext } from '../../contexts/authContext';
import { useFormHooks } from '../../hooks/useFormHook';
import styles from './Register.module.css';

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirmPassword'
};

export const Register = () => {
    const { registerSubmitHandler, getErrorMsg, clearErrorMsg } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useFormHooks(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    const inputChangeHandler = (e) => {
        clearErrorMsg();
        onChange(e);
    };

    return (
        <section className={styles['login-register-section']}>
            <form onSubmit={onSubmit} action="submit.php" method="post" className={styles['login-register-form']}>

                <label htmlFor="email" className={styles['login-form-label']}>Email</label>

                <div className={styles['input-container']}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles['email-icon']} />
                </div>

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={values[RegisterFormKeys.Email]}
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
                    value={values[RegisterFormKeys.Password]}
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
                    value={values[RegisterFormKeys.ConfirmPassword]}
                    onChange={inputChangeHandler}
                    className={styles['login-form-input']}
                    placeholder="Confirm Password"
                    required={true}
                    autoComplete="confirm-password"
                />
                <br />

                {getErrorMsg() && <p className={styles['login-error-msg']}>{getErrorMsg()}</p>}

                <input type="submit" defaultValue="Registration" className={styles['login-form-button']} />
            </form>
        </section>
    );
}