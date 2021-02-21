import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import { makeStyles } from '@material-ui/core/styles'
const getStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}))



const SearchContainer = props => {
    const classes = getStyles()
    const [type, setType] = React.useState('');

    const handleChange = (event) => {
      setType(event.target.value);
    };   

    return (
        <form className={classes.form}  >
            <TextField
                label='Search'
                name='searchText'
                margin='normal'
                variant='outlined'
            />

             <FormControl className={classes.formControl}>
                <InputLabel shrink id="search-label">Search Type</InputLabel>
                <Select
                    labelId="search-label"
                    id="search-id"
                    value={type}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={1}>Movie</MenuItem>
                    <MenuItem value={2}>TV Show</MenuItem>
                </Select>
            </FormControl>

            <Button variant='outlined' className={classes.button} type='submit'>
                Search
            </Button>

        </form>

    )


}

export default SearchContainer