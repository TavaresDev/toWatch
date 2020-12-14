import Axios from 'axios'
import React, {useState, useEffect} from 'react'

const DataFetching = () => {
    const [movies, setMovies] = useState([])
    const [movieInput, setMovieInput] = useState(1)
    const [movieInputFromClick, setMovieInputFromClick] = useState("xxx")

    useEffect(() => {
        Axios.get(`https://www.omdbapi.com/?s=${movieInputFromClick}&type=movie&page=1&apikey=8a2a252`)
            .then(res => {
                setMovies(res.data.Search)
                console.log(res.data.Search)
            })
            .catch(err => {
                console.log(err)
            })
    },[movieInputFromClick])

    
    
    
    const handleClick = () => {
        setMovieInputFromClick(movieInput)
        movies.map((movie, i) => {
          console.log(movie.Title)
        })
    }

    return (
        <>
            <div>
                <input value ={movieInput} onChange={e => setMovieInput(e.target.value)}/>

                <button onClick={handleClick} >Search</button>
            </div>




        <div>
            {
                movies.map((movie, i) => (
                    <p key={i}> {movie.Title}</p>

                ))
            }
     
            
        </div>
        </>
    )
}

export default DataFetching
