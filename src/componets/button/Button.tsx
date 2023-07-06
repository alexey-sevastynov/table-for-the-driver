import React from "react";

import * as S from "./styles";

interface IButtonProps {
  label: string;
  isUnActive?: boolean;
}

const Button: React.FC<IButtonProps> = ({ label, isUnActive }) => {
  return (
    <S.Root itemScope={isUnActive} type="submit">
      {label}
    </S.Root>
  );
};

export default Button;
