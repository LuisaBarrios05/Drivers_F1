import styled from "styled-components";
import Card from "../Card/Card";

function CardList({ drivers }) {
  return (
    <div>
      {drivers.map(
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
    </div>
  );
}
export default CardList;
