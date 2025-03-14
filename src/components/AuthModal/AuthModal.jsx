import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Modal from "../Modal/Modal.jsx";
import { auth } from "../../../fireBase.js";
import css from "./AuthModal.module.css";

const loginShema = yup.object().shape({
  email: yup.string().email("Wrong email").required("Email is requiered"),
  password: yup
    .string()
    .min(6, "Password must include at least 6 symbols")
    .required("Passsword is required"),
});

const registerSchema = yup.object().shape({
  name: yup.string().required("Name is requiered"),
  email: yup.string().email("Wrong email").required("Email is requiered"),
  password: yup
    .string()
    .min(6, "Password must include at least 6 symbols")
    .required("Passsword is required"),
});

const AuthModal = ({ isOpen, onClose, isRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isRegister ? registerSchema : loginShema),
  });
  const onSubmit = async (data) => {
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        alert("Реєстрація успішна!");
      } else {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        alert("Вхід успішний!");
      }
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>{isRegister ? "Registration" : "Log In"}</h2>
      <p>
        {isRegister
          ? "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
          : "Welcome back! Please enter your credentials to access your account and continue your search for a psychologist."}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isRegister && (
          <>
            <input type="text" placeholder="name" {...register("name")} />
            <p className={css.error}>{errors.name?.message}</p>
          </>
        )}
        <input type="email" placeholder="Email" {...register("email")} />
        <p className={css.error}>{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p className={css.error}>{errors.password?.message}</p>

        {isRegister && (
          <>
            <input
              type="password"
              placeholder="Підтвердіть пароль"
              {...register("confirmPassword")}
            />
            <p className="error">{errors.confirmPassword?.message}</p>
          </>
        )}

        <button type="submit">{isRegister ? "Sign up" : "Log In"}</button>
      </form>
    </Modal>
  );
};

export default AuthModal;
