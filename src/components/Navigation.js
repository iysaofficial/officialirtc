import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("hidden-scrolling");
  };

  const collapseSubMenu = () => {
    const activeSubMenu = document.querySelector(
      ".menu-item-has-children.active .sub-menu"
    );
    activeSubMenu.removeAttribute("style");
    activeSubMenu.parentElement.classList.remove("active");
  };

  const resizeFix = () => {
    if (isOpen) {
      toggleNav();
    }
    if (document.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  };

  useEffect(() => {
    const mediaSize = 991;

    const handleToggleNav = () => {
      const navMenu = document.querySelector(".nav-menu");
      const menuOverlay = document.querySelector(".menu-overlay");
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      toggleNav();
    };

    const handleMenuClick = (event) => {
      if (
        event.target.hasAttribute("data-toggle") &&
        window.innerWidth <= mediaSize
      ) {
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        if (menuItemHasChildren.classList.contains("active")) {
          collapseSubMenu();
        } else {
          if (document.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
          }
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > mediaSize) {
        resizeFix();
      }
    };

    document
      .querySelector(".open-nav-menu")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".close-nav-menu")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".menu-overlay")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".nav-menu")
      .addEventListener("click", handleMenuClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document
        .querySelector(".open-nav-menu")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".close-nav-menu")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".menu-overlay")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".nav-menu")
        .removeEventListener("click", handleMenuClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  return (
    <header className="header">
      <div className="header-main">
        <div className="logo">
          <img src="../assets/img/logo/IRTC.jpg" />
        </div>
        <div className="open-nav-menu">
          <span></span>
        </div>
        <div className="menu-overlay"></div>
        <nav className="nav-menu">
          <div className="close-nav-menu">
            {/* <img
                src="./assets/images/logo/icons8-close.svg"
                alt="close"
              /> */}
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <ul className="menu">
            <li className="menu-item mt-0">
              <a href="/">Home</a>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" data-toggle="sub-menu">
                Media
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a href="/listnews">News from Media</a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/12D5KTwhSXcKZO8osMVpFk47Etgk0kGzY/view?usp=sharingcd"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Press Release 2025
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/1kNhPgPbXJ6PcirFeKAEn6cFhWyHh2nsx/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Press Release 2024
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/1tCNqnQH-uL4rZ3Sw-uhiomupn5ZTtMjd/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Press Release 2023
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href={isHome ? "low" : "/low"}>List of Winner</a>
            </li>
            <li className="menu-item menu-item-has-children">
              <a
                href="https://drive.google.com/file/d/12w7Kl_pqqzDelG_DMesT8S_xpxFK7X2C/view?usp=sharing"
                target="_blank"
              >
                Guide Book
              </a>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" data-toggle="sub-menu">
                Gallery
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1p-oWDrc1b9JgqGjVkgZ3tWzin0SCTDed?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Gallery 2025
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1p9ZRMi7TI6JzMjNCmeiBhlwIuxLqt7YC?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Gallery 2024
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/11phBTa4qXqwNViMttlydJ_lT8M4pjP-G?usp=drive_link"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Gallery 2023
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1LMIUW9PqVYZzAXtVY22g31MAplSuKRgP?usp=sharing"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Gallery 2022
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1A-0SR5F-KMgClTisz5dheVXCOnvZhcYZ?usp=sharing"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Gallery 2021
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1A-0SR5F-KMgClTisz5dheVXCOnvZhcYZ?usp=sharing"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Gallery 2019
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href={isHome ? "#faqs" : "/#faqs"}>FAQ</a>
            </li>
            <li className="menu-item">
              <a href={isHome ? "#conts" : "/#conts"}>Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* </div> */}
    </header>
  );
};
export default Navigation;
