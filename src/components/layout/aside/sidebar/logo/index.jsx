import Image from "next/image";

export const Logo = () => {
    return(
        <div>
            <Image 
                src={'/_assets/images/icons/psyMI_logo.png'}
                blurDataURL={'/_assets/images/icons/psyMI_logo.png'}
                alt={'psyMI'}
                width={120}
                height={50}
                placeholder={"blur"}
                loading={"lazy"}
            />
        </div>
    );
};