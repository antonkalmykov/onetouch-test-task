import styled from "styled-components";

export const StyledPageWrapper = styled.main`
  display: flex;
  width: 1130px;
  flex-direction: column;
  flex-grow: 1;
  align-self: center;

  @media only screen and (max-width: 1200px) {
    width: 85%;
  }
`;
