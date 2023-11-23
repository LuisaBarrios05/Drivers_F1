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
  border-radius: 8px;
  border: 1px solid black;
  padding: 0.4em 0.6em;
  font-size: 1.2em;
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
