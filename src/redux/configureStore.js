import { createStore, combineReducers } from 'Redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});
const store = createStore(rootReducer);

export default store;
