import AdvertsList from 'components/Adverts/AdvertsList/AdvertsList';
import ButtonLoadMore from 'components/Adverts/ButtonLoadMore/ButtonLoadMore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/advertsOperations';
import { selectAdverts } from 'redux/adverts/advertsSelectors';

const Catalog = () => {
    const dispatch = useDispatch();
    const { adverts } = useSelector(selectAdverts);

    const [page, setPage] = useState(1);

    // useEffect(() => {
    //     dispatch(fetchAdverts());
    // });
    useEffect(() => {
        if (page === 1) {
            dispatch(fetchAdverts());
        }
    }, [dispatch, page]);

    // console.log(adverts);
    return (
        <>
            <h2>catalog</h2>
            <AdvertsList adverts={adverts} />
            <ButtonLoadMore page={page} setPage={setPage} />
        </>
    );
};

export default Catalog;
