import {useContext} from "react"
import { StarWarsContext } from '../shared/provider/StarWarsProvider'

export const HomeView = () => {
    const [starWarsProfile, setStarWarsProfile] = useContext(StarWarsContext)

    const showStarWars = () => {
        if (!starWarsProfile) {
            return "nobody, visit Gallery to get one"
        } else {
            return starWarsProfile.name
        }
    }
    
    return (
        <>
            <h1>This is homeview</h1>
            <h2>Your favorite starwars character:</h2>
            <h1>{showStarWars()}</h1>
        </>
    )
}