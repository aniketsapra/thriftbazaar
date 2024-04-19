import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Navbar = ({ setShowLogin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSignInClick = () => {
    setShowLogin(true);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <nav className="w-full pt-3 pb-3">
      <div className="flex flex-wrap items-center justify-between px-8">
        <div>
          <Link href="/" className="flex gap-2 items-center">
            <Image
            className="rounded-full"
            src="/assets/thriftlogo.png"
            width={60}
            height={60}
            /><span></span>
            <h1 className="font-satisfyfont font-bold text-4xl ml-2">
              ThriftBazaar
            </h1>
          </Link>
          
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <ul className="flex md:items-center font-poppinsfont font-bold">
            <li className="navitems" onClick={handleNavLinkClick}>
              <Link href="/">Home</Link>
            </li> 
            <li className="navitems" onClick={handleNavLinkClick}>
              <Link href="/store">Store</Link>
            </li>
            <li className="navitems" onClick={handleNavLinkClick}>
              <Link href="/about">About</Link>
            </li>
           
          </ul>
          <div className="ml-8">
            <Button onClick={handleSignInClick} label="Sign In">
              Sign In
            </Button>
          </div>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleNavbar}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden w-full mt-4">
            <ul className="text-center">
              <li onClick={handleNavLinkClick} className="dropdownitems">
                <Link href="/">Home</Link>
              </li>
              <li onClick={handleNavLinkClick} className="dropdownitems">
                <Link href="/store">Store</Link>
              </li>
              <li onClick={handleNavLinkClick} className="dropdownitems">
                <Link href="/about">About</Link>
              </li>
              
            </ul>
            <div className="flex justify-center items-center mb-2">
            <Button onClick={handleSignInClick} label="Sign In">
              Sign In
            </Button>
          </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
