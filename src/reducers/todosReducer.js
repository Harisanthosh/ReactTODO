let i = 0;
export default function todosReducer(prevState = [], action) {
  let newState;

  switch (action.type) {
    case "ADD_TODO":
      i++;
      newState = [
        ...prevState,
        {
          id: i,
          text: action.text,
          complete: false
        }
      ];
      break;
    case "TOGGLE_TODO":
      newState = prevState.map(element => {
        if (element.id == action.id) {
          element.complete = !element.complete;
        }
        return element;
      });
      break;
    default:
      newState = [...prevState];
      break;
  }

  return newState;
}

/*
{type:"ADD_TODO", text:"Learn ..."}
{type:"TOGGLE_TODO", id:2} */
