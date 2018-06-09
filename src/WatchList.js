import React, { Component } from 'react'
import MovieRow from './MovieRow'

class WatchList extends Component {
  render() {
    console.log(this.props)
    const movies = this.props.movies.map(movie => <MovieRow movie={movie} />)
    return <div>{movies}</div>
  }
}

export default WatchList
