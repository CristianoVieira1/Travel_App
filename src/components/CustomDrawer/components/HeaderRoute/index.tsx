import React, { memo } from "react";
import * as S from "./styles";

interface IHeaderRouteProps {
  title: string;
  focused: boolean;
  onSelected?: () => void;
}

function HeaderRoute({ title, focused, onSelected }: IHeaderRouteProps) {
  return (
    <S.Container onPress={onSelected}>
      <S.Bullet focused={focused} />
      <S.Title focused={focused}>{title}</S.Title>
    </S.Container>
  );
}
export default memo(HeaderRoute);
