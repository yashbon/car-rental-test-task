// import Modal from 'components/Modal/Modal';
// import { selectFavorites } from 'redux/adverts/advertsSelectors';
import { selectFavorites } from 'redux/favorites/favoriteSelectors';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
import ButtonLearn from '../ButtonLearn/ButtonLearn';
import css from './AdvertCard.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, delFavorite } from 'redux/favorites/favoritesSlice';

const AdvertCard = ({ togleModal, advert, closeModal, showModal }) => {
    const {
        id,
        year,
        make,
        model,
        type,
        img,
        functionalities,
        rentalPrice,
        rentalCompany,
        address,
    } = advert;

    const companyAddress = address.split(',');
    const country = companyAddress[2];
    const city = companyAddress[1];

    const [isFavorite, setIsFavorite] = useState(false);
    const { favorites } = useSelector(selectFavorites);
    const dispatch = useDispatch();

    useEffect(() => {
        if (favorites.some(favoriteAdvert => favoriteAdvert.id === advert.id)) {
            setIsFavorite(true);
        }
    }, [favorites, advert]);

    const handleFavorite = event => {
        event.stopPropagation();
        setIsFavorite(!isFavorite);

        if (favorites.some(favoriteAdvert => favoriteAdvert.id === advert.id)) {
            dispatch(delFavorite(advert));
        } else {
            dispatch(addFavorite(advert));
        }
    };

    return (
        <div className={css.advertsItem}>
            <div>
                <div className={css.imageWrap}>
                    <ButtonFavorite
                        isFavorite={isFavorite}
                        onClick={handleFavorite}
                    />
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
                <div className={css.titleWrapper}>
                    <p>
                        {make} <span className={css.textAccent}>{model}</span>,{' '}
                        {year}
                    </p>
                    <p>{rentalPrice}</p>
                </div>
                <p className={css.info}>
                    {city} <span className={css.textSeparator}> | </span>
                    {country} <span className={css.textSeparator}> | </span>{' '}
                    {rentalCompany}
                </p>
                <p className={css.info}>
                    {type} <span className={css.textSeparator}> | </span>{' '}
                    {model} <span className={css.textSeparator}> | </span> {id}
                    <span className={css.textSeparator}> | </span>{' '}
                    {functionalities[0]}
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
