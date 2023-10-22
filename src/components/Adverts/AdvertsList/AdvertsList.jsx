import AdvertCard from '../AdvertCard/AdvertCard';
import css from './AdvertsList.module.css';
import Modal from 'components/Modal/Modal';

import { useState } from 'react';

const AdvertsList = ({ adverts }) => {
    const [showModal, setShowModal] = useState(false);
    const [dataAdvert, setDataAdvert] = useState();

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
                    <Modal closeModal={togleModal} dataAdvert={dataAdvert} />
                </>
            )}
        </>
    );
};

export default AdvertsList;
