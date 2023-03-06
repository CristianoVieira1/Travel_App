import React from "react";
import * as Animatable from "react-native-animatable";
import { useTheme } from "styled-components";
import LoadingContent from "../LoadingContent";

import * as S from "./styles";

interface ICardPermissionProps {
  title: string;
  description: string;
  isLoading: boolean;
  onPress: () => void;
}
export const CardPermission = ({
  title,
  onPress,
  isLoading,
  description,
}: ICardPermissionProps) => {
  const theme = useTheme();
  return (
    <>
      <S.Container>
        <S.Content>
          <Animatable.View delay={1200} animation="fadeInLeft">
            <S.Card>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
            </S.Card>
          </Animatable.View>
          <Animatable.View delay={1500} animation="fadeInLeft">
            <S.ButtonArea>
              <S.SubmitButton onPress={onPress} disabled={false}>
                <LoadingContent
                  loadingColor={theme.colors.white}
                  isLoading={isLoading}
                >
                  <S.SubmitText>{title}</S.SubmitText>
                </LoadingContent>
              </S.SubmitButton>
            </S.ButtonArea>
          </Animatable.View>
        </S.Content>
      </S.Container>
    </>
  );
};
