import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const TagForm = styled.form`
  background-color: rgba(5, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;
export const LabelForm = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitBtn = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
export const TeamsContainer = styled.div`
  max-height: 130px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 5px;
  margin-bottom: 10px; /* Ajusta el margen inferior según tus necesidades */
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 10px;
  left: 20px;
`;
