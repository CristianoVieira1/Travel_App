import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import signInAnimation from "@assets/animations/signIn.json";
import { Lottie } from "@components/Animations/Lottie";
import { RegisterForm } from "@components/Forms/RegisterForm";

import Header from "@components/Header";
import * as S from "./styles";

export function Register() {
  return (
    <S.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Header colorIconBack="black" statusBar="dark" />
        <S.Content>
          <Lottie source={signInAnimation} />
          <S.SubTitle>
            Faça seu cadastro e conhaça seu proximo destino!
          </S.SubTitle>
          <RegisterForm />
        </S.Content>
      </KeyboardAvoidingView>
    </S.Container>
  );
}
