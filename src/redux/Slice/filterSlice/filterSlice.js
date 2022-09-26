// import { createReducer } from '@reduxjs/toolkit';
import { initialFilter } from './initialStateFilter';
// import { filterContacts } from '../../actions/filterAction';
import { createSlice } from '@reduxjs/toolkit';

// export const filterReducer = createReducer(initialFilter, {
//   [filterContacts]: (state, action) => (state = action.payload),
// });

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    filterContacts: (state, action) => {
      return (state.data = action.payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
