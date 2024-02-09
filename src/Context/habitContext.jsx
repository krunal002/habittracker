import { createContext, useReducer } from "react";
export const HabitContext = createContext();

export const HabitContextHandler = ({ children }) => {
  const defaultHabits = [
    {
      id: 1707488926015,
      title: "Gym",
      repeat: "Weekly",
      goal: "3 Times",
      timeOfDay: "Evening",
      startDate: "2024-02-04",
      timeTag: "2024-02-09T14:28:46.015Z",
    },
    {
      id: 1707488857415,
      title: "Meditation",
      repeat: "Daily",
      goal: "1 Time",
      timeOfDay: "Morning",
      startDate: "2024-02-05",
      timeTag: "2024-02-09T14:27:37.415Z",
    },
    {
      id: 1707488829417,
      title: "Drink Water",
      repeat: "Daily",
      goal: "4 Times",
      timeOfDay: "Afternoon",
      startDate: "2024-02-03",
      timeTag: "2024-02-09T14:27:09.417Z",
    },
    {
      id: 1707488796050,
      title: "Running",
      repeat: "Daily",
      goal: "1 Time",
      timeOfDay: "Evening",
      startDate: "2024-02-01",
      timeTag: "2024-02-09T14:26:36.050Z",
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
      timeTag: new Date(),
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
