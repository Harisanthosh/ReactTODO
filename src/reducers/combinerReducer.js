import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import todoReducer from "./todosReducer";

const cr = combineReducers({
  menu: menuReducer,
  todos: todoReducer
});

export default cr;
