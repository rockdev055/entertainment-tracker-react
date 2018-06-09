import React, { Component } from 'react'

const imageUrl = process.env.REACT_APP_MOVIES_DB_IMAGE_URL

class MovieRow extends Component {
  viewMovie = () => {
    const url = `https://www.themoviedb.org/movie/${this.props.movie.id}`
    window.location.href = url
  }

  addMovie = () => {
    this.props.addMovie(this.props.movie)
  }
  render() {
    const { movie } = this.props
    return (
      <table key={movie.id}>
        <tbody>
          <tr>
            <td>
              <img width="100" src={imageUrl + movie.poster_path} alt="poster" />
            </td>
            <td>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <input type="button" value="View" onClick={this.viewMovie} />
              <input type="button" value="Add to Watchlist" onClick={this.addMovie} />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default MovieRow
