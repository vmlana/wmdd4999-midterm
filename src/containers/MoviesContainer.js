import React from 'react';
import { Component } from 'react';
import Loading from '../components/Loading'
import Movies from '../components/Movies'
import { getMovies, getConfig } from '../services/api'
import Button from '@material-ui/core/Button'

class MoviesContainer extends Component {

    state = {
        recipesName: '',
        movieConfig: {},
        movies: [],
        isLoading: false
    }


    fetchMovies = e => {
        const { recipeName } = this.state
        e.preventDefault()

        this.setState({
            isLoading: true
        })

        getConfig().then(movieConfig => {
            this.setState({
                movieConfig
            })
        })

        getMovies(recipeName).then(movies => {
            this.setState({
                movies,
                isLoading: false
            })
        })
    }

    render() {
        const { isLoading, movies, movieConfig } = this.state
        return (
            <div>
                <h1>THIS IS THE MOVIES CONTAINER</h1>

                <form onSubmit={this.fetchMovies} className='test'>
                    <Button variant='outlined' type='submit'>VINI</Button>
                </form>


                {isLoading ? <Loading /> : <Movies movieConfig={movieConfig} movies={movies} />}
            </div>
        )
    }

}

export default MoviesContainer

