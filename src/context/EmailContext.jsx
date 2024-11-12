import React from 'react'
import { createContext, useReducer } from "react";
import { emailReducer, initialState } from "../reducer/EmailReducer";

export const emailContext=createContext()

const EmailContext = ({children}) => {
    const [stateObj,dispatch]=useReducer(emailReducer,initialState)

    console.log("Updated state in context provider:", stateObj);
  return (
    <emailContext.Provider value={{...stateObj,dispatch}}>
      {children}
    </emailContext.Provider>
  )
}

export default EmailContext
