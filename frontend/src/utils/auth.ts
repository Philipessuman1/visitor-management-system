import { createContext, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
   

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }


    return <AuthContext.Provider>{children}</AuthContext.Provider>
}