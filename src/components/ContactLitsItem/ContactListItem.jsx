import ContactButtonDel from 'components/ContactButtonDel/ContactButtonDel';

const ConactListItem = ({ contact }) => {
    return (
        <>
            <p style={{ margin: 0 }}>
                <span>{contact.name}</span> <br />
                <span>{contact.number}</span>
            </p>
            <ContactButtonDel contactId={contact.id} />
        </>
    );
};

export default ConactListItem;
