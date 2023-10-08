import React from "react";

import * as S from "./styles";
import { getImageUrl } from "../../helpers/getImageUrl";
import { useAppDispatch } from "../../redux/hook";
import { openPopup } from "../../redux/slices/calendarSlice";

interface CreateEventButtonProps {}

export const CreateEventButton: React.FC<CreateEventButtonProps> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <S.Root onClick={() => dispatch(openPopup())}>
      <img src={getImageUrl("plus.svg")} alt="plus" width={30} height={30} />
      <span>Create</span>
    </S.Root>
  );
};
