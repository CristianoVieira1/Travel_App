export type ParamList = {
  SplashScreen: undefined;
  Location: undefined;
  Onboard: undefined;
  InitialAccess: undefined;
  Logado: undefined;
  Home: undefined;
  SignIn: undefined;
  Register: undefined;
  HomeDetails:
    | {
        item?: {
          id: string;
          image: string;
          state: string;
        };
      }
    | undefined;

  Profile: undefined;
  Attractions: undefined;
};
