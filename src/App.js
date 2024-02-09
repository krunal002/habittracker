import "./App.css";
import { useContext } from "react";
import { HabitContext } from "./Context/habitContext";
import BasicModal from "./Components/model";
import HabitList from "./Components/habitList";


function App() {
  const { state } = useContext(HabitContext);
  return (
    <div className="App">
      <BasicModal />
      <HabitList data={state.habitsData} />
    </div>
  );
}

export default App;
