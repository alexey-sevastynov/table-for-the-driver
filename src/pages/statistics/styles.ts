import styled, { css } from "styled-components";

export const Root = styled.div`
  ${() => css`
    margin: 20px auto;

    width: 210mm;
    box-shadow: 0px 1px 10px grey;

    background-color: white;

    & .statistics {
      padding: 10mm 20mm 20mm 10mm;

      &__title {
        text-align: center;
      }

      &__date {
        width: 20mm;
      }

      &__item {
        padding-left: 20mm;
        display: flex;

        &-id {
          width: 5mm;
        }

        &-customer {
          width: 35mm;
        }

        &-hours,
        &-km,
        &-income {
          width: 15mm;
          margin: 0mm 2mm;
          display: flex;
          justify-content: space-between;
        }

        &-income {
          width: 20mm;
        }
        &-status {
          text-align: right;
          width: 50mm;
        }
      }

      &__total {
        &-list {
          padding-left: 20mm;
        }

        &-salary {
          padding-top: 5mm;
          padding-left: 20mm;
        }
      }

      & .btns {
        float: right;
      }
    }

    @media (max-width: 600px) {
      margin: 0px;
    }

    @media print {
      margin: 0px;
      box-shadow: none;

      & .btns {
        display: none;
      }
    }
  `}
`;
