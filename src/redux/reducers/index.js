import { createActions, handleActions } from 'redux-actions';

export const { getJoke, getCat } = createActions({
  GET_JOKE: joke => joke,
  GET_CAT: categories => categories
});

const defaultState = {
  joke: 'Select one of the categories below',
  categories: [],
};

export default handleActions(
  {
    [getJoke]: (state, { payload }) => {
      return { ...state, joke: payload.data.value || 'Select one of the categories below' };
    },
    [getCat]: (state, { payload }) => {
      return { ...state, categories: payload.data || [] };
    }
  },
  defaultState
);