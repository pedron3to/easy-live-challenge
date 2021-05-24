import { createContext, Dispatch, FormEvent, ReactNode, SetStateAction }from 'react'

import useAuth from './hooks/useAuth'

interface AppContextInterface {
   password: string;
   setPassword: Dispatch<SetStateAction<string>>;
   email: string;
   setEmail: Dispatch<SetStateAction<string>>;
   handleSubmit: (event: FormEvent) => Promise<void>;

}

const Context = createContext<AppContextInterface | null>(null)

interface AuthProviderProps {
  children: ReactNode;
}


function AuthProvider({children}:AuthProviderProps) {
  const { password, setPassword, email, setEmail, handleSubmit } = useAuth()
  
  return(
    <Context.Provider value={{password, setPassword, email, setEmail, handleSubmit}}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }