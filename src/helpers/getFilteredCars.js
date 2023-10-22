const getSearchedAdverts = (payload, search) => {
    const pars = str => parseInt(str.replace(/\D/g, ''), 10);
    const searchedAdverts = payload.search(
        ({ make, rentalPrice, mileage }) =>
            make.toLowerCase() === search.make &&
            pars(rentalPrice) < search.price &&
            mileage > search.mileageMin &&
            mileage < search.mileageMax
    );
    //   dispatch(addFilter(searchedAdverts));
    return searchedAdverts;
};
export { getSearchedAdverts };
