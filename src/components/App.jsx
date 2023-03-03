import ContactList from './ContactList/ContactList';
import Filterblock from './Filterblock/Filterblock';
import Phonebook from './Phonebook/Phonebook';
import Section from './Custom/Section/Section';
import Header from './Custom/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Section title="PhoneBook">
        <Phonebook />
        <Filterblock title="Filter by Name" />
      </Section>
      <Section title="Contacts">
        <ContactList />
      </Section>
    </>
  );
};

export default App;
