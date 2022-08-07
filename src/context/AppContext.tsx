/** @jsxImportSource @emotion/react */
import React, { useState, createContext } from "react";

interface AppContextInterface {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = createContext<AppContextInterface>(null);

export function useAppContext() {
	return React.useContext(AppContext)
}

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  return (
    <AppContext.Provider value={{ name, setName, score, setScore }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
