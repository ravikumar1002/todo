import { UserState } from "../context/userDataContext";

export enum TodoReducer {
  CREATE = "CREATE",
}

interface TodoAction {
  type: TodoReducer;
  payload: {};
}

const userDataReducer = (state: UserState, action: TodoAction) => {
  const { type, payload } = action;
};

export default userDataReducer;
