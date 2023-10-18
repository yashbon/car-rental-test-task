import { NavLink } from 'react-router-dom';
import css from './AuthMenu.module.css';

export const AuthMenu = () => {
    return (
        <div className={css.AuthMenu}>
            <NavLink className={css.NavLink} to="/register">
                Register
            </NavLink>
            <NavLink className={css.NavLink} to="/login">
                Log In
            </NavLink>
        </div>
    );
};
