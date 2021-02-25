import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles'

import ResultsContainer from './ResultsContainer'
import MoviesContainer from './MoviesContainer'
import TvShowsContainer from './TvShowsContainer'


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


// Material UI ********************************
function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >

            {value === index && index === 0 && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                    <MoviesContainer />
                </Box>
            )}

            {value === index && index === 1 && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                    <ResultsContainer />
                </Box>
            )}

            {value === index && index === 2 && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                    <TvShowsContainer />
                </Box>
            )}

        </div>
    );
}
// Material UI - end  ********************************




const SearchContainer = props => {
    const classes = getStyles()
    const [type, setType] = React.useState('');

    const [tabPage, setTabPage] = React.useState(0);

    const tabChange = (e, val) => {
        setTabPage(val);
    }

    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <div>
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

            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={tabPage} onChange={tabChange} aria-label="simple tabs example">
                        <Tab label="MOVIES" />
                        <Tab label="SEARCH RESULTS"  />
                        <Tab label="TV SHOWS" />
                    </Tabs>
                </AppBar>

                <TabPanel value={tabPage} index={0}>MOVIES</TabPanel>
                <TabPanel value={tabPage} index={1}>SEARCH RESULTS</TabPanel>
                <TabPanel value={tabPage} index={2}>TV SHOWS</TabPanel>
            </div>
        </div>
    )

}

export default SearchContainer





