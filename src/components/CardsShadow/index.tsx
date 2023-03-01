import React, { Fragment } from "react";
import * as S from "./styles";

interface ICardQuestions {
  title: string;
  description?: string;
  image?: string;
  onClick?: () => void;
}

export const CardsShadow = ({
  title,
  image,
  onClick,
  description,
}: ICardQuestions) => {
  return (
    <S.Container onPress={onClick}>
      <S.Image
        source={{
          uri: image,
        }}
      />
      <S.InsideItemView>
        <S.ItemView>
          <Fragment>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
          </Fragment>
        </S.ItemView>
        <Fragment></Fragment>
      </S.InsideItemView>
    </S.Container>
  );
};
