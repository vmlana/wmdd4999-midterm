import React from 'react';
import Searching from "../components/Searching"
import Movies from '../components/Movies'


const ResultsContainer = props => {

    const { keyword, movies, movieConfig } = props

    return (
        <div>
            {(movies.length === 0 || keyword === '' ) ? <Searching /> : <Movies movieConfig={movieConfig} movies={movies} />}
        </div>
    )
}

export default ResultsContainer

