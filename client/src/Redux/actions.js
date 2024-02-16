import axios from "axios";
import {
  GET_DRIVERS,
  GET_DRIVERS_BY_NAME,
  DRIVERS_DETAILS,
  GET_TEAMS,
  FILTER_TEAMS,
  ORDER_NAME,
  FILTER_ORIGIN,
  POST_DRIVERS,
  FILTER_BY_TEAM_AND_ORIGIN,
  SET_CURRENT_PAGE
  //, , ORDER_BIRTHDAY,
} from "./action-types";

//GET DRIVERS
export const getDrivers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/drivers");
      dispatch({
        type: GET_DRIVERS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//GET_DRIVERS_BY_NAME
export const getDriversByName = (name) => {
  const disp = async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/drivers/name?name=${name}`
      );

      if (!response.data.length) {
        window.alert("No se obtuvieron resultados.");
      } else {
        dispatch({
          type: GET_DRIVERS_BY_NAME,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return disp;
};

//DRIVERS_DETAILS
export const getDriversDetails = (id) => {
  return async function (dispatch) {
    //realiza la solicitud a la API y dispacha la función a la store.
    try {
      const response = await axios.get(`http://localhost:3001/drivers/${id}`);
      return dispatch({
        type: DRIVERS_DETAILS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//ORDER_NAME

export const orderByName = (selection) => {
  return async (dispatch, getState) => {
    //getState es un metodo para acceder al estado actual, en este caso para obtener la lista de drivers.
    try {
      const drivers = getState().driversCopy;

      // Crea una copia del estado
      const driversCopy = [...drivers];

      // Ordena la lista por nombre alfabéticamente
      driversCopy.sort((a, b) => {
        if (selection === "az") {
          return a.name.localeCompare(b.name);
        } else if (selection === "za") {
          return b.name.localeCompare(a.name);
        }
        return 0; // Por defecto, no se aplica orden
      });
      dispatch({
        type: ORDER_NAME,
        payload: driversCopy,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//ORDER_BIRTHDAY

export const orderByBirthday = (selection) => {
  return async (dispatch, getState) => {
    try {
      const drivers = getState().driversCopy;
      const driversCopy = [...drivers];

      driversCopy.sort((a, b) => {
        const dateA = new Date(a.dob);
        const dateB = new Date(b.dob);

        if (selection === "ascendente") {
          return dateB - dateA;
        } else if (selection === "descendente") {
          return dateA - dateB;
        }

        return 0;
      });

      dispatch({
        type: GET_DRIVERS,
        payload: driversCopy,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//FILTER_TEAMS
export const filterByTeams = (selection) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_TEAMS,
        payload: selection,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//GET_TEAMS

export const getTeams = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/drivers/teams");

      dispatch({
        type: GET_TEAMS,
        payload: response.data,
      });
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };
};

//FILTER_ORIGIN
export const filterByOrigin = (selection) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_ORIGIN,
        payload: selection,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//FILTER_BY_TEAM_AND_ORIGIN

export const filterByTeamAndOrigin = () => {
  return async (dispatch, getState) => {
    try {
      const originalDrivers = getState().drivers;
      const teamsFilterState = getState().teamsFilter;
      const originFilterState = getState().originFilter;

      const idRegex = /^-?\d+$/;
      const uuidRegex =
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

      let driversCopy = [...originalDrivers];

      if (teamsFilterState.length > 0) {
        driversCopy = driversCopy.filter((driver) => {
          if (driver.teams.includes(teamsFilterState)) {
            return driver;
          }
        });
      }

      if (originFilterState.length > 0) {
        if (originFilterState === "api") {
          driversCopy = driversCopy.filter((driver) => {
            if (idRegex.test(driver.id)) {
              return driver;
            }
          });
        } else {
          driversCopy = driversCopy.filter((driver) => {
            if (uuidRegex.test(driver.id)) {
              return driver;
            }
          });
        }
      }

      dispatch({
        type: FILTER_BY_TEAM_AND_ORIGIN,
        payload: driversCopy,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//POST_DRIVERS

export const postDrivers = (form) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/drivers", form);
      alert("Driver created successfully");
      dispatch({
        type: POST_DRIVERS,
        payload: response.data,
      });
    } catch (error) {
      alert("Error creating driver, try again");
    }
  };
};

//SET_CURRENT_PAGE

export const setCurrentPage = (currentPage) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_CURRENT_PAGE,
         payload: currentPage,
      })
    } catch (error) {
      console.log(error.message);
    }
  }
}
