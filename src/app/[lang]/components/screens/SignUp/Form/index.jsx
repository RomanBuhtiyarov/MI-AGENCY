"use client";
import { Input } from "../../../UI/Inputs/Input";
import { MultipleSelect } from "../../../UI/Selects/MultipleSelect";
import MainButton from "../../../UI/Buttons/MainButton";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Alert, Modal } from "antd";
import ky from "ky";
import Link from "next/link";
import { validationPassword } from "@/_helpers/validationPassword";
const success = (lang) => {
  Modal.success({
    title: lang.login_page.created_profile.success_modal.title,
    content: (
      <div className="text-left">
        <p className="text-[16px] mb-[10px] font-unbounded">
          {lang.login_page.created_profile.success_modal.text}
        </p>
        <MainButton className="ml-[50px] md:ml-[40px]">
          <Link className="text-white" href={`/${lang.locale}/get-tested`}>
            {lang.login_page.created_profile.success_modal.link}
          </Link>
        </MainButton>
      </div>
    ),
    closable: true,
    centered: true,
    footer: null,
  });
};

export const Form = ({ lang }) => {
  const router = useRouter();
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const passwordRef = useRef(null);
  const [modal, setModal] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [scope, setScope] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [messageError, setMessageError] = useState("");

  const onChangeMultipleSelectScopes = (value) => {
    setScope(value);
  };

  const onCloseErrorAlert = () => {
    setMessageError("");
  };
  const handleSubmitLogin = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const data = {
      username: username,
      password: password,
    };

    try {
      const loginResponse = await ky
        .post(
          `https://psymi.com.ua/${lang.backend_locale}/api/auth/token/login/`,
          {
            json: {
              username: data.username,
              password: data.password,
            },
          }
        )
        .json();
      if (loginResponse.auth_token) {
        localStorage.setItem("authToken", loginResponse.auth_token);
        router.push(`/${lang.locale}/my-profile`);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      setMessageError(error.message);
    }
  };
  const handleSubmitRegister = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const data = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
      re_password: repeatedPassword,
      email: email,
      scope: scope,
    };

    try {
      await ky
        .post(`https://psymi.com.ua/${lang.backend_locale}/api/auth/users/`, {
          json: data,
        })
        .json()
        .then(async () => {
          const loginResponse = await ky
            .post(
              `https://psymi.com.ua/${lang.backend_locale}/api/auth/token/login/`,
              {
                json: {
                  username: data.username,
                  password: data.password,
                },
              }
            )
            .json();
          if (loginResponse.auth_token) {
            localStorage.setItem("authToken", loginResponse.auth_token);
            // Redirect to the "my-profile" page or any other page
            // You can use Next.js router for navigation
            router.push(`/${lang.locale}/my-profile`);
            success(lang);
          }
        })
        .catch((registrationError) => {
          console.log("Registration Error:", registrationError);
          // Handle registration error if needed
        });
    } catch (error) {
      // Set the error message in the component's state
      setMessageError(error.message);
    }
  };

  const handleRegistrationButton = () => {
    const validationResult = validationPassword(password);
    if (email === "") {
      setMessageError("Ви не ввели пошту!");
      return false;
    } else if (username === "") {
      return setMessageError("Щоб продовжити реєстрацію, введіть Ваш нікнейм");
    } else if (first_name === "") {
      return setMessageError("Щоб продовжити реєстрацію, введіть Ваше ім'я");
    } else if (first_name === "") {
      return setMessageError(
        "Щоб продовжити реєстрацію, введіть Ваше прізвище"
      );
    } else if (password === "") {
      setMessageError("Enter your password");
    } else if (password !== repeatedPassword) {
      setMessageError("Passwords do not match");
    } else {
      for (const rule in validationResult) {
        if (validationResult[rule].violated) {
          setMessageError(validationResult[rule].message);
          return;
        }
      }
      setMessageError(""); // Сбрасываем сообщение об ошибке
      handleSubmitRegister(); // Вызываем отправку формы
    }
  };
  const handleLoginButton = () => {
    const validationResult = validationPassword(password);
    if (username === "") {
      return setMessageError("Введіть Ваш нікнейм");
    } else if (password === "") {
      setMessageError("Enter your password");
    } else {
      for (const rule in validationResult) {
        if (validationResult[rule].violated) {
          setMessageError(validationResult[rule].message);
          return;
        }
      }
      setMessageError(""); // Сбрасываем сообщение об ошибке
      handleSubmitLogin(); // Вызываем отправку формы
    }
  };

  return (
    <div className="mb-[50px] md:mb-0 w-full md:w-[350px] bg-white flex flex-col items-center pt-[25px] px-[30px] pb-[30px] rounded-[15px]">
      <h2 className="text-center text-[#347AEC] font-unbounded text-[22px] font-[400] mb-[22px]">
        {!isLoginForm ? "Sign up" : "Log in"}
      </h2>

      <form className="w-[250px] flex flex-col items-center justify-between gap-[25px] py-[30px]">
        {!isLoginForm && (
          <Input
            ref={emailRef}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-[12px] placeholder:text-[12px]"
            placeholder={`${lang.login_page.form.email}*`}
          />
        )}

        <Input
          ref={usernameRef}
          type="username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full text-[12px] placeholder:text-[12px]"
          placeholder={`${lang.login_page.form.username}*`}
        />
        {!isLoginForm && (
          <>
            <Input
              ref={firstnameRef}
              type="firstname"
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full text-[12px] placeholder:text-[12px]"
              placeholder={`${lang.login_page.form.first_name}*`}
            />
            <Input
              ref={lastnameRef}
              type="lastname"
              onChange={(e) => setLastName(e.target.value)}
              className="w-full text-[12px] placeholder:text-[12px]"
              placeholder={`${lang.login_page.form.last_name}*`}
            />
          </>
        )}
        <Input
          ref={passwordRef}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full text-[12px] placeholder:text-[12px]"
          placeholder={`${lang.login_page.form.password}*`}
        />
        {!isLoginForm && (
          <>
            <Input
              ref={passwordRef}
              type="password"
              onChange={(e) => setRepeatedPassword(e.target.value)}
              className="w-full text-[12px] placeholder:text-[12px]"
              placeholder={`${lang.login_page.form.re_password}*`}
            />
            <MultipleSelect
              lang={lang}
              onChange={(value) => onChangeMultipleSelectScopes(value)}
            />
          </>
        )}

        <MainButton
          onClick={!isLoginForm ? handleRegistrationButton : handleLoginButton}
          className="w-[200px] h-[40px] text-[12px]"
          label={
            !isLoginForm
              ? lang.login_page.created_profile.register_btn
              : "Увійти"
          }
        />
      </form>
      <button
        className="text-[#347AEC] hover:text-[#6764E7] duration-500 mx-auto block mt-[15px] px-[20px] font-unbounded"
        onClick={() => setIsLoginForm(!isLoginForm)}
      >
        {!isLoginForm
          ? `${lang.login_page.form.logged_in}`
          : `${lang.login_page.form.registered}`}
      </button>
      {messageError && (
        <Alert
          className="mt-[30px] md:mt-[15px] rounded-t-[0px] border-t-0"
          message={messageError}
          type="info"
          closable
          onClose={onCloseErrorAlert}
        />
      )}
    </div>
  );
};
