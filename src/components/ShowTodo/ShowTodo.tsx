import { useUserData } from "../../context/userDataContext";
import "./show-todo.css";
import { TaskStatus } from "../../context/userDataContext";
import ReactLogo from "../../assets/check-svgrepo-com.svg";
import DeleteLogo from "../../assets/delete-button-svgrepo-com.svg";
import CircleLogo from "../../assets/circle-svgrepo-com.svg";

const ShowTodo = () => {
  const userContext = useUserData();

  const completeTask = (id: string, date: string) => {
    const todoUpdate = userContext?.state.todo.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completedOn: date,
            status: TaskStatus.COMPLETED,
          }
        : todo
    );
    userContext?.dispatch({
      todo: todoUpdate,
    });
  };

  const deleteTask = (id: string) => {
    const todoDelete = userContext?.state.todo.filter((todo) =>
      todo.id === id ? false : true
    );
    userContext?.dispatch({
      todo: todoDelete,
    });
  };

  return (
    <>
      {userContext?.state.todo.map((todo) => {
        return (
          <div key={todo.id} className="todo-wrapper">
            <div>
              <p className="todo-text">{todo.task}</p>
            </div>
            <div className="date-wrapper">
              <div className="date-section">
                <span>Created At: </span>
                <small>{todo.createdAt}</small>
              </div>
              {todo.completedOn && (
                <div className="date-section">
                  <span>Completed On: </span>
                  <small>{todo.createdAt}</small>
                </div>
              )}
            </div>
            <div className="show-todo-btn">
              {todo.status === TaskStatus.IN_PROGRESS && (
                <button
                  className="btn"
                  onClick={() => {
                    const currentdate = new Date().toISOString().slice(0, 10);
                    completeTask(todo.id, currentdate);
                  }}
                >
                    <img src={CircleLogo} className="svg-icon-height" /> 
                  Mark as complete
                </button>
              )}
              {todo.status === TaskStatus.COMPLETED && (
                <button className="btn"> <img src={ReactLogo} className="svg-icon-height" /> Completed</button>
              )}

              <button
                className="btn "
                onClick={() => {
                  deleteTask(todo.id);
                }}
              >
                <img src={DeleteLogo} className="svg-icon-height" /> 
                <span>
                   Delete
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShowTodo;
