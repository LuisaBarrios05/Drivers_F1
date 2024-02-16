import styled from "styled-components";

export const Btn = styled.button`
  border-radius:15px;;
  border: 1px solid transparent;
  padding: 0.3em 0.5em;;
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

export const Input = styled.input`
  width: 200px;
  height: 26px;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
