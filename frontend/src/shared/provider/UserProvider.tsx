import React, { useState, createContext } from "react"

export const UserContext = createContext<any>(null)

export const UserProvider = (props: { children?: React.ReactChild }) => {
    const [authenticatedUser, setAuthenticatedUser] = useState<String>()

    return (
        <>
        <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
            {props.children}
        </UserContext.Provider>
        </>
    )
}