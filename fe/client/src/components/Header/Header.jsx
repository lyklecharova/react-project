import { Dashboard } from '../Dashboard/Dashboard';
import { Login } from '../Login/Login';
import { ProfileDetails } from '../ProfileDetails/ProfileDetails';
import { Register } from '../Register/Register';
import styles from './Header.module.css'
import { Link, Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className={styles['header']}>
            <nav className={styles['nav']}>
                
                <Link to="/">LK</Link>
                <ul role="list" className={styles['list']}>
                    <li className={styles['element']}>
                    <NavLink style={({ isActive }) => ({
                        color: isActive ? "#FF8C00" : "#F5DEB3",
                    })} to="/">
                        Home
                    </NavLink>
                    </li>
                    <li className={styles['element']}>
                    <NavLink className={styles['element']} style={({ isActive }) => ({
                        color: isActive ? "#FF8C00" : "#F5DEB3",
                    })} to="/dashboard">
                        Dashboard
                    </NavLink>
                    </li>
                    <li className={styles['element']}>
                    <NavLink className={styles['element']} style={({ isActive }) => ({
                        color: isActive ? "#FF8C00" : "#F5DEB3",
                    })} to="/profile">
                        Profile
                    </NavLink>
                    </li>
                    <li className={styles['element']}>
                    <NavLink className={styles['element']} style={({ isActive }) => ({
                        color: isActive ? "#FF8C00" : "#F5DEB3",
                    })} to="/login">
                        Login
                    </NavLink>
                    </li>
                    <li className={styles['element']}>
                    <NavLink className={styles['element']} style={({ isActive }) => ({
                        color: isActive ? "#FF8C00" : "#F5DEB3",
                    })} to="/register">
                        Register
                    </NavLink>
                    </li>
                    <li className={styles['element']}>
                    <NavLink className={styles['element']} style={({ isActive }) => ({
                        color: isActive ? "#FF8C00" : "#F5DEB3",
                    })} to="/logout">
                        Logout
                    </NavLink>
                    </li>



                </ul>
            </nav>

            {/* <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/profile' element={<ProfileDetails />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes> */}

        </header>
    );
}