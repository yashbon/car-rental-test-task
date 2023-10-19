import ButtonLearn from '../ButtonLearn/ButtonLearn';
import css from './AdvertsItem.module.css';
const AdvertsItem = ({ advert }) => {
    const {
        // id,
        // year,
        make,
        // model,
        img,
        rentalPrice,
        address,
        rentalCompany,
        // accessories,
        // functionalities,
    } = advert;
    return (
        <li className={css.advertsItem}>
            <div>
                <button />
                <img src={img} alt={make} style={{ width: '274px' }} />
                <title>
                    <span>{make}</span>
                    <span>{rentalPrice}</span>
                </title>
                <p>
                    <span>{address}</span>
                    <span>{rentalCompany}</span>
                </p>
            </div>

            <ButtonLearn />
            {/* <p style={{ margin: 0 }}>
                <span>{contact.name}</span> <br />
                <span>{contact.number}</span>
            </p>
            <ContactButtonDel contactId={contact.id} /> */}
        </li>
    );
};

export default AdvertsItem;
