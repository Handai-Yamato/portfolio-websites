import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <ButtonContainer>
      <PrimaryButton>{props.text}</PrimaryButton>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  display: inline-block;
`;

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  padding: 8px 16px;
  font-weight: 700;
  border-radius: 8px;
  border: 1px solid #81e6d9;
  color: #202023;
  background-color: #81e6d9;
`;
