import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import logo from "../assets/iCoderLogo.png";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 top-4">
        {/* Desktop Menu */}
        <div className="items-center justify-center hidden max-w-4xl py-3 mx-auto border-2 rounded-lg border-stone-50/30 bg-black/20 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="#">
                <img src={logo} width={120} alt="logo" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-8">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-lg hover:text-yellow-400"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden ">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img src={logo} alt="logo" width={90} className="m-2" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-5 h-6 m-2" />
                ) : (
                  <FaBars className="w-5 h-6 m-2" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="flex flex-col gap-4 mt-4 ml-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg hover:text-yellow-500"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
