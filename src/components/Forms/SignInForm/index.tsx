import Apple from "@assets/icons/redes_socias/apple_black.svg";
import Facebook from "@assets/icons/redes_socias/facebook_blue.svg";
import Google from "@assets/icons/redes_socias/google_red.svg";
import Instagram from "@assets/icons/redes_socias/instagram_linear.svg";
import Button from "@components/Button";
import { ButtonSociais } from "@components/Controllers/ButtonSociais";
import { FooterButton } from "@components/Controllers/FooterButton";
import ModalForgotPassword from "@components/Controllers/ModalForgotPassword";
import InputText from "@components/InputText";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import * as S from "./styles";
import useSignInViewModel from "./ViewModel/useSignInViewModel";

export function SignInForm() {
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
      <S.Title>Entrar</S.Title>
      <InputText
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete="off"
        label="Digite seu E-mail"
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

      <Button
        type={isSubmitButtonAvailable ? "accept" : "cancel"}
        title="Entrar"
        size="large"
        disabled={isSubmitButtonAvailable ? false : true}
        loading={isLoading}
        onPress={() => handleSignIn()}
      />

      <S.SociaisButtons>
        <ButtonSociais icon={Facebook} onPress={() => {}} />
        <ButtonSociais icon={Google} onPress={() => {}} />
        <ButtonSociais icon={Instagram} onPress={() => {}} />
        <ButtonSociais icon={Apple} onPress={() => {}} />
      </S.SociaisButtons>

      <S.Footer>
        <FooterButton
          title="Criar conta"
          icon="person-add"
          onPress={() => navigation.navigate("Register")}
        />
        <FooterButton
          title="Esqueci senha"
          icon="email"
          onPress={handleForgotPassword}
        />
      </S.Footer>
      <ModalForgotPassword
        onAction={() => {}}
        onClose={() => {}}
        isVisible={modalForgotPassword}
      />
    </S.Form>
  );
}
