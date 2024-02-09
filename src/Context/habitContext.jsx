import { createContext, useReducer } from "react";
export const HabitContext = createContext();

export const HabitContextHandler = ({ children }) => {
  const defaultHabits = [
    {
      id: 1707483757570,
      title: "Reading",
      repeat: "Weekly",
      goal: "2 Times",
      timeOfDay: "Morning",
      startDate: "2024-02-21",
    },
    {
      id: 1707483757571,
      title: "Meditation",
      repeat: "Daily",
      goal: "2 Times",
      timeOfDay: "Morning",
      startDate: "2024-02-21",
    },
    {
      id: 1707483757572,
      title: "Swimming",
      repeat: "Monthly",
      goal: "3 Times",
      timeOfDay: "Morning",
      startDate: "2024-02-21",
    },
    {
      id: 1707483757573,
      title: "Exercise",
      repeat: "Daily",
      goal: "1 Times",
      timeOfDay: "Morning",
      startDate: "2024-02-21",
    },
  ];

  const initialState = {
    habitsData: [...defaultHabits],
    title: "",
    repeat: "",
    goal: "",
    timeOfDay: "",
    startDate: "",
  };
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "submitHabit":
        return { ...state, habitsData: [...state.habitsData, action.payload] };
      case "title":
        return { ...state, title: action.payload };
      case "repeat":
        return { ...state, repeat: action.payload };
      case "goal":
        return { ...state, goal: action.payload };
      case "timeOfDay":
        return { ...state, timeOfDay: action.payload };
      case "startDate":
        return { ...state, startDate: action.payload };
      case "reset":
        return { ...initialState, habitsData: state.habitsData };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  // Functions
  const addHabit = () => {
    const newHabit = {
      id: Date.now(),
      title: state.title,
      repeat: state.repeat,
      goal: state.goal,
      timeOfDay: state.timeOfDay,
      startDate: state.startDate,
    };
    dispatch({ type: "submitHabit", payload: newHabit });
    setTimeout(() => console.log(state), 1000);
    dispatch({ type: "reset" });
  };

  return (
    <HabitContext.Provider
      value={{ habit: "Active", state, dispatch, addHabit }}
    >
      {children}
    </HabitContext.Provider>
  );
};
