import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdverts } from 'redux/adverts/advertsOperations';
import AdvertsItem from '../AdvertsItem/AdvertsItem';
import css from './AdvertsList.module.css';

const AdvertsList = () => {
    const adverts = useSelector(state => state.adverts.list);
    // const filter = useSelector(state => state.filter.filter);

    // const filteredAdverts = adverts.filter(contact =>
    //     contact.name.toLowerCase().includes(filter.toLowerCase())
    // );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);

    return (
        <>
            <ul className={css.advertsList}>
                {adverts.map(advert => (
                    // <li key={advert.id}>
                    <AdvertsItem key={advert.id} advert={advert} />
                    // </li>
                ))}
            </ul>
        </>
    );
};

export default AdvertsList;
