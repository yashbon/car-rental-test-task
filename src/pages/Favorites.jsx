import AdvertsList from 'components/Adverts/AdvertsList/AdvertsList';
// import FavoritesList from 'components/Favorites/FavoritesList';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/adverts/advertsSelectors';

const Favorites = () => {
    const { favorites } = useSelector(selectFavorites);
    return (
        <>
            <h2>favorites</h2>
            {/* <FavoritesList favorits={favoriteAdverts} /> */}
            <AdvertsList adverts={favorites} />
        </>
    );
};

export default Favorites;
