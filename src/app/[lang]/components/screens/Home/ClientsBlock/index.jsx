import firstClientImage from "/public/_assets/images/home/clients/client_3.svg";
import thirdClientImage from "/public/_assets/images/home/clients/client_2.svg";
import secondClientImage from "/public/_assets/images/home/clients/client_1.svg";
import fourthClientImage from "/public/_assets/images/home/clients/client_4.svg";

const ClientsBlock = ({ lang }) => {
  return (
    <section className='mt-[21px]'>
      <div className='text-[#262626] uppercase text-[40px] leading-[54px] font-bold mobile:text-[35px] mobile:leading-[47px]'>
        {lang.clients_block.title}
      </div>
      <div className='grid grid-cols-2 gap-4 mt-[30px] md:flex md:flex-nowrap md:justify-evenly mobile:justify-normal'>
        <div className='flex flex-col min-w-[200px] w-min items-center text-center'>
          <div className='w-[117px] h-[117px] bg-white rounded-full flex items-center justify-center drop-shadow-drop'>
            <img src={firstClientImage.src} alt='client' className='w-[58px] h-[53px]' />
          </div>
          <p className='text-[15px] uppercase mt-[14px] font-unbounded leading-[20.8px] text-transparent bg-gradient-to-r from-[#347AEC] to-[#6764E7] bg-clip-text'>
            {lang.clients_block.client_1}
          </p>
        </div>
        <div className='flex flex-col min-w-[200px] w-min items-center text-center'>
          <div className='w-[117px] h-[117px] bg-white rounded-full flex items-center justify-center drop-shadow-drop'>
            <img src={secondClientImage.src} alt='client' className='w-[58px] h-[53px]' />
          </div>
          <p className='text-[15px] uppercase mt-[14px] font-unbounded leading-[20.8px] text-transparent bg-gradient-to-r from-[#347AEC] to-[#6764E7] bg-clip-text'>
            {lang.clients_block.client_2}
          </p>
        </div>
        <div className='flex flex-col min-w-[200px] w-min items-center text-center mobile:mt-[30px]'>
          <div className='w-[117px] h-[117px] bg-white rounded-full flex items-center justify-center drop-shadow-drop'>
            <img src={thirdClientImage.src} alt='client' className='w-[58px] h-[53px]' />
          </div>
          <p className='text-[15px] uppercase mt-[14px] font-unbounded leading-[20.8px] text-transparent bg-gradient-to-r from-[#347AEC] to-[#6764E7] bg-clip-text'>
            {lang.clients_block.client_3}
          </p>
        </div>
        <div className='flex flex-col min-w-[200px] w-min items-center text-center mobile:mt-[30px]'>
          <div className='w-[117px] h-[117px] bg-white rounded-full flex items-center justify-center drop-shadow-drop'>
            <img src={fourthClientImage.src} alt='client' className='w-[58px] h-[53px]' />
          </div>
          <p className='text-[15px] uppercase mt-[14px] font-unbounded leading-[20.8px] text-transparent bg-gradient-to-r from-[#347AEC] to-[#6764E7] bg-clip-text'>
            {lang.clients_block.client_4}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsBlock;
