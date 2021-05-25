import PokemonAPIService from "../../shared/api/service/PokemonAPIService"
import { useState, useEffect } from "react"
import { useDebounce } from "../../hooks/useDebounce"

export const ShopView = () => {
    const [data, setData] = useState<any>()
    const [search, setSearch] = useState<string>('')
    const debounceSearchTerm = useDebounce(search, 1000)

    const fetchData = async (search: string) => {
        if (debounceSearchTerm) {
            const {data} = await PokemonAPIService.searchCharacter(search)
            setData(data)
        }
    }

    useEffect(() => {
        fetchData(search)
    }, [debounceSearchTerm])

    return (
        <div>
            <input placeholder="serach for pokemon"
                onChange={event => setSearch(event.target.value)}
            />
            <h1>name: {data?.name}</h1>
            <h1>height: {data?.height}</h1>
            <h1>id: {data?.id}</h1>
            <h1>weight: {data?.weight}</h1>
            <h1>type: {data?.types?.[0]?.type?.name}</h1>
        </div>
    )
} 