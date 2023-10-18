import ContactList from 'components/ConactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
    return (
        <>
            <h2>Add a new contact</h2>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </>
    );
};

export default Contacts;
