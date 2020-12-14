import React, {useEffect, useState} from 'react'
import List from './List';
import omdbLocal from './omdb.json'
import { MuiThemeProvider } from '@material-ui/core';
import DataFetching from './DataFetching';


const Search2 = () => {


    const [count, setCount] = useState(0)
    
    useEffect(() => {

        document.title = `${count} times`
    })

    return (
        <div>
            <h1>{count}</h1>
            <h2></h2>
            <button onClick={() => setCount(count + 1)}>click {count} times</button>

     
        </div>
    )
}

export default Search2
