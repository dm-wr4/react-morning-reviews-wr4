import React, {Component} from 'react' 

class Form extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            year: '',
            posterImg: ''
        }
    }

    handleChange(e){
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <form className='Form'>
                <input placeholder='Title' onChange={ this.handleChange} name='title'/>
                <input placeholder='Year' onChange={ this.handleChange} name='year'/>
                <input placeholder='Poster URL' onChange={ this.handleChange} name='posterImg'/>

                <button type='submit'>Add Movie</button>
            </form>
        )
    }

}

export default Form