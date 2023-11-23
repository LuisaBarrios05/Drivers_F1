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
