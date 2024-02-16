import styled from "styled-components";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../Redux/actions";

function CardList({ currentPage, setCurrentPage, driversPerPage }) {
  const drivers = useSelector((state) => state.driversCopy); //obtener datos del estado global.

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDriver = drivers.slice(indexOfFirstDriver, indexOfLastDriver);

  const paginate = (page) => {
    dispatch (setCurrentPage(page));
  };

  return (
    <div>
      {currentDriver.map(
        ({
          id,
          name,
          surname,
          description,
          image,
          nationality,
          dob,
          teams,
        }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              surname={surname}
              description={description}
              image={image}
              nationality={nationality}
              dob={dob}
              teams={teams}
            />
          );
        }
      )}
      <Pagination
        driversPerPage={driversPerPage}
        currentPage={currentPage}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
        totalPosts={drivers.length}
      />
    </div>
  );
}
export default CardList;
