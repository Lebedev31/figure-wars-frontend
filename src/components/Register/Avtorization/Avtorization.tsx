import styles from "../../Register/Register.module.scss";
import { h } from "../../../dom";
import {
  authState,
  handleNameInputAuth as handleNameInput,
  handleSubmit,
} from "../../Register/Registrer.logic";
import { AuthShema } from "../../../type/register";
import { toggleRegistration } from "../../Main/Main.logic";

export default function Avtorization() {
  const refsError = {
    email: <p className={styles.error} />,
    password: <p className={styles.error} />,
  };

  return (
    <form
      className={styles.form}
      onsubmit={(e: Event) => handleSubmit(e, authState, refsError, AuthShema)}
    >
      <h2>Регистрация</h2>
      <div className={styles.inputGroup}>
        <input
          type="text"
          className={styles.input}
          placeholder="Введите email"
          oninput={(e) => handleNameInput(e, authState, "email")}
        />
        {refsError.email}

        <input
          type="text"
          className={styles.input}
          placeholder="Введите пароль"
          oninput={(e) => handleNameInput(e, authState, "password")}
        />
        {refsError.password}
      </div>
      <button type="submit" className={styles.button}>
        Войти
      </button>
      <div
        className={styles.link}
        onclick={() => toggleRegistration("register")}
      >
        Создать аккаунт
      </div>
    </form>
  );
}
