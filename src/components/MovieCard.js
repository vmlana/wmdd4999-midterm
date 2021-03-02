import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'


const getStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 1500,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: spacing(2), // 16
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));


const MovieCard = props => {
  const classes = getStyles()
  const { key, title, subheader, imageUrl, overview } = props
  return (

    <Card key={key} className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imageUrl}
      />
      <CardContent>
        <CardHeader title={title} subheader={subheader} />
        <Typography variant="body1" color="textSecondary" component="p">{overview}</Typography>
      </CardContent>
    </Card>

  )
}


export default MovieCard






// ***************************************************************************************
// ANOTHER CARD STYLING

// const getStyles = makeStyles(theme => ({
//   media: {
//     height: 0,
//     paddingTop: '56.25%'
//   }
// }))

// const MovieCard = props => {
//   const classes = getStyles()
//   const { key, title, subheader, imageUrl, overview  } = props

//   return (
//     <Card key={key}>
//       <CardHeader title={title} subheader={subheader} />
//       <CardMedia className={classes.media} image={imageUrl} label={title} />
//       <Typography variant="body1" color="textSecondary" component="p">{overview}</Typography>
//     </Card>
//   )
// }


