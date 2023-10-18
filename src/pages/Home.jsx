import icon from '../icons/pngwing.png';

const Home = () => {
    console.log('Home Page');
    return (
        <>
            <img src={icon} alt="" style={{ width: 100, margin: '50px 0' }} />
            <h2>Welcome to phonebook app!</h2>
        </>
    );
};

export default Home;
