import { useMemo } from "react";
import firstClientImage from "/public/_assets/images/home/clients/client_1.svg";
import secondClientImage from "/public/_assets/images/home/clients/client_2.svg";
import thirdClientImage from "/public/_assets/images/home/clients/client_3.svg";
import fourthClientImage from "/public/_assets/images/home/clients/client_4.svg";

const ClientsBlock = ({ lang }) => {
  const clients = useMemo(
    () => [
      {
        image: firstClientImage.src,
        label: lang.clients_block.client_1,
      },
      {
        image: secondClientImage.src,
        label: lang.clients_block.client_2,
      },
      {
        image: thirdClientImage.src,
        label: lang.clients_block.client_3,
      },
      {
        image: fourthClientImage.src,
        label: lang.clients_block.client_4,
      },
    ],
    [lang],
  );

  return (
    <section className='mt-[21px]'>
      <div className='text-[#262626] uppercase text-[40px] leading-[54px] font-bold mobile:text-[35px] mobile:leading-[47px]'>
        {lang.clients_block.title}
      </div>

      <div className='flex mt-[30px] max-w-[877px]'>
        <div className='flex mobile:block'>
          <div className='flex flex-col gap-[14px] items-center'>
            <div className='w-[117px] h-[117px] bg-white rounded-full flex items-center justify-center drop-shadow-drop'>
              <img src={firstClientImage.src} alt='client' />
            </div>
            <div className='max-w-[310px] mobile:text-xs flex font-unbounded items-center uppercase leading-[20.8px] text-center text-transparent bg-gradient-to-r from-[#347AEC] to-[#6764E7] bg-clip-text'>
              {lang.clients_block.client_1}
            </div>
          </div>
          <div className='flex flex-col gap-[14px] items-center'>
            <div className='w-[117px] h-[117px] bg-white rounded-full flex items-center justify-center drop-shadow-drop'>
              <img src={secondClientImage.src} alt='client' />
            </div>
            <div className='mobile:text-xs flex font-unbounded items-center uppercase leading-[20.8px] text-center text-transparent bg-gradient-to-r from-[#347AEC] to-[#6764E7] bg-clip-text'>
              {lang.clients_block.client_2}
            </div>
          </div>
        </div>
        <div className='flex mobile:block'>
          <div className='flex flex-col gap-[14px] items-center'>
            <div className='w-[117px] h-[117px] bg-white rounded-full flex items-center justify-center drop-shadow-drop'>
              <img src={thirdClientImage.src} alt='client' />
            </div>
            <div className='mobile:text-xs flex font-unbounded items-center uppercase leading-[20.8px] text-center text-transparent bg-gradient-to-r from-[#347AEC] to-[#6764E7] bg-clip-text'>
              {lang.clients_block.client_3}
            </div>
          </div>
          <div className='flex flex-col gap-[14px] items-center'>
            <div className='w-[117px] h-[117px] bg-white rounded-full flex items-center justify-center drop-shadow-drop'>
              <img src={fourthClientImage.src} alt='client' />
            </div>
            <div className='mobile:text-xs flex font-unbounded items-center uppercase leading-[20.8px] text-center text-transparent bg-gradient-to-r from-[#347AEC] to-[#6764E7] bg-clip-text'>
              {lang.clients_block.client_4}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsBlock;
