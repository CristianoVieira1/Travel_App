import Email from "@assets/animations/email.json";
import { Lottie } from "@components/Animations/Lottie";
import React, { useRef } from "react";
import Modal from "react-native-modal";
import { useTheme } from "styled-components";

import * as S from "./styles";

export interface IModalForgotPasswordProps {
  isVisible?: boolean;
  onClose: () => void;
  onAction: () => void;
}

export const TestIds: { [key: string]: string } = {
  rootView: "ModalForgotPassword/rootView",
};

const ModalForgotPassword = (props: IModalForgotPasswordProps) => {
  const { onClose, isVisible, onAction } = props;
  const animation = useRef(null);
  const theme = useTheme();

  return (
    <Modal
      propagateSwipe
      isVisible={isVisible}
      accessibilityHint="Modal de sucesso ao criar conta"
      swipeDirection={"down"}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      animationIn={"bounceIn"}
      onBackButtonPress={onClose}
      animationOut={"bounceInDown"}
      style={{
        justifyContent: "center",
        margin: 0,
        flex: 1,
        padding: 20,
        backgroundColor: theme.colors.backgroundOpacity,
      }}
    >
      <S.ModalBackground>
        <S.Container>
          <Lottie source={Email} />
          <S.TextView>
            <S.Title>
              Solicitação de recuperação de senha, enviada com sucesso!
            </S.Title>
            <S.Subtitle>
              Siga as instruções que enviamos para seu email.
            </S.Subtitle>
          </S.TextView>
        </S.Container>
      </S.ModalBackground>
    </Modal>
  );
};

export default ModalForgotPassword;
