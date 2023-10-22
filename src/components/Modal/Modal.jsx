import {
    useEffect,
    // useState
} from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ButtonClose } from 'components/ButtonClose/ButtonClose';

const StyledLink = styled(NavLink)`
    color: #ffffff;
    padding: 12px 50px;
    border-radius: 12px;
    background-color: #3470ff;
    display: block;
    width: 168px;
    height: 44px;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.42857;
    text-align: center;

    &.active {
        color: orange;
    }
`;

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, dataAdvert }) => {
    // console.log(dataAdvert.advert);
    const {
        id,
        year,
        make,
        model,
        type,
        img,
        description,
        fuelConsumption,
        engineSize,
        accessories,
        functionalities,
        rentalPrice,
        address,
        rentalConditions,
        mileage,
    } = dataAdvert.advert;
    useEffect(() => {
        function hendleKeyDown(event) {
            if (event.code === 'Escape') {
                closeModal();
            }
        }

        window.addEventListener('keydown', hendleKeyDown);
        return () => {
            window.removeEventListener('keydown', hendleKeyDown);
        };
    }, [closeModal]);

    function handleBackdropClick(event) {
        if (event.target === event.currentTarget) {
            // this.props.closeModal();
            closeModal();
        }
    }

    const companyAddress = address.split(',');
    const country = companyAddress[2];
    const city = companyAddress[1];
    const rentalConditionsArray = rentalConditions.split('\n');
    const minimumAge = rentalConditionsArray[0].split(':');
    const price = rentalPrice.split('$');

    return createPortal(
        <div className={css.Overlay} onClick={handleBackdropClick}>
            <div className={css.Modal}>
                {/* <button onClick={closeModal}>close</button> */}
                <ButtonClose onClick={closeModal} />

                <div className={css.advertWrap}>
                    <div className={css.imageWrap}>
                        <img
                            src={img}
                            alt={model}
                            width="461"
                            height="248"
                            className={css.imageCar}
                        />
                    </div>
                    <div className={css.titleWrapper}>
                        <p>
                            {make}{' '}
                            <span className={css.textAccent}>{model}</span>,{' '}
                            {year}
                        </p>
                    </div>
                    <p className={css.info}>
                        {city} <span className={css.textSeparator}> | </span>
                        {country} <span className={css.textSeparator}> | </span>
                        id: {id} <span className={css.textSeparator}> | </span>{' '}
                        Year: {year}
                        <span className={css.textSeparator}> | </span>Type:{' '}
                        {type}
                    </p>
                    <p className={css.info}>
                        Fuel Consumption: {fuelConsumption}{' '}
                        <span className={css.textSeparator}> | </span>Engine
                        Size: {engineSize}
                    </p>
                    <p className={css.description}>{description}</p>
                    <p className={css.title}>
                        Accessories and functionalities:
                    </p>
                    <p className={css.info}>
                        {accessories[0]}
                        <span className={css.textSeparator}> | </span>
                        {accessories[1]}
                        <span className={css.textSeparator}> | </span>
                        {accessories[2]}
                    </p>
                    <p className={css.info}>
                        {functionalities[0]}
                        <span className={css.textSeparator}> | </span>
                        {functionalities[1]}
                        <span className={css.textSeparator}> | </span>
                        {functionalities[2]}
                    </p>
                    <p className={css.title}>Rental Conditions:</p>
                    <div className={css.conditionsWrapper}>
                        <p className={css.conditionBg}>
                            Minimum age :
                            <span className={css.conditionsAccent}>
                                {minimumAge[1]}
                            </span>
                        </p>
                        <p className={css.conditionBg}>
                            {rentalConditionsArray[1]}
                        </p>
                    </div>
                    <div className={css.conditionsWrapper}>
                        <p className={css.conditionBg}>
                            {rentalConditionsArray[2]}
                        </p>
                        <p className={css.conditionBg}>
                            Mileage:{' '}
                            <span className={css.conditionsAccent}>
                                {mileage.toLocaleString('en-IN')}
                            </span>
                        </p>
                        <p className={css.conditionBg}>
                            Price:{' '}
                            <span className={css.conditionsAccent}>
                                {price[1]}$
                            </span>
                        </p>
                    </div>

                    <StyledLink to="tel:+380730000000">Rental car</StyledLink>
                </div>
                {/* <img src={img} alt={make} className={css.Image} />
                <h2>{make}</h2> */}
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;
