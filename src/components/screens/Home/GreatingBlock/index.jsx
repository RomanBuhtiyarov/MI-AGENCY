import Image from "next/image";

const GreatingBlock = () => {
    return(
        <section className="flex items-start gap-[40px] pt-[60px]">
            <div>
                <Image src={'/_assets/images/greating/greating.png'} alt={'hello world'} width={156} height={207}/>
            </div>
            <div className="border-solid border-4 border-[#4485ED] rounded-[15px] pt-[16px] px-[31px] pb-[19px]">
                <div className="max-w-[570px] w-full flex flex-col gap-[10px]">
                    <p className="text-[#4485ED] font-[500] text-[18px]">Привіт!</p>
                    <p className="font-[400] leading-5 tracking-normal">Я твій персональний асистент на платформі, яка допоможе тобі дізнатися більше про свої психологічні особливості та скласти психологічний портрет.</p>
                    <p className="font-[400]">
                        <span className="font-semibold">Всі тести перевірені, {" "}</span>
                        мають релевантні результати та неодноразово випробовані.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GreatingBlock;