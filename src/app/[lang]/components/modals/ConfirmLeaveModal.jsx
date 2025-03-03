import { useScreenSize } from "@/hooks/useScreenSize";
import { Modal } from "antd";
import Image from "next/image";
import leaveTestingRobot from "/public/_assets/images/sadRobot.svg";
import EnneagramaButton from "../UI/Buttons/EnneagramaButton";
import { Montserrat } from "next/font/google";
import { cn } from "@/_helpers/cn";

const Mont = Montserrat({ subsets: ["latin"] });

export const ConfirmLeaveModal = ({ isModalOpen, handleLeavePage, handleClose, lang }) => {
  const { isMobile } = useScreenSize();
  return (
    <Modal
      className=' w-[800px] h-[360px]'
      classNames={{
        content: "!bg-[#F2F5F8]",
        mask: "!bg-opacity-70 !bg-black",
      }}
      open={isModalOpen}
      width={!isMobile ? 800 : 350}
      height={360}
      footer={[]}
      closable={true}
      onCancel={handleClose}
    >
      <div className='flex items-center '>
        <Image
          className='hidden md:block ml-[30px] w-[192px] h-[280px] '
          src={leaveTestingRobot}
          alt={"robot look"}
          loading='lazy'
        />
        <div className='md:ml-[50px]'>
          <h1 className='text-left text-[42px] font-unbounded mobileS:text-[38px]'>
            {lang.enneagram_block.modal_window_h1}
          </h1>
          <p
            className={cn(
              "text-[#262626] font-medium max-w-[432px] text-justify mobile:pr-[0] md:text-left text-[16px] leading-[20.8px] w-full mb-[24px]",
              Mont.className,
            )}
          >
            {lang.enneagram_block.modal_window_p}
          </p>
          <div className='flex items-center flex-col gap-[10px] md:flex-row md:w-[500px]'>
            <EnneagramaButton
              onClick={handleLeavePage}
              className='w-[209px] h-[38px] md:mr-[15px] bg-[#7DACF1]'
              label={lang.enneagram_block.modal_leave_btn}
            />
            <EnneagramaButton
              className='w-[209px] h-[38px]'
              onClick={handleClose}
              label={lang.enneagram_block.modal_continue_btn}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
