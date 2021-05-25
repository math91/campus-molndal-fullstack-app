import './DesktopNavigation.css'
import { useHistory } from "react-router-dom"
import logotype from "../../../shared/images/logotype.svg"
import RoutingPath from "../../../routes/RoutingPath"
import {useContext} from "react"
import {UserContext} from "../../../shared/provider/UserProvider"
import {Profile} from "../../../components/profile/Profile"

export const DesktopNavigation = () => {
    const [authenticatedUser, ] = useContext(UserContext)
    const history = useHistory()

    const displayAuthUserSignIn = () => {
        return authenticatedUser
        ? <span><Profile /></span>
        : <span onClick={() => history.push(RoutingPath.signInView)}>sign in</span>
    }

    return (
        <div className="desktopnavigationwrapper">
            <div>
                <img 
                    onClick={() => history.push(RoutingPath.homeView)} 
                    src={logotype} 
                    alt="error"
                />
            </div>
            <div>
                <div 
                    onClick={() => history.push(RoutingPath.galleryView)}
                >
                        Gallery
                </div>
                <div 
                    onClick={() => history.push(RoutingPath.shopView)}
                >
                    Shop
                </div>
                <div 
                    onClick={() => history.push(RoutingPath.newsView)}
                >
                    News
                </div>
            </div>
            <div>
                {displayAuthUserSignIn()}               
            </div>
        </div>
    )
}