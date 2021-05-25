import React, { useState, createContext } from "react"

export const StarWarsContext = createContext<any>(null)

export const StarWarsProvider = (props: { children?: React.ReactChild }) => {
    const [starWarsProfile, setStarWarsProfile] = useState<any>()

    return (
        <>
        <StarWarsContext.Provider value={[starWarsProfile, setStarWarsProfile]}>
            {props.children}
        </StarWarsContext.Provider>
        </>
    )
}