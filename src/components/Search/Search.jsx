// import { Button, Container, TextField } from '@material-ui/core'
// import React, {useEffect, useState} from 'react'
// import List from './List';
// import omdbLocal from './omdb.json'

// const Search = () => {
//     const [searchInput, setSearchInput] = useState(0);
//     const [nameToSearch, setNameToSearch] = useState('');
    

//     const [dataApiOmdb, setDataApiOmdb] = useState({
//         "Title": "Kick-Ass",
//         "Year": "2010"
//     });

    
    
//     console.log(omdbLocal)

//     useEffect(() => {
//         document.title = `${nameToSearch} times`
//     },[nameToSearch])

//     const searchItem = () => {
//         // size of the query to be shown
//         let size = 10;
//         const apiURL = `https://www.omdbapi.com/?s=${searchInput}&type=movie&page=1&apikey=8a2a252`;
//             fetch(apiURL)
//                 .then(response => {
//                     return response.json();
//             })
//             .then(data => {
//                 setDataApiOmdb(data);
                
//             })
//             .catch(error => {
//                 console.log("error");
//                 console.error(error);

//             })
//             // console.log(dataApiOmdb)

//     }
    
//     const createCard = () => {
//         dataApiOmdb.slice(0, 10).map(item => {

//             // // console.log(item);
//             // let serchItemList = `
//             //     <div class="card"> 
//             //         <img class="card-img-top" src="${item.Poster != 'N/A' ? item.Poster :'noPoster.png'}" alt="${item.Title} Poster">
//             //         <div class="card-body d-flex justify-content-end h-100 flex-column ">
//             //         <div> 
//             //             <p class="card-text d-inline">${item.Title}</p>
//             //             <p class="card-text d-inline">(${item.Year}) </p>
//             //         </div>
//             //             <button id="" class="btn btn-secondary mt-2 btn-block"> Nominate  </button>
//             //         </div>
//             //     </div>     
//             //     `
//             // searchList.innerHTML += serchItemList
//         })

//     }

        
//     //   const movieList = dataApiOmdb.Search.map(movie => <List movie={movie}/>)      


//     return (
//         <Container xs={12}>
//             <form noValidate autoComplete="off">

//                 <TextField onChange={({ target: { value } }) => {setSearchInput(value)} } label="Outlined" variant="outlined" />

//                 <Button onClick={searchItem} variant="contained" color="primary">
//                     Search
//                 </Button>

                
//             </form>

//             {/* <div>
//                 <h1>second part</h1>

//                 {dataApiOmdb.map((movie, i)=> (
//                     <div class="card"> 
                       
//                         <div class="card-body d-flex justify-content-end h-100 flex-column ">
//                             <div> 
//                                 <p class="card-text d-inline">{movie.Title}</p>
//                                 <p class="card-text d-inline">({movie.Year}) </p>
//                             </div>
                            
//                         </div>
//                     </div>    

//                 ))}
//                 <List movie ={movie} />
//             </div> */}


//         </Container>
//     )
// }

// export default Search
