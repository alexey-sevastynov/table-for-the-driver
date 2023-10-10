import styled, { css } from "styled-components";

interface DivProps {
  active?: boolean | undefined;
}

export const Root = styled.div<DivProps>`
  ${({ theme, active }) => css`
    border: 2px solid ${theme.colors.violet};

    background-color: ${active ? theme.colors.violet : "none"};

    header {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        text-align: center;
        padding: 5px 7px;
        color: ${active ? theme.colors.white : "none"};
        font-weight: ${active ? 700 : "none"};
      }

      .weekend {
        color: ${theme.colors.error};
      }
    }
  `}
`;
