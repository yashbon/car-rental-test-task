import AdvertsList from 'components/Adverts/AdvertsList/AdvertsList';
import ButtonLoadMore from 'components/Adverts/ButtonLoadMore/ButtonLoadMore';
// import Filter from 'components/Filter/Filter';
import SearchBar from 'components/SearchBar/SearchBar';
import { getSearchedAdverts } from 'helpers/getFilteredCars';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/advertsOperations';
import { selectAdverts } from 'redux/adverts/advertsSelectors';
import { selectSearch } from 'redux/search/searchSelector';

const Catalog = () => {
    const dispatch = useDispatch();
    const { adverts } = useSelector(selectAdverts);
    const [page, setPage] = useState(1);

    const search = useSelector(selectSearch);
    const [searchAdverts, setSearchAdverts] = useState([]);
    const [searching, setSearching] = useState(false);

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
    useEffect(() => {
        if (searching) {
            (async () => {
                const { payload } = await dispatch(fetchAdverts());
                const visibleAdverts = await getSearchedAdverts(
                    payload,
                    search
                );
                setSearchAdverts(visibleAdverts);
            })();
        }
    }, [searching, search, dispatch]);

    return (
        <>
            <SearchBar
                setSearchAdverts={setSearchAdverts}
                setSearching={setSearching}
            />
            <h2>catalog</h2>
            <AdvertsList adverts={adverts} />
            <ButtonLoadMore page={page} setPage={setPage} />
        </>
    );
};

export default Catalog;
