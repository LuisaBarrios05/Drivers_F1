import styled from "styled-components";

export const NavContainer = styled.div`
  /* background-color: #0d1523; */
  width: 100%; /* Ancho del 100% del contenedor padre (pantalla completa) */
  height: 60px; /* Altura deseada */
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Order = styled.div`
  display: flex; /* Utiliza flexbox */
  align-items: center; /* Centra verticalmente los elementos dentro de Order */
  gap: 10px; /* Añade un espacio de 10px entre los elementos hijos */
`;

export const FilterSelect = styled.select`
  /* width: 400px;
  height: 20px; */
`;
