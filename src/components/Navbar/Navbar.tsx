import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  IconDefinition,
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navbarPages: string[] = [
    "HOME",
    "BIKES",
    "GEAR",
    "PARTS",
    "TIRES",
    "SERVICE-INFO",
    "CATALOGUES",
    "CONTACT",
  ];

  const iconsArray: IconDefinition[] = [faMagnifyingGlass, faBagShopping];

  return (
    <div className="row bg-color">
      <div className="col-10 offset-1 bg-white">
        <nav className="navbar py-4 navbar-expand-lg navbar-light justify-content-between">
          <a className="navbar-brand" href="?">
            <div className="logo-container">
              <img src="./logo.png" alt="logo" />
            </div>
          </a>
          <ul className="navbar-nav mr-auto">
            {navbarPages.map((title) => (
              <li key={title} className="nav-item h5 active">
                <a
                  className="navLinks fw-bold px-3 py-3"
                  href="?"
                  target="_blank"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbarIcons">
            {iconsArray.map((item, index) => {
              return (
                <a key={index} href="#" className="navbarLinkIcons me-3">
                  <FontAwesomeIcon icon={item} size={"lg"} />
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
