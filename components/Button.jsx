function Button({onClick, label}) {
    return (
      <button className='flex justify-center items-center font-semibold  bg-white px-4 py-2 border text-xl leading-none  rounded-full font-poppinsfont hover:text-white hover:bg-black duration-300' type="button" onClick={onClick}>
      {label}
      </button>
    )
  }
  
  export default Button
  