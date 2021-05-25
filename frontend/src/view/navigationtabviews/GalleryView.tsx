import Axios from "axios"
import React, { useEffect, useState, useContext } from "react"
import { StarWarsContext } from "../../shared/provider/StarWarsProvider"
import StarWarsAPIService from "../../shared/api/service/StarWarsAPIService"

export const GalleryView = () => {
    const [characterID, setCharacterID] = useState<string>('')
    const [starWarsProfile, setStarWarsProfile] = useContext(StarWarsContext)

    const fetchData = async (id: number) => {
        try {
            let response = await StarWarsAPIService.getStarWarsCharacter(id)
            setStarWarsProfile(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData(1)
    }, [])

    return (
        <div>
            <h1>This is GalleryView!</h1>
            <button
                onClick={() => console.log(starWarsProfile)}
            >
                Check api context call
            </button>
            <h1>{starWarsProfile?.name}</h1>
        </div>
    )
} 