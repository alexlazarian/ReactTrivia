/** @jsxImportSource @emotion/react */
import React, { useState, createContext } from "react";
import * as STORAGE_KEYS from '../constants/storageKeys'

interface AppContextInterface {
  name?: string;
  setName?: React.Dispatch<React.SetStateAction<string>>;
  score?: number;
  setScore?: React.Dispatch<React.SetStateAction<number>>;
  highestScore?: number;
  setHighestScore?: React.Dispatch<React.SetStateAction<number>>;
  highestScoreDate?: string;
  setHighestScoreDate?: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextInterface>(null);

export function useAppContext() {
	return React.useContext(AppContext)
}

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const highestScoreSessionStorage = sessionStorage.getItem(STORAGE_KEYS.HIGHEST_SCORE) || '0';
  const parsedHighestScore = parseInt(highestScoreSessionStorage);
  const highestScoreDateSessionStorage = sessionStorage.getItem(STORAGE_KEYS.HIGHEST_SCORE_DATE) ||'';
  const currentScoreSessionStorage = sessionStorage.getItem(STORAGE_KEYS.CURRENT_SCORE) ||'0';
  const parsedCurrentScore = parseInt(currentScoreSessionStorage);

  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number>(parsedCurrentScore);
  const [highestScore, setHighestScore] = useState<number>(parsedHighestScore);
  const [highestScoreDate, setHighestScoreDate] = useState<string>(highestScoreDateSessionStorage);
  
  return (
    <AppContext.Provider value={{ name, setName, score, setScore, highestScore, setHighestScore, highestScoreDate, setHighestScoreDate}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
