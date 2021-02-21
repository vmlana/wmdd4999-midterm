import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'


const getStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
}))

const MovieCard = props => {
  const classes = getStyles()
  const { key, title, subheader, imageUrl, overview  } = props

  return (
    <Card key={key}>
      <CardHeader title={title} subheader={subheader} />
      <CardMedia className={classes.media} image={imageUrl} label={title} />
      <Typography variant="body1" color="textSecondary" component="p">{overview}</Typography>
    </Card>
  )
}

export default MovieCard
