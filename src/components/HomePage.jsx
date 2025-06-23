const HomePage = () => {
  return (
    <div 
      className="
        flex flex-col items-center justify-center 
        min-h-screen p-5 box-border 
        bg-cover bg-center bg-no-repeat 
        text-white relative z-10
        sm:p-4 // Equivalent to @media (max-width: 480px) { padding: 15px; }
      "
      style={{ backgroundImage: "url('bg.png')" }} 

      // style={{ 
      // backgroundImage: "url('bg.png')",
      // backgroundSize: "600px auto" 
      // }} // типо на телефон
    >
      <div className="flex justify-center items-center gap-[20%] w-[350px] mb-5"> 
        <img src="logo-white.png" alt="Логотип 1" className="w-[250px] h-auto" /> 
      </div>

      <div className="flex-grow flex items-center justify-center mb-5 w-full"> 
        <img 
          src="frame.png" 
          alt="Основное фото" 
          className="max-w-full max-h-[50vh] h-auto rounded-lg shadow-md sm:max-w-[95%]"
        /> 
      </div>

      <div className="flex flex-col w-[300px] max-w-[500px]">
        <button 
          className="
            bg-white bg-opacity-10 text-black 
            py-3 px-5 border-2 border-white 
            rounded-md text-lg cursor-pointer mb-[15px] 
            transition-colors duration-300 
            hover:bg-white hover:text-black
            sm:py-2.5 sm:px-[15px] sm:text-base // sm:padding and sm:font-size equivalent
          "
          onClick={() => console.log("Go to Countries")} 
        >
          Countryes
        </button>
        <button 
           
          className="
            bg-white bg-opacity-10 text-black 
            py-3 px-5 border-2 border-white 
            rounded-md text-lg cursor-pointer 
            transition-colors duration-300
            hover:bg-white hover:text-black
            sm:py-2.5 sm:px-[15px] sm:text-base // sm:padding and sm:font-size equivalent
          "
             {
                    countriesData.map(country => (
                        <Link
                            key={country.id}
                            to={`/country/${country.id}`}
                            className='
                            p-3 
                            bg-amber-500 
                            rounded-md 
                            transition-all 
                            hover:bg-amber-900 
                            hover:transition-all'
                        >
                            {country.name}
                        </Link>
                    ))
                } 
        > 
          Disciplines
        </button>
      </div>      
    </div>
  );
};

export default HomePage;