export const artDetailReducer = (state, action) => {
  switch (action.type) {
    case "ITEM_ADDED":
      const newFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(newFavs));
      return {
        ...state,
        favs: newFavs,
        isModalOpen: true,
        modalContent: "Added to favorites!",
      };

    case "ITEM_DELETED": {
      const filter = state.favs.filter((id) => id !== action.payload);
      localStorage.setItem("favs", JSON.stringify(filter));
      return {
        ...state,
        isModalOpen: true,
        favs: filter,
        modalContent: "Removed from favorites!",
      };
    }

    case "CLOSE_MODAL": {
      return {
        ...state,
        isModalOpen: false,
      };
    }

    default:
      throw new Error("No matching action type");
  }
};
