import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/advertsOperations';
import { chooseAdverts } from 'redux/adverts/advertsSelectors';
import AdvertCard from '../AdvertCard/AdvertCard';
import css from './AdvertsList.module.css';
import Modal from 'components/Modal/Modal';

import { useEffect, useState } from 'react';

const AdvertsList = () => {
    // const adverts = useSelector(state => state.adverts.list);
    const adverts = useSelector(chooseAdverts);
    // const filter = useSelector(state => state.filter.filter);

    // const filteredAdverts = adverts.filter(contact =>
    //     contact.name.toLowerCase().includes(filter.toLowerCase())
    // );
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
            <ul className={css.advertsList}>
                {adverts.map(advert => (
                    <li key={advert.id} className={css.ListItem}>
                        <AdvertCard
                            // key={advert.id}
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
                    {/* <Modal dataAdvert={dataAdvert} /> */}
                    <Modal closeModal={togleModal} dataAdvert={dataAdvert} />
                </>
            )}
        </>
    );
};

export default AdvertsList;