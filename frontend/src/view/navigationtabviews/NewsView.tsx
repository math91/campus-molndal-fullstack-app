import { useState, useEffect } from "react"
import PokemonAPIService from "../../shared/api/service/PokemonAPIService"
import {useHistory} from "react-router-dom"
import RoutingPath from "../../routes/RoutingPath"

export const NewsView = () => {
    const [APIData, setAPIData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const history = useHistory()

    const fetchData = async () => {
        try {
            const {data} = await PokemonAPIService.get100Pokemons()
            setAPIData(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const displayData = () => {
        if (!loading) {
            return APIData.results?.map((x: any) =>
                <div key={x.name}>
                    <h1 onClick={() => 
                        history.push(RoutingPath.itemDetailView, x)}
                    >
                        {x.name}
                    </h1>
                </div>
            )
        }
    }

    return (
        <div>
            <button
                onClick={() => console.log(APIData)}>
                Test
            </button>
            <h1>This is NewsView!</h1>
            {displayData()}
        </div>
    )
} 