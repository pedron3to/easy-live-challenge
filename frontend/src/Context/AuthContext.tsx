import { createContext, ReactNode } from 'react';

import useAuth from './hooks/useAuth';

interface AppContextInterface {
  onSubmit: any;
  handleLogOut: (event: any) => void;
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  doctorName: string | null;
}

const Context = createContext<Partial<AppContextInterface>>({});

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const {
    onSubmit,
    handleLogOut,
    authenticated,
    doctorName,
    setAuthenticated,
  } = useAuth();

  return (
    <Context.Provider
      value={{
        onSubmit,
        handleLogOut,
        authenticated,
        doctorName,
        setAuthenticated,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
