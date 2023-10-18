import {
    useDispatch,
    // useSelector
} from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layuot/Leyout';
import { lazy, useEffect } from 'react';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivatRoute';
import { useAuth } from './hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export const App = () => {
    // const { isLoading, error } = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <b>Refreshing user...</b>
    ) : (
        <div
            style={{
                // height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // fontSize: 40,
                color: '#010101',
                // backgroundColor: 'lightsteelblue',
            }}
        >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/register"
                        element={
                            <PublicRoute
                                redirectTo="/contacts"
                                component={<Register />}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <PublicRoute
                                redirectTo="/contacts"
                                component={<Login />}
                            />
                        }
                    />
                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute
                                redirectTo="/login"
                                component={<Contacts />}
                            />
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
};
