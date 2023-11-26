"use client";

import { Input } from "@/components/UI/Inputs/Input";
import { MultipleSelect } from "@/components/UI/Selects/MultipleSelect";
import MainButton from "@/components/UI/Buttons/MainButton";
import { useRef, useState } from "react";
import { Alert, Modal } from "antd";
import ky from "ky";
import Link from "next/link";
import { useSession } from "next-auth/react";

const success = () => {
  Modal.success({
    title: "Успіх!",
    content: (
      <>
        <div>
          <p className="text-[16px] font-unbounded">
            Ви успішно зареєструвалися
          </p>
          <MainButton>
            <Link href={"/get-tested"}>Перейти до тестів</Link>
          </MainButton>
        </div>
      </>
    ),
    closable: true,
    centered: true,
    footer: null,
  });
};

const CreatedProfile = ({ session }) => {
  const [modal, setModal] = useState(false);

  const [scopes, setScopes] = useState([]);
  const [username, setUsername] = useState("");
  const [messageError, setMessageError] = useState("");

  const onChangeMultipleSelectScopes = (value) => {
    setScopes(value);
  };

  const onCloseErrorAlert = () => {
    setMessageError("");
  };

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const data = {
      username: username,
      // password: password,
      email: session.user.email,
      scopes,
      isRegistered: !session.user.isRegistered,
      // image: "",
    };
    // if (email === "" || password === "") {
    //   return false;
    // }

    // if (
    //   !/^\S*$/.test(password) ||
    //   !/^(?=.*[A-Z]).*$/.test(password) ||
    //   !/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)
    // ) {
    //   return false;
    // }

    await ky
      .put("/api/auth/sign-up", { json: data })
      .json()
      .then(() => success())
      .catch((err) => console.log(err));
  };

  // const lastStepRegister = () => {
  //   setMessageError("");
  //   setModal(!modal);
  // };

  const handleRegistrationButton = () => {
    if (scopes.length === 0) {
      setMessageError("Ви не обрали не один напрямок діяльності");
    } else if (username === "") {
      setMessageError("Щоб продовжити реєстрацію, введіть Ваше ім'я");
    } else {
      setMessageError(""); // Сбрасываем сообщение об ошибке
      handleSubmit(); // Вызываем отправку формы
    }
  };

  return (
    <section className="bg-white shadow-2xl w-[545px] h-[239px] pt-[25px] px-[30px] pb-[30px] rounded-[15px] my-[30px]">
      <h2 className="text-center text-[#347AEC] font-unbounded text-[22px] font-[400] mb-[22px]">
        Створити профіль
      </h2>
      {/* {modal && (
        <Modal
          open={modal}
          onOk={() => setModal(!modal)}
          onCancel={() => setModal(!modal)}
          title="Реєстрація"
          closable={true}
          maskClosable={true}
          centered={true}
          width="50%"
          footer={null}
        >
          <section>
            <h2 className="text-[16px] text-center font-unbounded">
              Ще залишилося зовсім трохи, для завершення реєстрації <br /> Вам
              потрібно вказати Вашу <span className="font-[600]">Email</span>{" "}
              адресу та пароль від облікового запису{" "}
              <span className="font-[600]">psyMI</span>
            </h2>
            <form
              onSubmit={handleSubmit}
              className="w-[100%] flex items-center justify-between gap-[25px] py-[30px]"
            >
              <Input
                ref={emailRef}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-[16px] placeholder:text-[16px]"
                placeholder="Email адреса*"
              />
              <Input
                ref={passwordRef}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-[16px] placeholder:text-[16px]"
                placeholder="Пароль*"
              />

              <MainButton
                type={"submit"}
                className="w-[250px] h-[50px] text-[12px]"
              />
            </form>
          </section>
          <Alert
            className="mt-[20px]"
            message={
              <div className="px-[30px]">
                <ol className="list-disc">
                  <li
                    className={
                      /^\S*$/.test(password)
                        ? "line-through text-green-600"
                        : "text-red-600"
                    }
                  >
                    Пароль не повинен містити пробілів
                  </li>
                  <li
                    className={
                      /^(?=.*[A-Z]).*$/.test(password)
                        ? "line-through text-green-600"
                        : "text-red-600"
                    }
                  >
                    Пароль повинен містити хоча б один символ верхнього регістру
                  </li>
                  <li
                    className={
                      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(
                        password
                      )
                        ? "line-through text-green-600"
                        : "text-red-600"
                    }
                  >
                    Пароль повинен містити принаймні один спеціальний символ
                    <br />
                    (!@#$%^&*)
                  </li>
                </ol>
              </div>
            }
            type="warning"
          />
        </Modal>
      )} */}
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <div className="w-[212px]">
            <Input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="w-full"
              placeholder="Ім’я*"
            />
          </div>
          <div className="w-[212px] h-[40px] relative group">
            <MultipleSelect
              onChange={(value) => onChangeMultipleSelectScopes(value)}
            />
            <svg
              className="absolute right-[12px] bottom-[35%]"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                className="group-hover:fill-[#7664E7] fill-[#347AEC]"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13ZM7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
                fill="#347AEC"
              />
              <path
                className="group-hover:fill-[#7664E7] fill-[#347AEC]"
                d="M7.15209 9.91168C7.08007 10.0294 6.91993 10.0294 6.84791 9.91168L4.03043 5.30485C3.95049 5.17415 4.03738 5 4.18252 5L9.81748 5C9.96262 5 10.0495 5.17415 9.96957 5.30485L7.15209 9.91168Z"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <MainButton
          onClick={handleRegistrationButton}
          className="mx-auto block mt-[20px] h-[30px]"
        />
      </form>

      {/* <hr />
      <button className="mx-auto block mt-[15px] font-unbounded">
        Зареєстровані? <br /> Увійти до облікового запису
      </button> */}
      {messageError !== "" && (
        <Alert
          className="mt-[15px] rounded-t-[0px] border-t-0"
          message={messageError}
          type="info"
          closable
          onClose={onCloseErrorAlert}
        />
      )}
    </section>
  );
};

export default CreatedProfile;
