import logo from '../assets/icons/pngwing.com-3.png';

const Home = () => {
    // console.log('Home Page');
    return (
        <>
            <img src={logo} alt="" style={{ width: 100, margin: '50px 0' }} />
            <h2>Welcome to the car rental app!</h2>
            <p style={{ padding: '50px' }}>
                This application is a car rental station that allows you to rent
                a car quickly and cheaply. We have reception points at the
                airports of many cities. We provide car rental services for
                short and long terms, and among the available vehicles you can
                find sedans, hatchbacks, as well as minivans and vans. All cars
                have mandatory liability insurance and comprehensive insurance.
            </p>
        </>
    );
};

export default Home;
