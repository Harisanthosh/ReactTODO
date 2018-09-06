export default function menuReducer(prevState = "ALL", action) {
  let newState;

  switch (action.type) {
    case "SELECT_MENU":
      newState = action.menu;
      break;
    default:
      newState = prevState;
      break;
  }
  return newState;
}

/* 
{type:"SELECT_MENU",menu: "All | Active | Completed"}
*/
