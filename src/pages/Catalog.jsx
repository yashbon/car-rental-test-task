import AdvertsList from 'components/Adverts/AdvertsList/AdvertsList';
import ButtonLoadMore from 'components/Adverts/ButtonLoadMore/ButtonLoadMore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/advertsOperations';
import { selectAdverts } from 'redux/adverts/advertsSelectors';

const Catalog = () => {
    const dispatch = useDispatch();
    const { adverts } = useSelector(selectAdverts);

    // useEffect(() => {
    //     dispatch(fetchAdverts());
    // });
    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);

    // console.log(adverts);
    return (
        <>
            <h2>catalog</h2>
            <AdvertsList adverts={adverts} />
            <ButtonLoadMore />
        </>
    );
};

export default Catalog;
