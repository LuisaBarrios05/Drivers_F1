import { NavContainer, Order, FilterSelect } from "./NavBarStyles";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import {
  filterByTeams,
  orderByBirthday,
  orderByName,
  getTeams,
  filterByOrigin,
} from "../../Redux/actions";

export default function NavBar({ getDriversByName }) {
  const dispatch = useDispatch();
  const [teams, setTeams] = useState([]);

  //orderByName
  const handleOrderChange = (event) => {
    const selection = event.target.value;
    dispatch(orderByName(selection));
  };

  //orderByBirthday
  const handleOrderByBirthdayChange = (event) => {
    const selection = event.target.value;
    dispatch(orderByBirthday(selection));
  };

  //filterByTeams
  const handleFilterByTeamsChange = (event) => {
    const selection = event.target.value;
    dispatch(filterByTeams(selection));
  };

  //getTeams

  useEffect(() => {
    dispatch(getTeams())
      .then((response) => {
        // Actualiza el estado local con la lista de equipos
        setTeams(response.data);
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
      });
  }, [dispatch]);

  //filterByTeams
  const handleFilterByOriginChange = (event) => {
    const selection = event.target.value;
    dispatch(filterByOrigin(selection));
  };
  return (
    <NavContainer>
      <Link to="/home">Home</Link>
      <SearchBar getDriversByName={getDriversByName} />

      <Order>
        <select name="orderByName" defaultValue="" onChange={handleOrderChange}>
          <option value="orderDriver" disabled="disabled">
            Order Name A-Z
          </option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>

        <select
          name="orderByBirthday"
          defaultValue=""
          onChange={handleOrderByBirthdayChange}
        >
          <option value="orderDriver" disabled="disabled">
            Order by birthday
          </option>
          <option value="ascendente"> - + </option>
          <option value="descendente"> + - </option>
        </select>

        <label htmlFor="teams">Select team:</label>
        <FilterSelect id="teams" onChange={handleFilterByTeamsChange}>
          <option value="" disabled>
            Select a team
          </option>
          {teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </FilterSelect>

        <label htmlFor="origin">Select origin:</label>
        <FilterSelect id="origin" onChange={handleFilterByOriginChange}>
          <option value="" disabled>
            Select a origin
          </option>
          <option value="api">API</option>
          <option value="db">DB</option>
        </FilterSelect>
      </Order>
    </NavContainer>
  );
}
