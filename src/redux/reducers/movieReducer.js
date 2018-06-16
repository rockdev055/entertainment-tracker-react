export default (state = { all: [], loading: false }, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      return { ...state, all: action.movies }
    case 'ADD_MOVIE':
      return { ...state, all: state.all.concat(action.movie) }
    default:
      return state
  }
}
