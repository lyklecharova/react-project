import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { useFormHooks } from '../../hooks/useFormHook';
import styles from './Login.module.css';


const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {

    const { loginSubmitHandler, getErrorMsg, clearErrorMsg } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useFormHooks(loginSubmitHandler, {
        // values -> стойностите на формата
        // onChange, onSubmit -> идват от useFormHooks

        // email: '',
        // password: '',

        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: ''
    });

    const inputChangeHandler = (e) => {
        clearErrorMsg();
        onChange(e);
    };

    return (
        <section className={styles['login-register-section']}>
            <form onSubmit={onSubmit} action="submit.php" method="post" className={styles['login-register-form']} >
                <label htmlFor="email" className={styles['login-form-label']}>Email</label>

                <div className={styles['input-container']}>
                    <FontAwesomeIcon icon={faUser} className={styles['user-icon']} />
                </div>

                <input
                    type="text"
                    id="email"
                    // name="email"
                    name={LoginFormKeys.Email}
                    onChange={inputChangeHandler}
                    // value={values.email}
                    value={values[LoginFormKeys.Email]}
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
                    // name="password"
                    name={LoginFormKeys.Password}
                    onChange={inputChangeHandler}
                    // value={values.password}
                    value={values[LoginFormKeys.Password]}
                    className={styles['login-form-input']}
                    placeholder="Password..."
                    required autoComplete="password"
                />
                <br />
                {getErrorMsg() && <p className={styles['login-error-msg']}>{getErrorMsg()}</p>}

                <input type="submit" defaultValue="Log in" className={styles['login-form-button']} />
            </form>
        </section>
    );
}