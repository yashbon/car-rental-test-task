import AdvertsList from 'components/Adverts/AdvertsList/AdvertsList';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/favorites/favoriteSelectors';

const Favorites = () => {
    const { favorites } = useSelector(selectFavorites);
    return (
        <>
            <h2>favorites</h2>
            <AdvertsList adverts={favorites} />
        </>
    );
};

export default Favorites;
