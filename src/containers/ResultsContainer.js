import React from 'react';
import { Component } from 'react';
import Loading from '../components/Loading'
import Movies from '../components/Movies'
import { getMovies } from '../services/api'
import Button from '@material-ui/core/Button'

class ResultsContainer extends Component {

    state = {
        recipesName: '',
        movies: [],
        isLoading: false
    }

    fetchMovies = e => {
        const { recipeName } = this.state
        e.preventDefault()

        this.setState({
            isLoading: true
        })

        getMovies(recipeName).then(movies => {
            this.setState({
                movies,
                isLoading: false
            })
        })
    }

    render() {
        const { isLoading, movies } = this.state
        return (
            <div>
                <h1>meu container</h1>


                <form onSubmit={this.fetchMovies} className='test'>
                    <Button variant='outlined' type='submit'>VINI</Button>
                </form>


                {isLoading ? <Loading /> : <Movies movies={movies} />}
            </div>
        )
    }

}

export default ResultsContainer

