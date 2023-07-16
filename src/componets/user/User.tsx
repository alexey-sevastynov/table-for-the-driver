import React from "react";
import * as S from "./styles";
import { getImageUrl } from "../../helpers/getImageUrl";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { loginIn } from "../../redux/slices/worksSlice";

interface IUserProps {
  image: string;
  name: string;
  description: string;
}

const User: React.FC<IUserProps> = ({ image, name, description }) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((props) => props.works.isAuth);

  const clickUser = () => {
    if (isAuth) return;
    if (prompt("Введіть пароль") === "12345") {
      dispatch(loginIn());
    } else {
      alert("Не вірний пароль!");
    }
  };

  return (
    <S.Root isauth={isAuth} onClick={clickUser}>
      <img src={getImageUrl(image)} alt="foto" width={50} height={50} />
      <div>
        <h4>{name}</h4>
        <h5>{description}</h5>
      </div>
    </S.Root>
  );
};

export default User;
