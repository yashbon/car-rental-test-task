import AdvertsList from 'components/Adverts/AdvertsList/AdvertsList';
import FavoritesList from 'components/Favorites/FavoritesList';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/adverts/advertsSelectors';

const Favorites = () => {
    // const favoriteAdverts = useSelector(selectFavorites);
    // const favoriteAdverts = useSelector(state => state.favorites.favorites);
    // console.log(favoriteAdverts);
    return (
        <>
            <h2>favorites</h2>
            <FavoritesList />
            {/* <AdvertsList favoriteAdvertsList={favoriteAdverts} /> */}
        </>
    );
};

export default Favorites;
