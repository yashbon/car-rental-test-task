// import // useDispatch,
// useSelector
// 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layuot/Leyout';
import {
    lazy,
    // useEffect
} from 'react';
// import { PublicRoute } from './PublicRoute';
// import { PrivateRoute } from './PrivatRoute';
// import { useAuth } from './hooks/useAuth';
// import { refreshUser } from 'redux/auth/authOperations';

const Home = lazy(() => import('pages/Home'));
const Catalog = lazy(() => import('pages/Catalog'));
const Favorites = lazy(() => import('pages/Favorites'));

// const Contacts = lazy(() => import('pages/Contacts'));
// const Register = lazy(() => import('pages/Register'));
// const Login = lazy(() => import('pages/Login'));

export const App = () => {
    // const { isLoading, error } = useSelector(state => state.adverts);
    // const dispatch = useDispatch();
    // const { isRefreshing } = useAuth();

    // useEffect(() => {
    //     dispatch(refreshUser());
    // }, [dispatch]);

    return (
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
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Route>
            </Routes>
        </div>
    );
};
