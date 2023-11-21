import { useSelector } from "react-redux";
import CardList from "../../Components/CardList/CardList";

export default function Home() {
  const drivers = useSelector((state) => state.driversCopy); //obtener datos del estado global.

  return (
    <div>
      <CardList drivers={drivers} />
    </div>
  );
}
