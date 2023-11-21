import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDriversDetails } from "../../Redux/actions";
import { Link } from "react-router-dom";
import { Column, DetailContainer, Image, Text, BackLink } from "./DetailStyles";

export default function getDetails() {
  //{
  //   name,
  //   surname,
  //   description,
  //   image,
  //   nationality,
  //   dob,
  //   teams,
  // }
  const { id } = useParams();

  const dispatch = useDispatch();

  const driversDetails = useSelector((state) => state.driversDetail);

  useEffect(() => {
    dispatch(getDriversDetails(id));
  }, [dispatch, id]);

  return (
    <div key={id}>
      <BackLink to="/home">Back</BackLink>
      <DetailContainer>
        <Column>
          <Image
            src={
              driversDetails.image
                ? driversDetails.image
                : "https://i.pinimg.com/originals/47/39/e3/4739e35380949bf5e22983a8c5adc3f8.jpg"
            }
            alt="Can't found the image."
          />
        </Column>
        <Column>
          <Text>
            <h2>Name: {driversDetails.name}</h2>
            <h2>Surname: {driversDetails.surname}</h2>
            <h2>Description: {driversDetails.description}</h2>
            <h2>Nationality: {driversDetails.nationality}</h2>
            <h2>Birthdate: {driversDetails.dob}</h2>
            <h2>Teams: {driversDetails.teams}</h2>
          </Text>
        </Column>
      </DetailContainer>
    </div>
  );
}
{
  /* <div key={id}>
{driversDetails.length > 0 ? (
  <div>
    <h2>Name: {driversDetails[0].name}</h2>
    <h2>Surname: {driversDetails[0].surname}</h2>
    <h2>Description: {driversDetails[0].description}</h2>
    <img
      src={
        driversDetails[0].image
          ? driversDetails[0].image
          : "https://i.pinimg.com/originals/47/39/e3/4739e35380949bf5e22983a8c5adc3f8.jpg"
      }
      alt="Can't found the image."
    />
    <h2>Nationality: {driversDetails[0].nationality}</h2>
    <h2>Birthdate: {driversDetails[0].dob}</h2>
    <h2>Teams: {driversDetails[0].teams}</h2>
  </div>
) : (
  <p>Volver a Home</p>
)}
</div> */
}
