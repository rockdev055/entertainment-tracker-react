import React, { Component } from 'react'
import MovieRow from './MovieRow'
import './App.css'

const moviesDBKey = process.env.REACT_APP_MOVIES_DB_KEY
const baseUrl = process.env.REACT_APP_MOVIES_DB_API_URL

class App extends Component {
  constructor() {
    super()

    this.state = { movies: [] }
  }

  componentDidMount() {
    // this.searchMovies()
  }

  searchMovies = searchTerm => {
    fetch(`${baseUrl}/search/movie?query=${searchTerm}&api_key=${moviesDBKey}`)
      .then(res => res.json())
      .then(({ results }) => this.setState({ movies: results }))
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img src="video-camera.svg" alt="icon" width="50" />
              </td>
              <td width="8" />
              <td>
                <h1> MovieDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          style={{ fontSize: 24, width: '99%', padding: '8px 0px 8px 16px' }}
          type="text"
          placeholder="Enter a movie title"
          onChange={e => this.searchMovies(e.target.value)}
        />
        {this.state.movies && this.state.movies.map(movie => <MovieRow key={movie.id} movie={movie} />)}
      </div>
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
