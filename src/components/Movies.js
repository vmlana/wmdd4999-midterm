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
                <h1>grid movies</h1>

                {props.movies.map(movieObj => {

                    return (
                        <Grid item xs={4}>
                            <MovieCard
                                key={movieObj.id}
                                title={movieObj.title}
                                subheader={`Release date: ${movieObj.release_date} | Popularity: ${movieObj.popularity}`}
                                overview={movieObj.overview}
                                imageUrl={movieObj.posterPath}
                            />
                        </Grid>
                    )


                })}




                <Grid item xs={4}>
                    <MovieCard
                        key={1}
                        title={`Joker`}
                        subheader={`Release date: 2019-01-15 | Popularity: 541.214`}
                        resume={`During the 1980 a failed stand-up comedian is thriven...`}
                        imageUrl={`https://unsplash.com/photos/-OpEshnHkWk`}
                    />
                </Grid>

                <Grid item xs={4}>
                    <MovieCard
                        key={2}
                        title={`Terminator`}
                        subheader={`Release date: 2019-01-15 | Popularity: 541.214`}
                        resume={`During the 1980 a failed stand-up comedian is thriven...`}
                        imageUrl={`https://unsplash.com/photos/-OpEshnHkWk`}
                    />
                </Grid>

                <Grid item xs={3}>
                    <MovieCard
                        key={1}
                        title={`Dark`}
                        subheader={`Release date: 2019-01-15 | Popularity: 541.214`}
                        resume={`During the 1980 a failed stand-up comedian is thriven...`}
                        imageUrl={`https://unsplash.com/photos/-OpEshnHkWk`}
                    />
                </Grid>


            </Grid>



        </div>




    )


}

export default Movies