import React from 'react'

const List = ({movie}) => {

    const names = ['bruce', 'clark', 'mariguela']
    const nameList = names.map(name => <h2>{name}</h2>)

    return (
        <div>
            <h2>{movie.name}</h2>
            
            
        </div>
    )
}

export default List
