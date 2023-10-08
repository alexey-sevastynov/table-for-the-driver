import styled, { css } from "styled-components";

export const Root = styled.main`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 10px;
    width: 100%;

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
    }
  `}
`;
