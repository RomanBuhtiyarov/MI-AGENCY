
export const Input = ({
                          type = "text",
                          placeholder = "default placeholder",
                          ref = null,
                          onChange,
                          className = ""
}) => {
    return(
        <input 
            type={type}
            placeholder={placeholder}
            ref={ref} 
            onChange={onChange}
            className={`outline-0 bg-[#F2F5F8] h-[40px] rounded-[5px] py-[9px] px-[15px] text-[12px] border-none placeholder:text-[#5E5E5E] placeholder:font-[500] placeholder:text-[12px] ${className}`}
        />
    )
}