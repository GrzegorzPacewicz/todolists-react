import styled from "styled-components";

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.teal};
  transition: color 0.5s;
  margin: 0 0 0 20px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 0;
  }

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
