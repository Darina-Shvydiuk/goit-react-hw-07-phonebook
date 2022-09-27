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
    console.log(newContact);
    const { data } = await axios.post(BASE_URL, newContact);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContacts = async id => {
  console.log(id);
  try {
    const { data } = await axios.delete(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
