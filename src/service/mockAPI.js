import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY ?? `63fea394370fe830d9d67c45`;

export const fetchContacts = async () => {
  try {
    const { data } = await axios.get(`https://${apiKey}.mockapi.io/contacts`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeContactById = async id => {
  try {
    const { data } = await axios.delete(
      `https://${apiKey}.mockapi.io/contacts/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postContact = async contact => {
  try {
    const { data } = await axios.post(
      `https://${apiKey}.mockapi.io/contacts`,
      contact
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
