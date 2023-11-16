import Image from "next/image";
import {message} from "antd";
import {useCallback} from "react";

export const ItemLang = ({activeLang, setActiveLang, data}) => {

    const [messageApi, contextHolder] = message.useMessage();
    
    const changeLang = useCallback(() => {
        
        setActiveLang(data.key);
        console.log(activeLang)
        const success = () => {
            messageApi.open({
                type: 'success',
                content: activeLang === 1 ? (`You have successfully set the language - ${data.alt}`) : (`Ви вдало встановили мову - ${data.alt}`),
            }).then( res => res);
        };

        success();
        
    }, [activeLang]);
    
    return(
        <>
            {contextHolder}
            <button key={data.key} onClick={changeLang}>
                <Image 
                    className={`${activeLang === data.key ? "grayscale-0" : "grayscale"}`}
                    aria-label={'Change to:' + data.alt}
                    src={`/_assets/images/lang/${data.image}`}
                    alt={data.alt}
                    width={24}
                    height={24}
                    loading={"lazy"}
                />
            </button>
        </>
    )
}