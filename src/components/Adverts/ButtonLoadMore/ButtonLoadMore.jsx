import { useDispatch } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/advertsOperations';

const ButtonLoadMore = ({ page, setPage }) => {
    const dispatch = useDispatch();
    const handleLoadMore = () => {
        console.log('click loadmore');
        // const { payload } = dispatch(fetchAdverts(page + 1));
        setPage(prevPage => prevPage + 1);
    };
    return (
        <>
            <button onClick={handleLoadMore}>LoadMore</button>
        </>
    );
};

export default ButtonLoadMore;
