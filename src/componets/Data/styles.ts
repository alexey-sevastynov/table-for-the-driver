import styled, { css } from "styled-components";

export const Root = styled.div`
  ${({ theme }) => css`
    height: 28px;
    display: flex;

    background-color: ${(props: any) =>
      props.tabIndex === 1 && theme.colors.paid};
    background-color: ${(props: any) =>
      props.tabIndex === 2 && theme.colors.uknown};
    background-color: ${(props: any) =>
      props.tabIndex === 3 && theme.colors.debt};
    background-color: ${(props: any) =>
      props.tabIndex === 4 && theme.colors.other};

    border-radius: ${(props: any) =>
      props.inlist === 1 ? "10px 10px 0px 0px" : null};
    border-radius: ${(props: any) =>
      props.results === props.inlist ? "0px 0px 10px 10px" : null};

    @media (max-width: 690px) {
      border-radius: unset;
    }
  `}
`;
