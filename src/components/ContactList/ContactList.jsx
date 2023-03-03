import Contact from 'components/Contact/Contact';
import css from './ContactList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'store/contactsReducer/contactsOperations';
import { reselect, select } from 'store/selectors/selectors';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const contacts = useSelector(reselect.contactsByFilter);
  const isLoading = useSelector(select.isLoading);
  const dispatch = useDispatch();

  // Default loading contacts from mockAPI

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length ? (
        <ol className={css.contactList}>
          {isLoading && <Loader />}
          {contacts.map((contact, index) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
              index={++index}
            />
          ))}
        </ol>
      ) : (
        <h1>Sorry... No contacts found matching search criteria...</h1>
      )}
    </>
  );
};

export default ContactList;
