import "./Sidebar.css"

export const Sidebar = (props: {drawerIsOpen: boolean, drawerHandler: Function }) => {
    return (
        <nav className={props.drawerIsOpen ? "side-drawer open" : "side.drawer"}>
            <h1 onClick={() => props.drawerHandler(false)}>Exit</h1>
        </nav>
    )
}