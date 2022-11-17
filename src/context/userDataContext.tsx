import { createContext, ReactNode, useContext, useReducer } from "react";
import userDataReducer from "../reducer/userDataReducer";

export enum TaskStatus {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

interface UserTodo {
  task: string;
  createdAt: string;
  completedOn?: string;
  status: TaskStatus;
  id: string;
}

export interface UserState {
  todo: UserTodo[];
}

interface UserStateContext {
  state: UserState;
  dispatch: React.Dispatch<Partial<UserState>>;
}

const UserDataContext = createContext<UserStateContext | null>(null);

interface UserDataProviderProps {
  children: ReactNode;
}

const UserDataProvider = ({ children }: UserDataProviderProps) => {
  const [userDataState, userDataDispatch] = useReducer(
    (state: UserState, newState: Partial<UserState>) => ({
      ...state,
      ...newState,
    }),
    {
      todo: [],
    }
  );

  return (
    <UserDataContext.Provider
      value={{ state: userDataState, dispatch: userDataDispatch }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

const useUserData = () => useContext(UserDataContext);

export { useUserData, UserDataProvider };
