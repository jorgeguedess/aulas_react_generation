import "./App.css";
import Counter from "./pages/counter/Counter";
import Home from "./pages/home/Home";
import Task from "./pages/task/Task";

function App() {
  return (
    <>
      {/* <Home
        title="Componente Home"
        text="Este é um Componente que recebe props."
      />
      <Counter /> */}
      <Task />
    </>
  );
}

export default App;
