import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdverts } from 'redux/adverts/advertsOperations';

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
            <ul>
                {adverts.map(advert => (
                    <li key={advert.id}>{advert.make}</li>
                ))}
            </ul>
        </>
    );
};

export default AdvertsList;
