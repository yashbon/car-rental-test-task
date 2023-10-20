import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/advertsOperations';
import { selectFavorites } from 'redux/adverts/advertsSelectors';
import AdvertCard from 'components/Adverts/AdvertCard/AdvertCard';
// import css from './AdvertsList.module.css';
import Modal from 'components/Modal/Modal';

import { useEffect, useState } from 'react';
const FavoritesList = () => {
    // const adverts = useSelector(state => state.adverts.list);
    const favorites = useSelector(selectFavorites);
    console.log('hello from FavoritesList', favorites);

    const [showModal, setShowModal] = useState(false);
    const [dataAdvert, setDataAdvert] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);

    function togleModal(advert) {
        setShowModal(!showModal);
        setDataAdvert(advert); // add if(id)
    }

    return (
        <>
            <h2>favorite list</h2>
            <ul
            // className={css.FavoritesList}
            >
                {favorites.map(advert => (
                    <li
                        key={advert.id}
                        // className={css.ListItem}
                    >
                        <AdvertCard
                            key={favorites.id}
                            // dataAdvert={advert}
                            advert={advert}
                            togleModal={togleModal}
                            showModal={showModal}
                        />
                    </li>
                ))}
            </ul>
            {showModal && (
                <>
                    <h2>{dataAdvert.make}</h2>
                    <Modal dataAdvert={dataAdvert} />
                    <Modal closeModal={togleModal} dataAdvert={dataAdvert} />
                </>
            )}
        </>
    );
};

export default FavoritesList;
