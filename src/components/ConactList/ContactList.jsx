import ConactListItem from 'components/ContactLitsItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.list);
    const filter = useSelector(state => state.filter.filter);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            {filteredContacts.length > 0 && (
                <ul className={css.contactList}>
                    {filteredContacts.map(contact => (
                        <li
                            className={css.contactListItem}
                            key={contact.id}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <ConactListItem contact={contact} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default ContactList;
