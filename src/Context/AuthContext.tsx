import { createContext, ReactNode, SetStateAction, Dispatch } from 'react'

import useAuth from './hooks/useAuth';

interface AppContextInterface {
  onSubmit: any;
  //handleSubmit: UseFormHandleSubmit<IFormInputs>;
  //register: UseFormRegister<IFormInputs>;
  handleLogOut: (event: any) => void;
  authenticated: boolean;
  doctorName: string;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const Context = createContext<Partial<AppContextInterface>>({});


interface AuthProviderProps {
  children: ReactNode;
}


function AuthProvider({ children }: AuthProviderProps) {
  const {
    onSubmit,
    // handleSubmit,
    // register,
    handleLogOut,
    authenticated,
    doctorName,
    setAuthenticated
  } = useAuth();

  return (<Context.Provider value={{
    onSubmit,
    //handleSubmit, 
    //register,
    handleLogOut,
    authenticated,
    doctorName,
    setAuthenticated
  }}
  >
    {children}
  </Context.Provider>
  )
}

export { Context, AuthProvider }
