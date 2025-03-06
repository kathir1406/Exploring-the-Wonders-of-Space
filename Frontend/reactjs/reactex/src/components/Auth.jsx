import React, { useContext, useState } from 'react'
const Authcontext=React.createContext()
export function Auth(props) {
    const[user,setuser]=useState(null)
    const login=(username)=>{
        setuser(username)
    }
    const logout=()=>{
        setuser(null)
    }
  return (
        <Authcontext.Provider value={{user,login,logout}}>
            {props.children}
        </Authcontext.Provider>
  )
}
  export const useAuth=()=>{
    return useContext(Authcontext)
  }
