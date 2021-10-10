import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

export const StyledPageTitle = styled.h2`
  margin: 0;
  font-size: 52px;
  font-weight: 600;
  font-family: "DIN Condensed", sans-serif;
  color: #0037ae;
  text-transform: uppercase;

  @media only screen and (max-width: 620px) {
    font-size: 32px;
  }
`;

export const StyledFiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
