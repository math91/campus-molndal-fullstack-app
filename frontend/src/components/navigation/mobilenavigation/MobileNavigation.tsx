import './MobileNavigation.css'
import {HamburgerButton} from "./hamburgerbutton/HamburgerButton"
import {Sidebar} from "./sidebar/Sidebar"
import {useState} from "react"
import {BackDrop} from "../../backdrop/BackDrop"

export const MobileNavigation = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)

    return (
        <>
            <HamburgerButton drawerHandler={setOpenDrawer} />
            <Sidebar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
            {!openDrawer || <BackDrop drawerHandler={setOpenDrawer} />}
        </>
    )
}