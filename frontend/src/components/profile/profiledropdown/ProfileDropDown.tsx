import './ProfileDropDown.css'
import {useHistory} from "react-router-dom"
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import {useContext} from "react"

export const ProfileDropDown = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        setAuthenticatedUser("")
        localStorage.removeItem('userName')
        history.push(RoutingPath.homeView)
    }

    return (
        <div className="profileDropdownWrapper">
            <span>Firstname Lastname</span>
            <span>Email</span>
            <hr/>
            <span onClick={() => history.push(RoutingPath.profileView)}>Profile</span> <br/>
            <span onClick={() => history.push(RoutingPath.settingsView)}>Settings</span> <br/>
            <span>Language: SE</span> <br/>
            <span onClick={() => history.push(RoutingPath.savedProductsView)}>Saved Products</span> <br/>
            <span onClick={logout}>Log out</span>
        </div>
    )
}