import "./BackDrop.css"

export const BackDrop = (props: {drawerHandler: Function }) => {
    return (
        <div className="backdrop"
            onClick={() => props.drawerHandler(false)}>

        </div>
    )
} 