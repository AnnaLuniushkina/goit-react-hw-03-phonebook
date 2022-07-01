import React from "react";
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

export default ContactList;