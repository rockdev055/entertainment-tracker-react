import React, { Component, Fragment } from 'react'
import MovieRow from './MovieRow'

const moviesDBKey = process.env.REACT_APP_MOVIES_DB_KEY
const baseUrl = process.env.REACT_APP_MOVIES_DB_API_URL

class SearchMovies extends Component {
  state = {
    searchedMovies: [],
  }

  addMovie = movie => {
    this.props.addMovie(movie)
  }

  searchMovies = searchTerm => {
    fetch(`${baseUrl}/search/movie?query=${searchTerm}&api_key=${moviesDBKey}`)
      .then(res => res.json())
      .then(({ results }) => this.setState({ searchedMovies: results }))
  }

  render() {
    return (
      <Fragment>
        <input
          style={{ fontSize: 24, width: '99%', padding: '8px 0px 8px 16px' }}
          type="text"
          placeholder="Enter a movie title"
          onChange={e => this.searchMovies(e.target.value)}
        />
        {this.state.searchedMovies &&
          this.state.searchedMovies.map(movie => <MovieRow key={movie.id} movie={movie} addMovie={this.addMovie} />)}
      </Fragment>
    )
  }
}

export default SearchMovies
