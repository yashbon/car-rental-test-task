import css from './ButtonFavorite.module.css';

const ButtonFavorite = ({ onClick }) => {
    return (
        <button className={css.buttonFavorite} onClick={onClick}>
            like
        </button>
    );
};

export default ButtonFavorite;
