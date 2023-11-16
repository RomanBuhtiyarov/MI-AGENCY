"use client";

import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import { Image, Modal } from "antd";
import ky from "ky";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const success = () => {
  Modal.success({
    title: "Успіх!",
    content: (
      <>
        <div>
          <p className="text-[14px] font-unbounded">
            Ви успішно встановили зображення
          </p>
        </div>
      </>
    ),
    closable: true,
    centered: true,
    footer: null,
  });
};

const error = () => {
  Modal.error({
    title: "Помилка!",
    content: (
      <>
        <div>
          <p className="text-[14px] font-unbounded">
            Використовуйте зображення під час встановлення
          </p>
        </div>
      </>
    ),
    closable: true,
    centered: true,
    footer: null,
  });
};

const errorServer = () => {
  Modal.error({
    title: "Помилка!",
    content: (
      <>
        <div>
          <p className="text-[14px] font-unbounded">Щось пішло не так!</p>
        </div>
      </>
    ),
    closable: true,
    centered: true,
    footer: null,
  });
};

const MyProfile = ({ currentUser }) => {
  const router = useRouter();

  const [publicIdImageCD, setPublicIdImageCD] = useState("");
  const [userRender, setUserRender] = useState(currentUser);

  const uploadCloudinary = async (e, result) => {
    if (e.info.resource_type === "image") {
      setPublicIdImageCD(e.info);
      await ky
        .post("/api/upload-image/", {
          json: { id: currentUser.id, image: e.info.url },
        })
        .then(() => {
          success();
          setUserRender(
            userRender.map((item) =>
              userRender ? { ...item, avatar: e.info.url } : item
            )
          );
        })
        .catch(() => errorServer());
      result.close();
    }
    if (e.info.resource_type !== "image") {
      result.close();
      error();
      result.update();
    }
  };
  // if (!currentUser) {
  //   // Если сессии нет, перенаправляем пользователя на начальную страницу
  //   router.replace("/");
  //   return null; // Опционально: можно вернуть null, чтобы компонент не рендерился
  // }

  return (
    <section className="flex relative items-start gap-[47px] bg-white max-w-[842px] w-full py-[25px] px-[30px] rounded-[15px] shadow-xl">
      <button
        className="text-[#5D5D5D] font-unbounded font-[400] absolute right-[25px] top-[20px]"
        onClick={() => {
          signOut();
        }}
      >
        Вийти
      </button>
      <div>
        <input className="hidden" id="projectCoverUploads" type="file" />

        {userRender && userRender.image !== "" ? (
          <div className="w-[170px] h-[170px] rounded-[100%] border-2 border-solid border-[#347AEC]">
            <Image
              src={userRender.image}
              alt={currentUser.username}
              width={170}
              height={170}
              loading="lazy"
            />
          </div>
        ) : (
          <>
            <CldUploadButton
              onUpload={(e, result, widget) =>
                uploadCloudinary(e, result, widget)
              }
              uploadPreset="mi_agency"
              className="group hover:bg-gradient-to-r from-[#347AEC] to-[#6764E7] duration-700 w-[170px] h-[170px] rounded-[100%] border-2 border-dashed border-[#347AEC] cursor-pointer"
            >
              <label
                className="group-hover:text-white text-[#262626] text-center font-unbounded text-[12px] font-[400] cursor-pointer"
                htmlFor="projectCoverUploads"
              >
                Завантажити <br /> зображення
              </label>
            </CldUploadButton>
            <div>
              <button>Змінити зображення</button>
              <button>Видалити зображення</button>
            </div>
          </>
        )}
      </div>
      <div>
        <p className="text-[#5E5E5E] text-[10px] font-[500]">Привіт,</p>
        <p className="text-[#262626] text-[22px] font-[400] font-unbounded mb-[15px]">
          {userRender?.username}
        </p>
        <div className="max-w-[545px] text-[#262626] font-[500]">
          <p>
            На цій сторінці зображено всі Ваші збережені результати
            психологічних тестувань.
          </p>
          <p className="mt-[10px]">
            <span className="text-[#347AEC] font-[700]">
              Якщо Ви хочете отримати додаткову консультацію від нашого
              психолога
            </span>{" "}
            щодо результатів, залиште свій контакт в будь-якому месенджері - ми
            з вами зв’яжемось.
          </p>
        </div>
        <div className="bg-[#F2F5F8] w-[212px] px-[14px] py-[9px] flex -items-center gap-[10px] rounded-[5px] mt-[15px]">
          <input
            placeholder="Нік / номер телефону"
            className="bg-transparent w-full outline-none placeholder:text-[#5E5E5E] text-[10px] font-[500]"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="7.5" stroke="#347AEC" />
              <path
                d="M11.3536 8.35355C11.5488 8.15829 11.5488 7.84171 11.3536 7.64645L8.17157 4.46447C7.97631 4.2692 7.65973 4.2692 7.46447 4.46447C7.2692 4.65973 7.2692 4.97631 7.46447 5.17157L10.2929 8L7.46447 10.8284C7.2692 11.0237 7.2692 11.3403 7.46447 11.5355C7.65973 11.7308 7.97631 11.7308 8.17157 11.5355L11.3536 8.35355ZM5 8.5H11V7.5H5V8.5Z"
                fill="#347AEC"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
