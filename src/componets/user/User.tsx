import React from "react";
import * as S from "./styles";
import { getImageUrl } from "../../helpers/getImageUrl";

interface IUserProps {
  image: string;
  name: string;
  description: string;
}

const User: React.FC<IUserProps> = ({ image, name, description }) => {
  return (
    <S.Root>
      <img src={getImageUrl(image)} alt="foto" width={50} height={50} />
      <div>
        <h4>{name}</h4>
        <h5>{description}</h5>
      </div>
    </S.Root>
  );
};

export default User;
