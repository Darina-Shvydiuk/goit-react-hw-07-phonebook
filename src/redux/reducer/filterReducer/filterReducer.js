import { createReducer } from '@reduxjs/toolkit';
import { initialFilter } from '../filterReducer/initialStateFilter';
import { filterContacts } from '../../actions/filterAction';

export const filterReducer = createReducer(initialFilter, {
  [filterContacts]: (state, action) => (state = action.payload),
});
