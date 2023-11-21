import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailContainer = styled.div`
  background-color: rgba(5, 0, 0, 0.6);
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
  margin-top: 15px;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  width: 780px;
  min-height: 530px; /* Establece una altura fija para todas las tarjetas */
  column-count: 2; /* Divide el contenido en 2 columnas */
  column-gap: 10px; /* Establece el espacio entre columnas */
  vertical-align: bottom;
  transition: transform 0.3s ease-in-out;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  font-size: 0.7em;
`;

export const Column = styled.div`
  margin-top: 20px;
  flex: 1;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Text = styled.div`
  margin-top: 5px;
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 10px;
  left: 20px;
`;
