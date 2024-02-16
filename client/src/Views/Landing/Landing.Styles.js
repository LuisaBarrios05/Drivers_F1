import styled from "styled-components";

export const Logo = styled.img`
  width: 220px;
  height: auto;
  margin-top: 0px;
  position: sticky;
`;

export const Text = styled.h1`
  font-size: 75px;
  color: white;
  text-shadow: 5px 5px 2px rgba(0, 0, 0, 1); /*3px 3px 1px black */
  margin-top: 0px;
`;

export const Btn = styled.button`
  border-radius: 15px;
  border: none;
  padding: 0.4em 0.8em; 
  font-size: 1em; /* He reducido el tamaño de la fuente */
  color: black; /* Cambié el color del texto a negro */
  font-weight: 500; 
  font-family: inherit;
  background-color: white; 
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s; 

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
  }
`;
