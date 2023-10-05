import { createContext, useState } from "react";

export const SpaceContext = createContext();

export function SpaceContextProvider({ children }) {
  const [casinha, setSpace] = useState("daniel");
  const space = { casinha };

  return (
    <SpaceContext.Provider value={space}>{children}</SpaceContext.Provider>
  );
}
