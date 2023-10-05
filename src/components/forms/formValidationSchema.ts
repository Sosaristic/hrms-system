import * as Yup from "yup"



  export const loginSchema = Yup.object({
    email: Yup.string()
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email address")
      .required("no email provided"),
    password: Yup.string()
      .required("No password provided")
      .min(4, "Password is too short - should be 4 chars minimum.")
      .matches(/[a-zA-Z\d]/, "Password can only contain Latin letters."),
  });

  export const resetPasswordSchema = Yup.object({
    email: Yup.string()
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email address")
      .required("no email provided"),
   
  });

 