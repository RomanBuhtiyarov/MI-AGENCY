import magencyImage from "/public/_assets/images/home/logos/mage.svg";
import kitrumImage from "/public/_assets/images/home/logos/kitrum.svg";
import svetImage from "/public/_assets/images/home/logos/svet.svg";
import monolithImage from "/public/_assets/images/home/logos/monolith.svg";
import earPlugsImage from "/public/_assets/images/home/logos/ear_plugs.svg";

const TrustBlock = ({ lang }) => {
  return (
    <section className='mt-[33px]'>
      <div className='font-bold leading-[54px] text-[40px] uppercase text-center mobile:text-[30px]'>
        {lang.trust_block.title}
      </div>
      <div className='flex gap-[18px] items-center mt-[32px] mobile:block'>
        <div className='flex gap-[18px] mobile:justify-around'>
          <div className='bg-white rounded-[10px] w-[170px] h-[73px] flex items-center justify-center'>
            <img src={magencyImage?.src} alt='logo' />
          </div>
          <div className='bg-white rounded-[10px] w-[170px] h-[73px] flex items-center justify-center'>
            <img src={kitrumImage?.src} alt='logo' />
          </div>
        </div>
        <div className='flex gap-[18px] mobile:mt-[19px] mobile:justify-around'>
          <div className='bg-white rounded-[10px] w-[170px] h-[73px] flex items-center justify-center'>
            <img src={svetImage?.src} alt='logo' />
          </div>
          <div className='bg-white rounded-[10px] w-[170px] h-[73px] flex items-center justify-center'>
            <img src={monolithImage?.src} alt='logo' />
          </div>
        </div>
        <div className='flex gap-[18px] mobile:block'>
          <div className='mobile:mx-auto  bg-white rounded-[10px] w-[170px] h-[73px] flex items-center justify-center mobile:mt-[19px]'>
            <img src={earPlugsImage?.src} alt='logo' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
