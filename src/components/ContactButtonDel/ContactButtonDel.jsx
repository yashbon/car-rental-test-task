import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import css from './ContactButtonDel.module.css';
import { useEffect } from 'react';

const ContactButtonDel = ({ contactId }) => {
    const dispatch = useDispatch();
    const handleDeleteContact = () => {
        dispatch(deleteContact(contactId));
    };

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <button
                className={css.deleteContact_Button}
                type="button"
                onClick={handleDeleteContact}
            >
                delete
            </button>
        </>
    );
};

export default ContactButtonDel;
