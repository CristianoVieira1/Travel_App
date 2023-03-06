import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import signInAnimation from "@assets/animations/signIn.json";
import { Lottie } from "@components/Animations/Lottie";
import { SignInForm } from "@components/Forms/SignInForm";

import Header from "@components/Header";
import * as S from "./styles";

export function SignIn() {
  return (
    <S.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Header colorIconBack="black" statusBar="dark" />
        <S.Content>
          <Lottie source={signInAnimation} />
          <S.SubTitle>Bem vindo de volta!</S.SubTitle>
          <SignInForm />
        </S.Content>
      </KeyboardAvoidingView>
    </S.Container>
  );
}
