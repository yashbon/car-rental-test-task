import {
    useEffect,
    // useState
} from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, dataAdvert }) => {
    // console.log(dataAdvert.advert);
    const { make, img } = dataAdvert.advert;
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

    return createPortal(
        <div className={css.Overlay} onClick={handleBackdropClick}>
            <div className={css.Modal}>
                <button onClick={closeModal}>close</button>
                <img src={img} alt={make} className={css.Image} />
                <h2>{make}</h2>
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;
