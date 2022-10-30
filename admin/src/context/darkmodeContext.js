import {createContext,useState} from 'react';
 export const AuthContext =createContext(null)

export default function Context({children}){
    const [dark,setDark] = useState(false)
    return(
        <AuthContext.Provider value={{dark,setDark}}>
            {children}
        </AuthContext.Provider>
    )
}