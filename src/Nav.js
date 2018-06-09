import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <table className="titleBar">
    <tbody>
      <tr>
        <td>
          <Link to="/">
            <img src="video-camera.svg" alt="icon" width="50" />
          </Link>
        </td>
        <td width="8" />
        <td>
          <h1> MovieDB Search</h1>
        </td>
        <td>
          <Link to="/watchlist">My Movies</Link>
        </td>
        <td>
          <Link to="/search-movies">Search Movies</Link>
        </td>
      </tr>
    </tbody>
  </table>
)

export default Nav
