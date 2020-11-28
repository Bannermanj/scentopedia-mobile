import { FETCH_PROFILES, SET_LOADING } from "../types";

export const fetchProfiles = () => {
  return async dispatch => {
    dispatch({
      type: SET_LOADING,
      isLoading: true
    });
    fetch("http://localhost:8080/api/profile/all")
      .then(response => response.json())
      .then(plants => {
        if (plants.parsedProfiles.length > 0) {
          dispatch({
            type: SET_LOADING,
            isLoading: false
          });
        }
        dispatch({
          type: FETCH_PROFILES,
          plantProfiles: plants.parsedProfiles
        });
      })
      .catch(error => {
        console.log("Error: " + error.message);
        throw error;
      });
  };
};
