import { Container } from '@material-ui/core'
import React from 'react'
import Header from '../Header/Header'
import DataFetching from '../Search/DataFetching'
import Search from '../Search/Search'
import Search2 from '../Search/Search2'

const Content = () => {
    return (
        <>
            <Header/>
            {/* <Search/>
            <Search2/> */}
               
            <DataFetching/>

            
            
        </>
    )
}

export default Content
