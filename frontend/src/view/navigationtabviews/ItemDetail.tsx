import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Axios from "axios"

export const ItemDetail = () => {
    const [APIData, setAPIData] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    const location = useLocation<any>()

    const fetchData = async () => {
        try {
            const { data } = await Axios.get(location.state.url)
            setAPIData(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    })

    return (
        <>
            {loading ? <p>Laddar...</p> :
            <>
                <img src={APIData?.sprites?.front_default} alt={'error'} />
                <h1>name: {APIData?.name}</h1>
                <h1>hair_color: {APIData?.hair_color}</h1>
                <h1>gender: {APIData?.gender}</h1>
                <h1>height: {APIData?.height}</h1>
            </>
            }
        </>
    )
}