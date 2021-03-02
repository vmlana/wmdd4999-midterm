import React from 'react'

const Searching = props => {
    const { keyword } = props

    let message = "";
    if (keyword !== undefined && keyword !== '') {
        message = `No results found for: ${keyword}`
    } else {
        message = `Plese, enter a keyword to search`        
    }

    return (
        <h1>{message}</h1>
    )

}

export default Searching
