import { createAction } from '@reduxjs/toolkit';

export const createContact = createAction('contacts/createContact');

export const deleteContact = createAction('contacts/deleteContact');
