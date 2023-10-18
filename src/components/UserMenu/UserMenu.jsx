import { Button } from '@mui/material';
import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
    console.log('User Menu');

    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogOut = () => {
        dispatch(logOut());
    };
    return (
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <p style={{ margin: 0 }}>
                Hello, <b>{user.name}</b>!
            </p>
            <Button
                variant="outlined"
                size="small"
                style={{ height: 'fit-contant' }}
                onClick={handleLogOut}
            >
                Logout
            </Button>
        </div>
    );
};
