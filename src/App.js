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
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/search-movies" component={SearchMovies} />
          <Route path="/search-tv" component={SearchTV} />
          <Route path="/watchlist" component={WatchList} />
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
