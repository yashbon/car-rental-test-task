import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';

const AppBar = () => {
    const { isLoggedIn } = useAuth();
    // console.log(isLoggedIn);
    // console.log(useAuth());
    return (
        <header
            style={{
                width: '100%',
                display: 'flex',
                padding: 10,
                gap: 10,
                // backgroundColor: 'white'
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
        >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </header>
    );
};

export { AppBar };
