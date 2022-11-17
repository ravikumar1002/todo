import { useUserData } from "../../context/userDataContext";
import "./show-todo.css"

const ShowTodo = () => {
  const userContext = useUserData();

  return (
    <>
      {userContext?.state.todo.map((todo) => {
        return (
          <div key={todo.id} className="todo-wrapper">
            <p>{todo.task}</p>
            <small>{todo.createdAt}</small>
            <button>Mark as completed</button>
            <button>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default ShowTodo;
