import AdvertsList from 'components/Adverts/AdvertsList/AdvertsList';
import ButtonLoadMore from 'components/Adverts/ButtonLoadMore/ButtonLoadMore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/advertsOperations';
import { selectAdverts } from 'redux/adverts/advertsSelectors';

const Catalog = () => {
    const dispatch = useDispatch();
    const { adverts } = useSelector(selectAdverts);
    // const[flag, setFlag]=useState(false)
    const [page, setPage] = useState(1);
    // console.log('render page', page);
    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);
    // fetchAdverts();

    // useEffect(() => {
    //     // if (page === 1) {
    //     //     dispatch(fetchAdverts());
    //     // }
    //     dispatch(fetchAdverts());
    //     // dispatch(fetchAdverts());
    //     // fetchAdverts(page);
    // }, [dispatch, page]);

    return (
        <>
            <h2>catalog</h2>
            <AdvertsList adverts={adverts} />
            <ButtonLoadMore
                page={page}
                setPage={setPage}
                // flag={flag}
            />
        </>
    );
};

export default Catalog;
