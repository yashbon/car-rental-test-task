import AdvertsList from 'components/Adverts/AdvertsList/AdvertsList';
import ButtonLoadMore from 'components/Adverts/ButtonLoadMore/ButtonLoadMore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertsFirstPage } from 'redux/adverts/advertsOperations';
import { selectAdverts } from 'redux/adverts/advertsSelectors';

const Catalog = () => {
    const dispatch = useDispatch();
    const { adverts } = useSelector(selectAdverts);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (page === 1) {
            dispatch(fetchAdvertsFirstPage());
        }
    }, [dispatch, page]);

    return (
        <>
            <AdvertsList adverts={adverts} />
            {adverts.length / 8 - page >= 0 && (
                <ButtonLoadMore page={page} setPage={setPage} />
            )}
        </>
    );
};

export default Catalog;
