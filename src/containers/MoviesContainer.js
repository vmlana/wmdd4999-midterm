import React from 'react';
import { Component } from 'react';
import Loading from '../components/Loading'
import Movies from '../components/Movies'
import { getMovies, getConfig } from '../services/api'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'


class MoviesContainer extends Component {

    state = {
        category: '',
        movieConfig: {},
        movies: [],
        isLoading: false
    }

    fetchMovies = e => {
        e.preventDefault()
        const category = e.target.value
        const origin = 'movie'

        this.setState({
            isLoading: true
        })

        getConfig().then(movieConfig => {
            this.setState({
                movieConfig
            })
        })

        getMovies(origin, category).then(movies => {
            this.setState({
                movies,
                isLoading: false
            })
        })
    }


    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            category: event.target.value
        })
        this.fetchMovies(event)
    };

    render() {
        const { isLoading, movies, movieConfig, category } = this.state
        return (
            <div>
                <form  >
                    <FormControl >
                        <InputLabel shrink id="category-label">Category</InputLabel>
                        <Select
                            labelId="category-label"
                            id="category-id"
                            value={category}
                            onChange={this.handleChange}
                            displayEmpty
                        >
                            <MenuItem value=""><em>Now Playing</em></MenuItem>
                            <MenuItem value={1}>Popular</MenuItem>
                            <MenuItem value={2}>Top-Rated</MenuItem>
                            <MenuItem value={3}>Upcomming</MenuItem>
                        </Select>
                    </FormControl>
                </form>

                {isLoading ? <Loading /> : <Movies movieConfig={movieConfig} movies={movies} />}
            </div>
        )
    }
}

export default MoviesContainer

