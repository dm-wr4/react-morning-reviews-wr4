import React from 'react'
import movies from './data/movies.json'
import ListItem from './Components/ListItem'
import Form from './Components/Form'

class List extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: movies,
    }
    this.addMovie = this.addMovie.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
  }

  addMovie(title, year, posterImg) {
    const id = this.state.movies[this.state.movies.length - 1].id + 1
    const newMovie = { id, title, year, posterImg }
    const newArr = [...this.state.movies, newMovie]

    this.setState({
      movies: newArr,
    })
  }

  deleteMovie(id) {
    const copyArr = [...this.state.movies]
    const index = copyArr.findIndex((movie) => movie.id === id)
    copyArr.splice(index, 1)
    this.setState({
      movies: copyArr,
    })
  }

  render() {
    const movieDisplay = this.state.movies.map((movie) => {
      // console.log(movie)
      return (
        <ListItem key={movie.id} movie={movie} deleteMovie={this.deleteMovie} />
      )
    })

    return (
      <div className="List">
        <Form addMovie={this.addMovie} />
        {movieDisplay}
      </div>
    )
  }
}

export default List
