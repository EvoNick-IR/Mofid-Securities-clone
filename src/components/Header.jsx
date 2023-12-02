import React from "react";
import logo from "../assets/logo.svg";
import rainbow from "../assets/rainbow.svg";
import phone from "../assets/phone.svg";
import SearchIcon from "../assets/search.svg";

const Header = () => {
  const navItem = [
    "سرمایه گذاری",
    "معاملات آنلاین",
    "آموزش مفید",
    "درباره مفید",
    "شعب و دفاتر",
  ];
  return (
    <header className="flex ismedium text-[#EAEEF0] px-8 py-6 absolute top-0 w-[100vw] text-[14px] z-10">
      <nav className="flex justify-between flex-1">
        <div className="flex gap-10">
          <img className="w-[150px]" src={logo} alt="LOGO" />
          <ul className="flex gap-6 items-center">
            {navItem.map((item, i) => {
              return (
                <li key={i} className="cursor-pointer">
                  {item}
                </li>
              );
            })}
            <li className="flex justify-center cursor-pointer whitespace-nowrap items-center gap-3 mr-3">
              <img src={rainbow} alt="" />
              ایزی تریدر
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3 ml-4 ">
          <div className="flex items-center cursor-pointer gap-2 mx-1">
            0218700
            <img src={phone} alt="phone" className="w-4" />
          </div>
          <div className=" mx-2">
            <img
              src={SearchIcon}
              alt="search "
              className="w-4 cursor-pointer"
            />
          </div>
          <div className="item-center  flex border-solid border-[0.5px] border-white rounded-md px-4 py-2 cursor-pointer">
            ورود
          </div>
          <div className="item-center  flex border-solid border-[1px] border-white rounded-md px-4 py-2 cursor-pointer">
            افتتاح حساب
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
