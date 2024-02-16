import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between; 
  align-items: center;
  width: 100%; 
  height: 90px; 
  margin-bottom: 10px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.4); /*rgba(0, 0, 0, 0.9) */
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Order = styled.div`
  display: flex; 
  align-items: center; 
  gap: 20px; 
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
  border-radius: 15px;
  border: 1px solid transparent;
  padding: 0.3em 0.5em;
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

export const ResetButton = styled.button`
  border-radius: 15px;
  border: 1px solid transparent;
  padding: 0.3em 0.5em;;
  font-size: 0.9em;
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