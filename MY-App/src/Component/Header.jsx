import './Style/Header.css'
function Header(){
    return(
        <>
        <div className="flex flex-col h-full max-w-[1320px] mx-auto">
        <header className="flex justify-between items-center h-16 py-10 border-b-2">
          <h1 className="font-poppins font-bold text-[26px] gap-5 ml-5">Shreyansh Bajpai</h1>
          <button className=' items-center gap-5 px-4 rounded-3xl flex mr-5 py-2 bg-[#086381] text-white'>
            <a className='text-[16px] font-bold'  href='https://www.linkedin.com/in/shreyanshbajpai/'>Contact Us</a>
          </button>
        </header>
      </div>
        </>
    );
}

export default Header;