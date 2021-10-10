import styled from "styled-components";

export const StyledCategory = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
`;

export const StyledTitle = styled.h3`
  margin: 10px 0;
  color: #0037ae;
  font-size: 36px;
  font-weight: 600;
  font-family: DIN Condensed, sans-serif;
  text-transform: uppercase;
`;

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 15px 15px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;
