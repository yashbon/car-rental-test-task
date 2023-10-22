import css from './ButtonFavorite.module.css';
import { ReactComponent as IconHeartFavorite } from '../../../assets/icons/IconHeartFavorite.svg';
import { ReactComponent as IconHeartNotFavofite } from '../../../assets/icons/iconNonFavorite.svg';

const ButtonFavorite = ({ onClick, isFavorite }) => {
    return (
        <div className={css.iconWrap} onClick={onClick}>
            {isFavorite ? (
                <IconHeartFavorite width={18} height={18} />
            ) : (
                <IconHeartNotFavofite width={18} height={18} />
            )}
        </div>
    );
};

export default ButtonFavorite;
