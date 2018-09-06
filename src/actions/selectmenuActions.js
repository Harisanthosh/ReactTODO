export function selectAll() {
  return { type: "SELECT_MENU", menu: "ALL" };
}

export function selectActive() {
  return { type: "SELECT_MENU", menu: "ACTIVE" };
}

export function selectCompleted() {
  return { type: "SELECT_MENU", menu: "COMPLETED" };
}
