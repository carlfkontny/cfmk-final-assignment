import { createContext, useContext, useState } from "react";

// Contxt -> exposing state
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) 
}

// Provider -> Manages state
const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState(null)

    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={ state }>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider