import styled, { css } from "styled-components";

export const Root = styled.div`
  ${() => css`
    display: flex;

    & .col_1 {
      line-height: 32px;
      font-weight: 700;
    }

    & .table {
      margin-top: 32px;
      &__block {
        display: flex;
        &-title,
        &-data {
          line-height: 28px;
        }

        &-title {
          width: 100px;
        }
        &-data {
        }
      }
    }
  `}
`;
