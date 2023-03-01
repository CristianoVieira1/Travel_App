export interface IRegisterViewModel {
  isLoading?: boolean;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  name: string;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  validationMessage: string;
  setValidationMessage: (message: string) => void;
  handleNewAccount: () => void;
  modalSuccess: boolean;
  setModalSuccess: (modalSuccess: boolean) => void;
  isSubmitButtonAvailable: boolean;
  validationEmailMessage: string;
  setValidationEmailMessage: (message: string) => void;
}
