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

      <div className='flex mt-[30px] max-w-[930px] gap-[40px] mobile:gap-[0px]'>
        <div className='flex mobile:block gap-[40px]'>
          <div className='flex flex-col gap-[14px] items-center max-w-[220px]'>
            <div className='w-[117px] h-[117px] bg-white rounded-full flex items-center justify-center drop-shadow-drop'>
              <img src={firstClientImage.src} alt='client' className='w-[58px] h-[53px]' />
            </div>
            <div className='max-w-[275px] mobile:max-w-[160px] mobile:text-xs flex font-unbounded items-center uppercase leading-[20.8px] text-center text-transparent bg-gradient-to-r from-[#347AEC] to-[#6764E7] bg-clip-text'>
              {lang.clients_block.client_1}
            </div>
          </div>
          <div className='flex flex-col gap-[14px] items-center mobile:mt-[25px] max-w-[220px]'>
            <div className='w-[117px] h-[117px] bg-white rounded-full flex items-center justify-center drop-shadow-drop'>
              <img src={secondClientImage.src} alt='client' className='w-[64px] h-[61px]' />
            </div>
            <div className='mobile:text-xs max-w-[250px] mobile:max-w-[180px] flex font-unbounded items-center uppercase leading-[20.8px] text-center text-transparent bg-gradient-to-r from-[#347AEC] to-[#6764E7] bg-clip-text'>
              {lang.clients_block.client_2}
            </div>
          </div>
        </div>
        <div className='flex mobile:block gap-[40px]'>
          <div className='flex flex-col gap-[14px] items-center max-w-[234px]'>
            <div className='w-[117px] h-[117px] bg-white rounded-full flex items-center justify-center drop-shadow-drop'>
              <img src={thirdClientImage.src} alt='client' className='w-[60px] h-[55px]' />
            </div>
            <div className='mobile:text-xs max-w-[220px] mobile:max-w-[160px] flex font-unbounded items-center uppercase leading-[20.8px] text-center text-transparent bg-gradient-to-r from-[#347AEC] to-[#6764E7] bg-clip-text'>
              {lang.clients_block.client_3}
            </div>
          </div>
          <div className='flex flex-col gap-[14px] items-center mobile:mt-[25px] max-w-[220px]'>
            <div className='w-[117px] h-[117px] bg-white rounded-full flex items-center justify-center drop-shadow-drop'>
              <img src={fourthClientImage.src} alt='client' className='w-[58px] h-[58px]' />
            </div>
            <div className='mobile:text-xs max-w-[240px] mobile:w-[200px] flex font-unbounded items-center uppercase leading-[20.8px] text-center text-transparent bg-gradient-to-r from-[#347AEC] to-[#6764E7] bg-clip-text'>
              {lang.clients_block.client_4}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsBlock;
