import { useDispatch } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/advertsOperations';

const ButtonLoadMore = ({ page, setPage }) => {
    // console.log('click load more');
    const dispatch = useDispatch();

    const handleLoadMore = () => {
        console.log('click loadmore on page', page);
        // const { payload } =
        dispatch(fetchAdverts(page + 1));
        setPage(prevPage => prevPage + 1);
    };
    return (
        <>
            <button onClick={handleLoadMore}>LoadMore</button>
        </>
    );
};

export default ButtonLoadMore;
