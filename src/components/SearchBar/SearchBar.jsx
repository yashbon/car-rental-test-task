import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/advertsOperations';
import { setSearch } from 'redux/search/searchSlice';

const SearchBar = ({ setSearchAdverts, setSearching }) => {
    const [valueBrand, setValueBrand] = useState({
        value: '',
        label: 'Enter the text',
    });
    const [valuePrice, setValuePrice] = useState({
        value: '',
        label: 'To $',
    });

    const [price, setPrice] = useState('');
    //   const [isDisabled, setIsDisabled] = useState(true);
    const [mileageMin, setMileageMin] = useState('');
    const [mileageMax, setMileageMax] = useState('');
    const dispatch = useDispatch();

    //   useEffect(() => {
    //       if (
    //           valueBrand.label !== 'Enter the text' ||
    //           valuePrice.label !== 'To $' ||
    //           mileageMin !== '' ||
    //           mileageMax !== ''
    //       ) {
    //           setIsDisabled(false);
    //       } else {
    //           setIsDisabled(true);
    //       }
    //   }, [valueBrand, valuePrice, mileageMin, mileageMax]);

    const handleChangeBrand = selectedOption => {
        setValueBrand({
            label: selectedOption.value,
            value: selectedOption.value,
        });
    };
    const handleChangePrice = selectedOption => {
        const formattedValue = `To ${selectedOption.value}$`;
        setValuePrice({ label: formattedValue, value: formattedValue });
        setPrice(selectedOption.value);
    };
    const handleChangeMileage = event => {
        const newValue = event.target.value;
        switch (event.target.name) {
            case 'mileageMin':
                setMileageMin(newValue);
                break;
            case 'mileageMax':
                setMileageMax(newValue);
                break;
            default:
                break;
        }
    };
    const handleSearchClick = async event => {
        console.log('click search');
        event.preventDefault();
        const newSearchQuery = {
            brand: valueBrand.value.toLowerCase().trim(),
            price: price || '500',
            mileageMin: mileageMin.split(',').join('') || 0,
            mileageMax: mileageMax.split(',').join('') || 99999,
        };
        dispatch(setSearch(newSearchQuery));
        setSearching(true);
    };
    // const handleClearClick = event => {
    //     event.preventDefault();
    //     dispatch(fetchAdverts(1));
    //     setSearching(false);
    //     setValuePrice({
    //         value: '',
    //         label: 'To $',
    //     });
    //     setValueBrand({
    //         value: '',
    //         label: 'Enter the text',
    //     });
    //     setMileageMin('');
    //     setMileageMax('');
    //     // setShowButton(true);
    // };

    return (
        <div>
            <h2>choose advert</h2>
            <form action="">
                <div style={{ display: 'flex' }}>
                    <div>
                        <label htmlFor="brand">Car brand</label>
                        <select
                            name="brand"
                            id=""
                            value={valueBrand}
                            onChange={handleChangeBrand}
                        >
                            <option value={valueBrand}>Значение 1</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="brand">Price/1 hour</label>
                        <select
                            name="price"
                            id=""
                            value={valuePrice}
                            onChange={handleChangePrice}
                        ></select>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <label htmlFor="">From</label>
                            <input
                                name="mileageMin"
                                id="fromMileage"
                                type="number"
                                value={mileageMin}
                                onChange={handleChangeMileage}
                            />
                        </div>
                        <div>
                            <label htmlFor="">To</label>
                            <input
                                name="mileageMax"
                                id="fromMileage"
                                type="number"
                                value={mileageMax}
                                onChange={handleChangeMileage}
                            />
                        </div>
                    </div>
                    <button onClick={handleSearchClick}>Search</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
