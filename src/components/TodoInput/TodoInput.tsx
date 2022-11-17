import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useUserData, TaskStatus } from "../../context/userDataContext";
import "./todo-input.css";

const TodoInput = () => {
  const [typedText, setTypedText] = useState<string>("");
  let uuid = uuidv4();
  const userContext = useUserData();

  return (
    <div className="todo-create-box">
      <input
        type="text"
        placeholder="Type Something..."
        className="input-box"
        onChange={(e) => {
          setTypedText(e.target.value);
        }}
        value={typedText}
      />
      <button
        className={
          typedText.length > 0 ? "btn-create " : "btn-create btn-block"
        }
        onClick={() => {
          if (typedText.length > 0) {
            userContext?.dispatch({
              todo: [
                ...userContext?.state.todo,
                {
                  task: typedText,
                  createdAt: new Date().toISOString().slice(0, 10),
                  status: TaskStatus.IN_PROGRESS,
                  id: uuid,
                },
              ],
            });
            setTypedText("");
          }
        }}
      >
        Create
      </button>
    </div>
  );
};

export default TodoInput;
