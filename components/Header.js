import Image from "next/image";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 py-5 border-b-2 shadow-md bg-white">
      <div className="flex items-center relative justify-center">
        <Image src={logo} width="110" height="58" />
      </div>
      <div className="flex items-center justify-between">
        <a className="px-5 cursor-pointer">Home</a>
        <a className="px-5 cursor-pointer">About</a>
        <a className="px-5 cursor-pointer">Service</a>
        <a className="px-5 cursor-pointer">Help</a>
      </div>
      <div className="flex items-center justify-center">
        <a className="cursor-pointer">Login</a>
      </div>
    </header>
  );
};

export default Header;
