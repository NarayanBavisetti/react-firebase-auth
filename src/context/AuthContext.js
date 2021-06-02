import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const Auth = ({children}) => {
    const [user, setUser] = useState('')
    return (
<AuthContext.Provider value ={user} >
{children}
</AuthContext.Provider>
    )
}

export default Auth;