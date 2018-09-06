export function addListItem(item) {
  return { type: "ADD_TODO", text: item };
}

export function toggleItem(idx) {
  return { type: "TOGGLE_TODO", id: idx };
}
