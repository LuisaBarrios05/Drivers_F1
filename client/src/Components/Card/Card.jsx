import { CardContainer, Image, Text } from "./CardStyles";
import { Link } from "react-router-dom";

function Card({ id, name, surname, image, teams }) {
  return (
    <Link to={`/detail/${id}`}>
      <CardContainer>
        <Image src={image} alt={name} />
        <h2>Name: {name}</h2>
        <h2>Surname: {surname}</h2>
        <Text>Teams: {teams}</Text>
      </CardContainer>
    </Link>
  );
}
export default Card;
