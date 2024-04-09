import { makeAutoObservable } from "mobx";

interface InpData {
  login: string;
  password: string;
  confirmpassword: string;
}

class SignUpStore {
  inpData: InpData = {
    login: "",
    password: "",
    confirmpassword: "",
  };

  inpDataErr = {
    loginErr: "",
    passwordErr: "",
    confirmpasswordErr: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  updateInpData = (key: keyof InpData, value: string) => {
    this.inpDataErr = {
      ...this.inpDataErr,
      [key + "Err"]: "",
    };
    this.inpData[key] = value;
    if (key === 'password' && this.inpData.confirmpassword !== "") {
      this.validateData();
    }
  };

  clickHandler = (navigateCallback: Function) => {
    this.validateData();
    if (Object.values(this.inpDataErr).some((i) => i !== "")) return;
    navigateCallback("/login");
  };

  validateData = () => {
    if (this.inpData.login === "")
      this.inpDataErr.loginErr = "Логин не может быть пустым";
    else if (!/^(?=.*[A-Za-z])(?=.*\d)?[A-Za-z\d]+$/.test(this.inpData.login))
      this.inpDataErr.loginErr = "Некорретный логин";

    if (this.inpData.password === "")
      this.inpDataErr.passwordErr = "Пароль не может быть пустым";
    else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]+$/.test(this.inpData.password)
    )
      this.inpDataErr.passwordErr = "Ваш пароль слишком простой";

    if (this.inpData.confirmpassword === "")
      this.inpDataErr.confirmpasswordErr = "Подтвердите пароль";
    else if (this.inpData.confirmpassword !== this.inpData.password)
      this.inpDataErr.confirmpasswordErr = "Пароли не совпадают";
  };
}

export const signUpStore = new SignUpStore();
