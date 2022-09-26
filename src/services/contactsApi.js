import axios from 'axios';
const BASE_URL = 'https://6331aac5cff0e7bf70f3a54d.mockapi.io/contacts';

export const getContacts = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postContacts = async newContact => {
  try {
    const { data } = await axios.post({
      body: newContact,
      url: BASE_URL,
      method: 'POST',
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContacts = async id => {
  try {
    const { data } = await axios.delete({
      url: `${BASE_URL}/${id}`,
      method: 'DELETE',
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
