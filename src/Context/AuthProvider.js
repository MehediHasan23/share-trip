import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';



export const allContext = createContext()



const AuthProvider = ({children}) => {
  
 const firebase = useFirebase()
  
  const data ={

    firebase
  }
 
  return (
    <allContext.Provider value={data} >
      {children}
    </allContext.Provider>
  );
};

export default AuthProvider;