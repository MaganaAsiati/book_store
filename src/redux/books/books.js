const ADD = 'my-app/books/ADD';
const REMOVE = 'my-app/books/REMOVE';
const defaultState = [
  {
    id: 1,
    author: 'J.K. Rowling',
    title: 'Harry Potter and the Chamber of Secrets',
  },
  {
    id: 2,
    author: 'Robert Kiyosaki',
    title: 'Rich Dad Poor Dad ',
  },
];

export default function bookReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}
export function addBook(book) {
  return { type: ADD, payload: book };
}
export function removeBook(id) {
  return { type: REMOVE, id };
}
