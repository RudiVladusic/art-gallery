export const artDetailReducer = (state, action) => {
  if (action.type === "ITEM_ADDED") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Item added!",
    };
  }
  if (action.type === "ITEM_EXISTS") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Item is already in your favorites!",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  throw new Error("No matching action type");
};
