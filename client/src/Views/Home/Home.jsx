import { useSelector } from "react-redux";
import CardList from "../../Components/CardList/CardList";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [driversPerPage] = useState(8);

  //array de drivers de la pagina actual.

  return (
    <div>
      <CardList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        driversPerPage={driversPerPage}
      />
    </div>
  );
}
