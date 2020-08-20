import React from 'react'
import movies from './data/movies.json'
import ListItem from './Components/ListItem'
import Form from './Components/Form'

class List extends React.Component {
    constructor(){
        super()

        this.state = {
            movies: movies
        }
    }


    render(){
        const movieDisplay = this.state.movies.map(function(movie, index){
            console.log(movie)
            return <ListItem key={index} movie={movie}/>
        })

        return (
            <div className='List'>
            <Form/>
            {movieDisplay}
            </div>
        )
    }
}

export default List