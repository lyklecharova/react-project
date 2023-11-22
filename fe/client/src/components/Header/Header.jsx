import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import styles from './Header.module.css'
import { AuthContext } from '../../contexts/authContext';

export const Header = () => {
    const { isAuthenticated, username } = useContext(AuthContext);
    return (
        <header className={styles['header']}>
            <nav className={styles['nav']}>
                <Link to="/">LK</Link>
                <ul role="list" className={styles['list']}>
                    <li className={styles['element']}>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "#FF8C00" : "#F5DEB3"
                        })} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className={styles['element']}>
                        <NavLink className={styles['element']} style={({ isActive }) => ({
                            color: isActive ? "#FF8C00" : "#F5DEB3"
                        })} to="/dashboard">
                            Dashboard
                        </NavLink>
                    </li>
                    {isAuthenticated && (
                        <>
                            <li className={styles['element']}>
                                <NavLink className={styles['element']} style={({ isActive }) => ({
                                    color: isActive ? "#FF8C00" : "#F5DEB3"
                                })} to="/recipes/create">
                                    Create Recipes
                                </NavLink>
                            </li>
                            <li className={styles['element']}>
                                <NavLink className={styles['element']} style={({ isActive }) => ({
                                    color: isActive ? "#FF8C00" : "#F5DEB3"
                                })} to="/profile">
                                    Profile
                                </NavLink>
                            </li>
                            <li className={styles['element']}>
                                <NavLink className={styles['element']} style={({ isActive }) => ({
                                    color: isActive ? "#FF8C00" : "#F5DEB3"
                                })} to="/logout">
                                    Logout
                                </NavLink>
                            </li>
                            <span className={styles['user']}>{`Wellcome, ${username}`}</span>
                        </>
                    )}

                    {!isAuthenticated && (
                        <>
                            <li className={styles['element']}>
                                <NavLink className={styles['element']} style={({ isActive }) => ({
                                    color: isActive ? "#FF8C00" : "#F5DEB3"
                                })} to="/login">
                                    Login
                                </NavLink>
                            </li>
                            <li className={styles['element']}>
                                <NavLink className={styles['element']} style={({ isActive }) => ({
                                    color: isActive ? "#FF8C00" : "#F5DEB3"
                                })} to="/register">
                                    Register
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}