import s from '../ContactList/ContactList.module.css';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/actions/contactsAction';
import React from 'react';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filterContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(recordName =>
      recordName.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  return (
    <ul className={s.list}>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <span className={s.name}>{name}: </span>
            <span className={s.tel}>{number} </span>
            <button
              className={s.btn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
