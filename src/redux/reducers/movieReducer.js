export default (state = { all: [], loading: false }, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      return { ...state, all: action.movies }
    default:
      return state
  }
}
