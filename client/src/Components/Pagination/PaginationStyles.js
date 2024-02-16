import styled from "styled-components";

export const PaginationComponent = styled.div`
  margin: 27px 0 0px;
`;

export const UlPagination = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  gap: 11px;
`;

export const LiPagination = styled.li`
  border-radius: 5px;
  overflow: hidden;
`;

export const ButtonPage = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: var(--azul-oscuro);
  height: 50px;
  width: 50px;
  background-color: var(--paginado);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--naranja);
    color: var(--blanco);
  }

  &.active {
    background-color: var(--naranja);
    color: var(--blanco);
  }
`;

export const CurrentPageIndicator = styled.span`
 display: inline-block;
  width: 24px; /* Ancho y alto del círculo */
  height: 24px;
  border-radius: 50%; /* Hacer que el indicador sea un círculo */
  border: 2px solid white;
  color: var(--blanco); /* Color del número */
  font-size: 12px; /* Tamaño de la fuente del número */
  font-weight: bold; /* Peso de la fuente del número */
  text-align: center;
  line-height: 24px; /* Centrar el número verticalmente */
  display: flex;
  justify-content: center;
  align-items: center;
`;
