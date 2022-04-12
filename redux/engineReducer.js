import { SEARCH_BY_CONTAINER, SEARCH_BY_HBL } from "./types";

const INITIAL_STATE = {
  type: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BY_CONTAINER:
      console.log("searching by container");
    case SEARCH_BY_HBL:
      console.log("searching by HBL");
  }
};

export default userReducer;
