import './Profile.css'
import {useContext} from "react"
import { UserContext } from '../../shared/provider/UserProvider'
import {ProfileDropDown} from "./profiledropdown/ProfileDropDown"

export const Profile = (): JSX.Element => {
    const [authenticatedUser, ] = useContext(UserContext)

    return (
        <div className="profilewrapper">
            <img
                className="profileimg" 
                src={'https://thispersondoesnotexist.com/image'} 
                alt={'error...'} 
            />
            <span>{authenticatedUser}</span>
            <ProfileDropDown />
        </div>
    )
}