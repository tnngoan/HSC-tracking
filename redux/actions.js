export const searchContainer = (containerNUmber) => {
  return {
    type: "SEARCH_BY_CONTAINER",
    payload: containerNumber,
  };
};

export const searchHBL = (hblNumber) => {
  return {
    type: "SEARCH_BY_HBL",
    payload: hblNumber,
  };
};
