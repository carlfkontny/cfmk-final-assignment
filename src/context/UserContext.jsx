import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";

// Contxt -> exposing state
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) 
}

// Provider -> Manages state
const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState(storageRead(STORAGE_KEY_USER))

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