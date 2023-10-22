import { Navigation } from 'components/Navigation/Navigation';

const AppBar = () => {
    return (
        <header
            style={{
                width: '100%',
                display: 'flex',
                padding: 10,
                gap: 10,
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
        >
            <Navigation />
        </header>
    );
};

export { AppBar };
