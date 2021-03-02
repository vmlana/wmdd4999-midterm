import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MovieCard from './MovieCard'

const getStyles = makeStyles(theme => ({
    root: {
        margin: '5em 0'
    }
}))

const Movies = props => {
    const classes = getStyles()

    return (
        <div className='container'>
            <Grid container className={classes.root} spacing={5}>

                {props.movies.map(movieObj => {
                    return (
                        <Grid item xs={8}>
                            <MovieCard
                                key={movieObj.id}
                                title={movieObj.title ? movieObj.title : movieObj.name }
                                subheader={`Release date: ${movieObj.release_date} | Popularity: ${movieObj.popularity}`}
                                overview={movieObj.overview}
                                imageUrl= {`${props.movieConfig.images.secure_base_url}original/${movieObj.poster_path}`}
                            />
                        </Grid>
                    )
                })}

            </Grid>
        </div>
    )
}

export default Movies