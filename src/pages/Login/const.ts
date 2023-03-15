import * as Yup from "yup";

import { emailValidation, requierdField } from "../../consts/validation";

import { User } from "../../types/user";

export const loginFormInitialValues: User = {
  email: "",
  password: "",
};

export const loginValidationSchema: Yup.ObjectSchema<User> = Yup.object().shape(
  {
    email: Yup.string().email(emailValidation).required(requierdField),
    password: Yup.string().required(requierdField),
  }
);
