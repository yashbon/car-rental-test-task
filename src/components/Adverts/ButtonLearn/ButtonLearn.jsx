import css from './ButtonLearn.module.css';

const ButtonLearn = ({ onClick, advert }) => {
    return (
        <button className={css.buttonLearn} onClick={onClick}>
            Learn more
        </button>
    );
};

export default ButtonLearn;
