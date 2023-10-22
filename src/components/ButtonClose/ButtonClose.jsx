import css from './ButtonClose.module.css';
import iconClose from '../../assets/icons/iconClose.svg';

export const ButtonClose = ({ onClick }) => {
    return (
        <>
            <button type="button" className={css.buttonClose} onClick={onClick}>
                <svg className={css.buttonCloseIcon}>
                    <use href={`${iconClose}#icon-x-close`}></use>
                </svg>
            </button>
        </>
    );
};
