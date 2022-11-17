import "./App.css";
import ShowTodo from "./components/ShowTodo/ShowTodo";
import TodoInput from "./components/TodoInput/TodoInput";
import { useUserData } from "./context/userDataContext";

function App() {
  const userContext = useUserData();

  return (
    <div className="App">
      <TodoInput />
      <div className="todo-container">
      {userContext?.state?.todo.length > 0 ? <ShowTodo /> : <p>No todo</p>}
      </div>
    </div>
  );
}

export default App;
