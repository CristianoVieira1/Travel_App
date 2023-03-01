import Success from "@assets/animations/register-success.json";
import { Lottie } from "@components/Animations/Lottie";
import React, { useRef } from "react";
import Modal from "react-native-modal";
import { useTheme } from "styled-components";

import * as S from "./styles";

export interface ModalSuccessRegisterProps {
  isVisible?: boolean;
  onClose: () => void;
  onAction: () => void;
}

export const TestIds: { [key: string]: string } = {
  rootView: "ModalSuccessRegister/rootView",
};

const ModalSuccessRegister = (props: ModalSuccessRegisterProps) => {
  const { onClose, isVisible, onAction } = props;
  const animation = useRef(null);
  const theme = useTheme();

  return (
    <Modal
      propagateSwipe
      isVisible={isVisible}
      accessibilityHint="Modal de sucesso ao criar conta"
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
          <Lottie source={Success} />
          <S.TextView>
            <S.Title>Conta criada com sucesso!</S.Title>
            <S.Subtitle>Sera redirecionado para o Login</S.Subtitle>
          </S.TextView>
        </S.Container>
      </S.ModalBackground>
    </Modal>
  );
};

export default ModalSuccessRegister;
