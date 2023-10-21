import AdvertsList from 'components/Adverts/AdvertsList/AdvertsList';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/advertsOperations';

const Catalog = () => {
    const dispatch = useDispatch();
    dispatch(fetchAdverts());
    return (
        <>
            <h2>catalog</h2>
            <AdvertsList />
        </>
    );
};

export default Catalog;
