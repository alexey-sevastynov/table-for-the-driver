import React from "react";

import * as S from "./styles";

interface IButtonProps {
  label: string;
  isUnActive?: boolean;
  // click?: () => void | undefined;
  click?: any;
}

const Button: React.FC<IButtonProps> = ({
  label,
  isUnActive,
  click,

  ...props
}) => {
  return (
    <S.Root
      className={isUnActive ? "unActive" : ""}
      onClick={click}
      type={label === "edit" || label === "delete" ? "button" : "submit"}
      {...props}
    >
      {label}
    </S.Root>
  );
};

export default Button;
