
const CarCard = ({imgURL, changeCartranstImage, transtbmwImg}) => {

    const handleClick = () => {
       if(transtbmwImg !== imgURL.bgbmw)
        changeCartranstImage(imgURL.transparentbwm);
    }
  return (
    <div
    className={`border-2 rounded-xl hover:scale-110  ${
      transtbmwImg === imgURL.bgbmw
      ? "border-gray-700- " 
      : "border-gray-700 "
  } cursor-pointer max-sm:flex-1`}
  onClick={handleClick}
  >
    <div className='flex justify-center items-center bg-gradient-to-b from-lightgray to-darkgray  max-container   sm:w-40 sm:h-40   rounded-xl max-sm:p-4'>
    <img
        src={imgURL.transparentbwm}
        alt='car colletion'
        width={130}
        height={103.34}
        className='object-contain  '
      />
    </div>
  </div>
)
}

export default CarCard