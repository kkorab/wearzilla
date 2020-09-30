import React, {useState, createContext} from 'react'

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
    const [isLogged, setLogged] = useState(false);
    
    return (
        <GlobalContext.Provider value={[isLogged, setLogged]}>
            {props.children}    
        </GlobalContext.Provider>
    )
}
