import { Button, TextField } from '@material-ui/core'
import React, {useState} from 'react'

const Search = () => {
    const [searchInput, setSearchInput] = useState();

    const callAPI = () => {
        console.log("Im in")
        console.log(searchInput)

        // size of the query to be shown
        let size = 10;
        const apiURL = `https://www.omdbapi.com/?s=${searchInput}&type=movie&page=1&apikey=8a2a252`;
        console.log()
    }

    return (
        <div>
            <form noValidate autoComplete="off">

                <TextField onChange={({ target: { value } }) => setSearchInput(value)}  label="Outlined" variant="outlined" />

                <Button onClick={callAPI} variant="contained" color="primary">
                    Search
                </Button>
            </form>

        </div>
    )
}

export default Search
