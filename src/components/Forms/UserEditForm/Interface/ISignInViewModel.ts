import { User } from "../../../../types/Account";

export interface ISignInViewModel {
  handleSignIn: () => void;
  userDetails?: User;
  isLoading?: boolean;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  validationMessage: string;
  setValidationMessage: (message: string) => void;
  setValidationPassword: (message: string) => void;
  validationPassword: string;
  handleForgotPassword?: () => void;
  modalForgotPassword: boolean;
  buttonDesabled: boolean;
  isSubmitButtonAvailable: boolean;
}
