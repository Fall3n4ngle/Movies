import { useLocalStorage } from "@mantine/hooks";
import { useSafeContext } from "@shared/hooks/useSafeContext";
import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext } from "react";

interface Auth {
  accountId: string | null;
  accessToken: string | null;
  requestToken: string | null;
}

interface ContextValue {
  auth: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
}

const Context = createContext<ContextValue | null>(null);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [auth, setAuth] = useLocalStorage<Auth>({
    key: "auth",
    defaultValue: {
      accessToken: null,
      accountId: null,
      requestToken: null,
    },
  });

  return <Context.Provider value={{ auth, setAuth }}>{children}</Context.Provider>;
};

export const useAuthContext = () =>
  useSafeContext(Context, "Cannot access Auth context value outside Auth context provider");
