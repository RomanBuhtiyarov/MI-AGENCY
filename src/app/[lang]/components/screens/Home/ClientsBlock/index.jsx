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
      <div className='text-[#262626] uppercase text-[40px] leading-[54px] font-bold'>
        {lang.clients_block.title}
      </div>

      {clients.map(({ image, label }, index) => (
        <div className='flex gap-2 mt-[13px]' key={index}>
          <div className='w-[62px] h-[62px] bg-white rounded-[10px] flex items-center justify-center'>
            <img src={image} alt='client' />
          </div>
          <div className='bg-white w-full flex items-center px-[18px] py-[15px] rounded-[10px] uppercase text-[#347AEC] leading-[32px] text-[24px] font-bold'>
            {label}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ClientsBlock;
