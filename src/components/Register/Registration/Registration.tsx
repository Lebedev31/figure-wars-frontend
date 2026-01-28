import styles from "../Register.module.scss";
import { h } from "../../../dom";
import {
  registerState,
  handleNameInputRegistration as handleNameInput,
  handleSubmitRegister,
} from "../Registrer.logic";
import { toggleRegistration } from "../../Main/Main.logic";

export default function Registration() {
  const refsError = {
    login: <p className={styles.error} />,
    email: <p className={styles.error} />,
    password: <p className={styles.error} />,
    confirmPassword: <p className={styles.error} />,
  };
  return (
    <form
      className={styles.form}
      onsubmit={(e: Event) => handleSubmitRegister(e, registerState, refsError)}
    >
      <h2>Регистрация</h2>
      <div className={styles.inputGroup}>
        <input
          type="text"
          className={styles.input}
          placeholder="Введите имя"
          oninput={(e) => handleNameInput(e, registerState, "login")}
        />
        {refsError.login}
        <input
          type="text"
          className={styles.input}
          placeholder="Введите email"
          oninput={(e) => handleNameInput(e, registerState, "email")}
        />
        {refsError.email}

        <input
          type="text"
          className={styles.input}
          placeholder="Введите пароль"
          oninput={(e) => handleNameInput(e, registerState, "password")}
        />
        {refsError.password}
        <input
          type="text"
          className={styles.input}
          placeholder="Введите повторно пароль"
          oninput={(e) => handleNameInput(e, registerState, "confirmPassword")}
        />
        {refsError.confirmPassword}
      </div>
      <button type="submit" className={styles.button}>
        Зарегестрироваться
      </button>
      <div className={styles.link} onclick={() => toggleRegistration("auth")}>
        Уже есть аккаунт? Войти
      </div>
    </form>
  );
}
