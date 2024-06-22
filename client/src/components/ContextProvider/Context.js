import React, { createContext, useState } from 'react'

export const LoginContext = createContext("");

export const Context = ({children}) => {

    const [loginData, setLoginData]= useState();

    return (
    <div>
        <LoginContext.Provider value={{loginData, setLoginData}}>
            {children}
        </LoginContext.Provider>
    </div>
  )
}
