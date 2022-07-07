import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contactsFilter, onDelete}) => {
    return (
        <ul>
            {contactsFilter.map(({ id, name, number }) => {
                return (
            <ContactListItem
                contact={{ id, name, number }}
                key={id}
                onDelete={onDelete}
            />
            );
            })}
        </ul>
    );
};

ContactList.propTypes = {
    contactsFilter: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDelete: PropTypes.func.isRequired,
};

export default ContactList;