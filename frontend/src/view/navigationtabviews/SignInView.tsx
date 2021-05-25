import {useState, useContext} from "react"
import { UserContext } from "../../shared/provider/UserProvider"
import { useHistory } from "react-router-dom"
import RoutingPath from "../../routes/RoutingPath"

export const SignInView = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const [userData, setUserData] = useState<any>({username: "", password: ""})

    const updateUserData = (type: string, value: string) => {
        setUserData({...userData, [type]: value})
    }

    const signIn = () => {
        setAuthenticatedUser(userData.username)
        localStorage.setItem('userName', `${userData.username}`)
        history.push(RoutingPath.homeView)
    }

    const displayAuthUserOrSignIn = () => {
        if (authenticatedUser) return <div>{authenticatedUser}</div>
        return (
            <div>
                <input
                    onChange={event => updateUserData("username", event.target.value)}
                />
                 <input
                    onChange={event => updateUserData("password", event.target.value)}
                />
                <button
                    onClick={signIn}
                >
                    Logga in
                </button>
                <button
                    onClick={() => console.log(userData)}
                >
                    Test in console log
                </button>
                <h1>{userData.username}</h1>
            </div>
        )
    }

    return (
        <div>
            {displayAuthUserOrSignIn()}
        </div>
    )
} 