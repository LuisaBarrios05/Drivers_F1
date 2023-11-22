import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column; /* Alinea los elementos en dirección vertical */
  justify-content: space-between; /* Alinea los elementos a los extremos */
  align-items: center;
  width: 100%; /* Ancho del 100% del contenedor padre (pantalla completa) */
  height: 90px; /* Altura deseada */
  margin-bottom: 10px;
  padding: 15px;
  /* border-radius: 15px; */
  background-color: rgba(255, 255, 255, 0.2); /*rgba(0, 0, 0, 0.9) */
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Order = styled.div`
  display: flex; /* Utiliza flexbox */
  align-items: center; /* Centra verticalmente los elementos dentro de Order */
  gap: 20px; /* Añade un espacio de 10px entre los elementos hijos */
  justify-content: space-between;
`;

export const FilterSelect = styled.select`
  /* width: 400px;
  height: 20px; */
`;

export const TopContainer = styled.div`
  width: 100%;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const Logo = styled.img`
  width: 95px;
  height: auto;
  margin-top: 0px;
  position: sticky;
`;

export const Btn = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.4em 0.6em;
  font-size: 1em;
  color: black;
  font-weight: 500;
  font-family: inherit;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    transform: translateY(-3%);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.9);
  }
`;
