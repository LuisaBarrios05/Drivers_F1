import {
  DRIVERS_DETAILS,
  GET_DRIVERS,
  GET_DRIVERS_BY_NAME,
  ORDER_BIRTHDAY,
  ORDER_NAME,
  FILTER_TEAMS,
  GET_TEAMS,
  FILTER_ORIGIN,
  POST_DRIVERS,
} from "./action-types";

let initialState = {
  drivers: [],
  driversCopy: [],
  driversDetail: [],
  teams: [],
  form: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload, //diciendo al reducer que actualice la propiedad drivers en el estado con la nueva lista de conductores obtenida de la acción.
        driversCopy: action.payload,
      };
    case GET_DRIVERS_BY_NAME:
      return {
        ...state,
        driversCopy: action.payload,
      };
    case DRIVERS_DETAILS:
      return {
        ...state,
        driversDetail: action.payload,
      };
    case ORDER_NAME:
      return {
        ...state,
        driversCopy: action.payload,
      };
    case ORDER_BIRTHDAY:
      return {
        ...state,
        driversCopy: action.payload,
      };
    case FILTER_TEAMS:
      return {
        ...state,
        driversCopy: action.payload,
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case FILTER_ORIGIN:
      return {
        ...state,
        driversCopy: action.payload,
      };
    case POST_DRIVERS:
      return {
        ...state,
        form: action.payload,
      };
    default:
      return { ...state };
  }
}
