import { useSession } from "@context/Session";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { isValidEmail } from "../../../../utils/validations";
import { IRegisterViewModel } from "../Interface/IRegisterViewModel";

const useRegisterViewModel = () => {
  const navigation = useNavigation();
  const { setSession } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [validationEmailMessage, setValidationEmailMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (modalSuccess) {
        setModalSuccess(false);
        navigation.navigate("SignIn");
      }
    }, 3000);
  }, [modalSuccess]);

  function cleanInputs() {
    setEmail("");
    setPassword("");
    setName("");
  }

  async function handleNewAccount() {
    setIsLoading(true);
    if (isValidEmail(email)) {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          auth.arguments = {
            displayName: name,
          };
          setSession((prevSession) => ({
            ...prevSession,
            autenticated: false,
          }));
          handleModalSuccess();
          setIsLoading(false);
          cleanInputs();
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setValidationEmailMessage("Endereço de email já cadastrado!");
          }

          if (error.code === "auth/invalid-email") {
            setValidationEmailMessage("Esse endereço de e-mail é inválido!");
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
    setIsLoading(false);
    setValidationEmailMessage("Esse endereço de e-mail é inválido!");
  }

  function handleModalSuccess() {
    setModalSuccess(!modalSuccess);
  }

  const isSubmitButtonAvailable = (): boolean => {
    return name.length >= 3 && isValidEmail(email) && password.length >= 6;
  };

  const viewModel: IRegisterViewModel = {
    email,
    name,
    setName,
    setEmail,
    password,
    isLoading,
    setPassword,
    modalSuccess,
    setModalSuccess,
    handleNewAccount,
    validationMessage,
    setValidationMessage,
    validationEmailMessage,
    setValidationEmailMessage,
    isSubmitButtonAvailable: isSubmitButtonAvailable(),
  };

  return viewModel;
};

export default useRegisterViewModel;
