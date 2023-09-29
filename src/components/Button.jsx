
const Button = ({label,iconURL,backgroundColor,borderColor,textColor,fullWidth}) => {
return (
    <button className= {`flex justify-center rounded-full items-center gap-2 px-7 py-4
    border font-montserrat text-lg leading-none
     text-white bg-blue-800 hover:bg-blue-600 hover:animate-pulse hover:duration-100
     ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}  `:
     'bg-blue-800 text-white border-blue-300 '}
    }
    ${fullWidth &&  'w-full' } `} 
    >
        {label} 
        {iconURL && <img
        src={iconURL}
        alt="arrowrighticon"
        className="ml-2 rounded-full w-5 h-5 "
      />}
    </button>
)

};
export default Button;