import { useSession } from "@context/Session";
import auth from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import { isValidEmail } from "../../../../utils/validations";
import { ISignInViewModel } from "../Interface/ISignInViewModel";

const useSignInViewModel = () => {
  const { handleSigInGoogle } = useSession();
  const { setSession } = useSession();
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [validationPassword, setValidationPassword] = useState("");
  const [modalForgotPassword, setModalForgotPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const buttonDesabled = isValidEmail(email) || password.length < 6;

  const isSubmitButtonAvailable = (): boolean => {
    return isValidEmail(email) && password.length >= 6;
  };

  useEffect(() => {
    // GoogleSignin.configure({});
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (modalForgotPassword) {
        setModalForgotPassword(false);
      }
    }, 5000);
  }, [modalForgotPassword]);

  function cleanInputs() {
    setEmail("");
    setPassword("");
  }

  const loginGoogle = async (): Promise<void> => {
    setIsLoading(true);
    await handleSigInGoogle();
    setIsLoading(false);
  };

  function handleSignIn() {
    setIsLoading(true);
    if (isValidEmail(email)) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          console.log("response====", response.user);
          setSession((prevSession) => ({
            ...prevSession,
            autenticated: true,
          }));

          setIsLoading(false);
          cleanInputs();
        })
        .catch((error: any) => {
          if (error.code === "auth/invalid-email") {
            setValidationMessage("Esse endereço de e-mail é inválido!");
          }

          if (error.code === "auth/user-not-found") {
            setValidationMessage("Usuário não encontrado!");
          }

          if (error.code === "auth/wrong-password") {
            setValidationPassword("Senha incorreta!");
          }
          cleanInputs();
          setIsLoading(false);
        })
        .finally(() => {
          cleanInputs();
          setIsLoading(false);
        });
      return;
    }
    setValidationMessage("Esse endereço de e-mail é obrigatório!");
    setIsLoading(false);
  }

  function handleForgotPassword() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        handleModalSuccess();
      })
      .catch((error: any) => {
        if (error.code === "auth/invalid-email") {
          setValidationMessage("Esse endereço de e-mail é inválido!");
        }

        if (error.code === "auth/user-not-found") {
          setValidationMessage("Usuário não encontrado!");
        }
        cleanInputs();
      })
      .finally(() => {
        cleanInputs();
      });
  }
  function handleModalSuccess() {
    setModalForgotPassword(!modalForgotPassword);
  }

  const viewModel: ISignInViewModel = {
    validationMessage,
    modalForgotPassword,
    setValidationPassword,
    validationPassword,
    setValidationMessage,
    handleForgotPassword,
    buttonDesabled,
    handleSignIn,
    isLoading,
    password,
    setPassword,
    email,
    setEmail,
    isSubmitButtonAvailable: isSubmitButtonAvailable(),
  };

  return viewModel;
};

export default useSignInViewModel;
