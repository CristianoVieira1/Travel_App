import Button from "@components/Button";
import ModalSuccessRegister from "@components/Controllers/ModalSuccesRegister";
import InputText from "@components/InputText";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import * as S from "./styles";
import useRegisterViewModel from "./ViewModel/useRegisterViewModel";

export function RegisterForm() {
  const {
    validationMessage,
    setValidationMessage,
    validationEmailMessage,
    setValidationEmailMessage,
    handleNewAccount,
    isSubmitButtonAvailable,
    isLoading,
    password,
    setPassword,
    modalSuccess,
    email,
    setEmail,
    name,
    setName,
  } = useRegisterViewModel();
  const navigation = useNavigation();

  return (
    <S.Form>
      <S.Title>Cadastrar</S.Title>

      <InputText
        value={name}
        placeholder="Nome"
        autoCorrect={false}
        keyboardType="default"
        onChangeText={setName}
        label="Digite seu nome"
        validation={validationMessage}
        clearValidation={() => setValidationMessage("")}
      />

      <InputText
        value={email}
        autoCorrect={false}
        placeholder="E-mail"
        autoCapitalize="none"
        onChangeText={setEmail}
        label="Digite seu E-mail"
        keyboardType="email-address"
        validation={validationEmailMessage}
        clearValidation={() => setValidationEmailMessage("")}
      />

      <InputText
        mask={"password"}
        value={password}
        placeholder="Senha"
        autoCapitalize="none"
        keyboardType="default"
        label="Digite sua senha"
        onChangeText={setPassword}
        displaySecureIndicator={true}
        validation={validationMessage}
        clearValidation={() => setValidationMessage("")}
      />
      <S.ViewButton>
        <Button
          size="large"
          title="Cadastrar"
          loading={isLoading}
          // disabled={isSubmitButtonAvailable}
          onPress={() => handleNewAccount()}
          type={isSubmitButtonAvailable ? "accept" : "cancel"}
        />
      </S.ViewButton>

      <ModalSuccessRegister
        onAction={() => {}}
        onClose={() => {}}
        isVisible={modalSuccess}
      />
    </S.Form>
  );
}
