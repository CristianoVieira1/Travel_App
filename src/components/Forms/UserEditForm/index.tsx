import InputText from "@components/InputText";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import * as S from "./styles";
import useSignInViewModel from "./ViewModel/useSignInViewModel";

export function UserEditForm() {
  const navigation = useNavigation();

  const {
    validationMessage,
    setValidationMessage,
    modalForgotPassword,
    setValidationPassword,
    validationPassword,
    buttonDesabled,
    userDetails,
    isLoading,
    password,
    setPassword,
    email,
    setEmail,
    handleSignIn,
    handleForgotPassword,
    isSubmitButtonAvailable,
  } = useSignInViewModel();

  return (
    <S.Form>
      <InputText
        placeholder="Nome"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete="off"
        label="Nome"
        keyboardType="email-address"
        validation={validationMessage}
        clearValidation={() => setValidationMessage("")}
      />

      <InputText
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete="off"
        label="E-mail"
        keyboardType="email-address"
        validation={validationMessage}
        clearValidation={() => setValidationMessage("")}
      />

      <InputText
        mask={"password"}
        value={password}
        displaySecureIndicator={true}
        autoCorrect={false}
        autoComplete="off"
        autoCapitalize="none"
        validation={validationPassword}
        onChangeText={setPassword}
        label="Digite sua senha"
        placeholder="Senha"
        clearValidation={() => setValidationPassword("")}
        keyboardType="default"
      />
      <InputText
        mask={"password"}
        value={password}
        displaySecureIndicator={true}
        autoCorrect={false}
        autoComplete="off"
        autoCapitalize="none"
        validation={validationPassword}
        onChangeText={setPassword}
        label="Confirmar senha"
        placeholder="Senha"
        clearValidation={() => setValidationPassword("")}
        keyboardType="default"
      />
    </S.Form>
  );
}
