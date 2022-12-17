import React from 'react'
import { useState, useEffect } from 'react'

const Temp_Fetch = () => {
    const [pokemons, setPokemons] = useState([])
    const [loaded, setContainor] = useState(false)
    const [count, setCount] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then((response) => response.json())
            .then((response) => {
                setPokemons(response.results)
            })
            .then(setContainor(true))
    }, [])

    return (
        <div>
            <ul>
                {loaded && pokemons.map((pokemons_item, i) => {

                    return <p key={i}>{i} - (   {pokemons_item.name}   )   </p>
                })}
            </ul>
        </div>
    )
}

export default Temp_Fetch