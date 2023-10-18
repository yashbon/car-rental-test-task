// import { useAuth } from 'components/hooks/useAuth';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

export const Navigation = () => {
    // const { isLoggedIn } = useAuth();

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

            {/* {isLoggedIn && (
                <NavLink to="/contacts" className={css.NavLink}>
                    Contacts
                </NavLink>
            )} */}
        </nav>
    );
};
