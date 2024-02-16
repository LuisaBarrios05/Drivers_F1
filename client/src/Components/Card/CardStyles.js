import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: rgba(5, 0, 0, 0.8);
  border-radius: 0px;
  padding: 5px;
  margin: 5px;
  margin-top: 20px;
  cursor: pointer;
  display: inline-block;
  flex: 0 0 auto;
  flex-wrap: wrap;
  width: 250px;
  height: 385px; /* Establece una altura fija para todas las tarjetas */
  vertical-align: bottom;
  transition: transform 0.3s ease-in-out;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  font-size: 0.7em;

  &:hover {
    transform: translateY(-3%);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  }

  h2 {
    font-weight: 500;
    color: white;
    text-decoration: inherit;
  }
`;

export const Image = styled.img`
  max-width: 85%;
  max-height: 45%;

  margin-top: 15px;
`;

export const Text = styled.h2`
  word-wrap: break-word; //las palabras se rompen y van al siguiente renglón cuando el espacio sea insuficiente.
  overflow-wrap: break-word;
`;
