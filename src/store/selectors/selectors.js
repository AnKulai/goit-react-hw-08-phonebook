import { createSelector } from 'reselect';

const select = {
  contacts: state => state.contacts.items,
  isLoading: state => state.contacts.isLoading,
  error: state => state.contacts.error,
  filter: state => state.filter.filter,
};

const reselect = {
  contactsByFilter: createSelector(
    [select.contacts, select.filter], // Arguments
    (contacts, filter) => {
      if (filter !== '') {
        return contacts.filter(
          contact => contact.name.toLowerCase().trim().includes(filter) // Return filter array
        );
      }
      return contacts; // Return defaul array
    }
  ),
};

export { select, reselect };
