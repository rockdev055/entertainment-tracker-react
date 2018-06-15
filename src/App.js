import React, { Component } from 'react'
import MovieRow from './MovieRow'
import WatchList from './WatchList'
import SearchMovies from './SearchMovies'
import SearchTV from './SearchTV'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

const moviesDBKey = process.env.REACT_APP_MOVIES_DB_KEY
const baseUrl = process.env.REACT_APP_MOVIES_DB_API_URL

class App extends Component {
  constructor() {
    super()

    this.state = { watchList: { movies: [], shows: [] } }
  }

  componentDidMount() {
    // this.searchMovies()
  }

  addMovie = movie => {
    this.setState({
      watchList: { movies: this.state.watchList.movies.concat(movie) },
    })
  }

  addShow = show => {
    this.setState({
      watchList: { shows: this.state.watchList.shows.concat(show) },
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route
            path="/search-movies"
            render={routerProps => <SearchMovies {...routerProps} addMovie={this.addMovie} />}
          />
          <Route
            path="/search-tv"
            render={routerProps => (
              <SearchTV {...routerProps} shows={this.state.watchList.shows} addShow={this.addShow} />
            )}
          />
          <Route
            path="/watchlist"
            render={routeProps => (
              <WatchList {...routeProps} movies={this.state.watchList.movies} shows={this.state.watchList.shows} />
            )}
          />
        </div>
      </Router>
    )
  }
}

export default App

// const movies = [
//   {
//     id: 0,
//     poster_src: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
//     title: 'Avengers: Infinity War',
//     overview: 'This is a random overview of the movie.',
//   },
//   {
//     id: 1,
//     poster_src: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/guViKKIY0D5UlfQcHnusB8zrJqc.jpg',
//     title: 'The Avengers',
//     overview: 'This is a random overview of the movie.',
//   },
// ]
