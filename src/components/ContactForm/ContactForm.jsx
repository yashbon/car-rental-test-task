import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.css';

const ContactForm = () => {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const { name, phone } = event.target.elements;

        if (
            contacts.list.find(
                contact =>
                    contact.name.toLowerCase() === name.value.toLowerCase()
            )
        ) {
            alert(`${name.value} is already in contacts`);
        } else {
            const newContact = {
                name: name.value,
                number: phone.value,
            };
            dispatch(addContact(newContact));
        }
        event.target.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>
                Name
                <br />
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <br />
            <label className={css.label}>
                Phone
                <br />
                <input
                    className={css.input}
                    type="tel"
                    name="phone"
                    pattern="^[0-9]+$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <br />
            <button className={css.form_button} type="submit">
                Add contact
            </button>
        </form>
    );
};

export default ContactForm;
