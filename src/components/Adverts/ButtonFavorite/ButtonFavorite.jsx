import css from './ButtonFavorite.module.css';

const ButtonFavorite = ({ onClick }) => {
    return (
        <p className={css.buttonFavorite} onClick={onClick}>
            like
        </p>
    );
};

export default ButtonFavorite;
