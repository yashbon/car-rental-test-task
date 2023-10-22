import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav style={{ display: 'flex', gap: 10 }}>
            <NavLink className={css.NavLink} to="/">
                Home
            </NavLink>
            <NavLink className={css.NavLink} to="/catalog">
                Catalog
            </NavLink>
            <NavLink className={css.NavLink} to="/favorites">
                Favorites
            </NavLink>
        </nav>
    );
};
