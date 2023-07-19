import { Context, useContext } from "react";

export const useSafeContext = <ContextType>(
  ProvidedContext: Context<ContextType>,
  errMsg: string
) => {
  const value = useContext(ProvidedContext);

  if (!value) {
    throw new Error(errMsg);
  }

  return value;
};
