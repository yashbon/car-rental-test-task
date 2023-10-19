// import { useState } from 'react';
// import Modal from 'components/Modal/Modal';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
import ButtonLearn from '../ButtonLearn/ButtonLearn';
import css from './AdvertCard.module.css';
// import { useState } from 'react';

const AdvertCard = ({ togleModal, advert, closeModal, showModal }) => {
    const {
        // id,
        // year,
        make,
        // model,
        img,
        rentalPrice,
        address,
        rentalCompany,
        // accessories,
        // functionalities,
    } = advert;

    // const [showModal, setShowModal] = useState(false);

    // function togleModal(largeImageURL) {
    //     // console.log('click togleModal', showModal);
    //     // console.log('click togleModal', adverts);

    //     // this.setState(state => ({
    //     // showModal: !this.state.showModal,
    //     setShowModal(!showModal);
    //     // // largeImageURL: largeImageURL,
    //     // setLargeImageURL(largeImageURL);
    //     // // }));
    // }

    return (
        <div className={css.advertsItem}>
            <div>
                <div
                    style={{
                        width: '274px',
                        height: '268px',
                        overflow: 'hidden',
                    }}
                >
                    <ButtonFavorite />
                    <img
                        src={img}
                        alt={make}
                        style={{
                            // width: '274px',
                            // height: '268px',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            // flexShrink: 0,
                        }}
                    />
                </div>
                <title>
                    <span>{make}</span>
                    <span>{rentalPrice}</span>
                </title>
                <p>
                    <span>{address}</span>
                    <span>{rentalCompany}</span>
                </p>
            </div>

            <ButtonLearn
                onClick={() => togleModal({ advert })}
                // onClick={() => onClick(largeImageURL)}
                // onClick={() => closeModal(make)}
                // dataAdvert={advert}
            />

            {/* {showModal && (
                <>
                    <h1>hello</h1>
                    <Modal closeModal={closeModal} advert={advert} />
                </>
            )} */}

            {/* <p style={{ margin: 0 }}>
                <span>{contact.name}</span> <br />
                <span>{contact.number}</span>
            </p>
            <ContactButtonDel contactId={contact.id} /> */}
        </div>
    );
};

export default AdvertCard;
