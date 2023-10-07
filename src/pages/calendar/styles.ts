import styled, { css } from "styled-components";

export const Root = styled.form`
  ${({ theme }) => css`
    background-color: yellow;
    padding: 0px 5px;

    & h2 {
      text-align: center;
    }
    .calendar__car,
    .calendar__customer,
    .calendar__time,
    .calendar__description {
      padding: 20px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    .calendar__customer {
      & input {
        padding: 2px 20px 5px 5px;
        max-width: 350px;

        border: none;
        border-radius: 0;
        border-bottom: 3px solid ${theme.colors.violet};
        font-size: 20px;
      }

      & select {
        padding: 2px 20px 5px 5px;
        max-width: 350px;

        font-size: 20px;
      }
    }

    .calendar__time {
    }
    .calendar__car {
      ul {
        display: flex;
        justify-content: center;
        gap: 10px;
        li {
          padding: 5px 10px;
          border: 1px solid ${theme.colors.violet};
          font-size: 20px;

          cursor: pointer;
        }

        li.active {
          background-color: ${theme.colors.violet};
          color: white;
        }
      }
    }

    .calendar__date {
      display: flex;
      justify-content: center;
    }

    .calendar__description {
      textarea {
        font-size: 20px;
      }
    }

    & input {
      min-width: 100px;
    }

    .btn {
      margin: 2px;
      padding: 4px 5px;
      font-size: 20px;
    }
  `}
`;
