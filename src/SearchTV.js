import React, { Component, Fragment } from 'react'
import MovieRow from './MovieRow'

const moviesDBKey = process.env.REACT_APP_MOVIES_DB_KEY
const baseUrl = process.env.REACT_APP_MOVIES_DB_API_URL

class SearchMovies extends Component {
  state = {
    searchedTV: [],
    searchTerm: '',
  }

  addShow = show => {
    this.props.addShow(show)
  }

  searchShows = () => {
    const { searchTerm } = this.state
    fetch(`${baseUrl}/search/tv?query=${searchTerm}&api_key=${moviesDBKey}`)
      .then(res => res.json())
      .then(({ results }) => this.setState({ searchedTV: results }))
  }

  updateSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  render() {
    return (
      <Fragment>
        <input
          style={{ fontSize: 24, width: '99%', padding: '8px 0px 8px 16px' }}
          type="text"
          value={this.state.searchTerm}
          placeholder="Enter a show"
          onChange={this.updateSearchTerm}
        />
        <button onClick={this.searchShows}>Search</button>
        {this.state.searchedTV &&
          this.state.searchedTV.map(movie => <MovieRow key={movie.id} movie={movie} addShow={this.addShow} />)}
      </Fragment>
    )
  }
}

export default SearchMovies
