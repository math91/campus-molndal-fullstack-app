import E_COMMERCE_APIService from "../../shared/api/service/E_COMMERCE_APIService"
import {useState} from "react"

export const ProfileView = () => {
    const [serverResponse, setServerResponse] = useState<any>([])

    const fetchData = async () => {
        const { data } = await E_COMMERCE_APIService.getAllUsers()
        setServerResponse(data)
        console.log(data)
    }
 
    const displayData = () => {
        return (
            serverResponse.map((person: any) => <li key={person.username}>{person.username}</li>)
        )
    }

    return (
        <>
            <h1>Profile View</h1>
            <button onClick={fetchData}>Hämta användare från API</button>
            <ul>{displayData()}</ul>
        </>
    )
}