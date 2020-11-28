import { combineReducers } from "redux";
import { FETCH_PROFILES, SET_LOADING } from "../actions/index";

const INITIAL_STATE = {
  plantProfiles: [],
  isLoading: false,
  renderRegistration: false,
  renderLogin: false
};

const profilesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.isLoading
      };
    case "SET_HOME_RENDER_REGISTER": {
      return {
        ...state,
        renderRegistration: true,
        renderLogin: false
      };
    }
    case "SET_HOME_RENDER_LOGIN": {
      return {
        ...state,
        renderRegistration: false,
        renderLogin: true
      };
    }
    case "FETCH_PROFILES":
      return {
        ...state,
        plantProfiles: action.plantProfiles
      };
    default:
      return state;
  }
};

export default combineReducers({
  profiles: profilesReducer
});
