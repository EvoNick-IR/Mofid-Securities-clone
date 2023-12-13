import { logo, rainbow, phone, SearchIcon, navItem, gav } from "./services";

const Header = () => {
  return (
    <header className="flex ismed text-[#EAEEF0] px-[3%] py-6 absolute top-0 w-full text-xs lg:text-base z-10 from-[rgba(10,10,10,0.8)] bg-gradient-to-b">
      <nav className="flex justify-between flex-1 w-11/12">
        <div className="flex gap-6">
          <div className="flex justify-center items-center xl:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <img className="w-[100px]" src={logo} alt="LOGO" />
          <img className="w-[50px] hidden md:block" src={gav} alt="GAV" />
          <ul className="xl:flex  gap-6 items-center hidden">
            {navItem.map((item, i) => {
              return (
                <li key={i} className="cursor-pointer hover:text-slate-300">
                  {item}
                </li>
              );
            })}
            <li className="flex justify-center cursor-pointer whitespace-nowrap items-center gap-3 mr-3 hover:text-slate-300">
              <img src={rainbow} alt="" />
              ایزی تریدر
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3 ">
          <div className="lg:flex hidden items-center cursor-pointer gap-2 mx-1">
            0218700
            <img src={phone} alt="phone" className="w-4" />
          </div>
          <div className="lg:block hidden mx-2">
            <img
              src={SearchIcon}
              alt="search "
              className="w-4 cursor-pointer"
            />
          </div>
          <div className="item-center hidden border-solid border-[px] border-white rounded-md px-4 py-2 cursor-pointer  hover:bg-[#EAEEF0] transition-all hover:text-gray-600">
            ورود
          </div>
          <div className="item-center flex border-solid border-[1px] border-white rounded-md px-4 py-2 cursor-pointer hover:bg-[#EAEEF0] transition-all hover:text-gray-600">
            افتتاح حساب
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
