export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'Add Todo':
      return [ ...initialState, action.payload ]
    case 'Del Todo':
      return initialState.filter(todo => todo.id !== action.payload)
    case 'Toggle Todo':
      return initialState.map(todo => {
        if ( todo.id === action.payload.id ){
          return {
            ...todo,
            done: action.payload.bool
          }
        }
        return todo
      })
    default:
      return initialState;
  }
};
