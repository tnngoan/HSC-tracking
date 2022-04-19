import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.png";
const navData = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/privacy" },
  { name: "Contact", href: "/contact" },
];
const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex py-3 border-b-2 shadow-md bg-white justify-between md:justify-around items-center">
      <div className="relative justify-center pl-2 pt-2">
        <Image src={logo} width={75} height={38} alt="HSC logo" />
      </div>
      <nav className="hidden md:flex space-x-10 items-center">
        {navData.map((n) => {
          return (
            <Link key={n.name} href={n.href}>
              {n.name}
            </Link>
          );
        })}
      </nav>
      <div className="md:hidden">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
