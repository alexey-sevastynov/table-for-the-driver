import React from "react";

import * as S from "./styles";

interface IButtonProps {
  label: string;
  isUnActive?: boolean;
  // click?: () => void | undefined;
  click?: any;
}

const Button: React.FC<IButtonProps> = ({ label, isUnActive, click }) => {
  return (
    <S.Root onClick={click} itemScope={isUnActive} type="submit">
      {label}
    </S.Root>
  );
};

export default Button;
