import { createContext } from "react";
export const HabitContext = createContext();

export const HabitContextHandler = ({ children }) => {
  return (
    <HabitContext.Provider value={{ habit: "Active" }}>
      {children}
    </HabitContext.Provider>
  );
};
