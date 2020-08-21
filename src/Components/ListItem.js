import React from 'react'

function ListItem(props) {
  console.log(props)
  const { movie, deleteMovie } = props
  return (
    <div className="List-Item">
      <img src={movie.posterImg} className="movie-poster" alt={movie.title} />
      <div className="movie-info">
        <p>{movie.title}</p>
        <p>{movie.year}</p>
      </div>
      <p onClick={() => deleteMovie(movie.id)} className="delete-button">
        X
      </p>
    </div>
  )
}

export default ListItem
