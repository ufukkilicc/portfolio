import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, getAllSettings } from "../features/settingsSlice";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "/#about",
    tr: "Hakkımda",
  },
  {
    title: "Projects",
    path: "/#projects",
    tr: "Projeler",
  },
  {
    title: "Contact",
    path: "/#contact",
    tr: "İletişim",
  },
];

export default function Navbar() {
  const { settings } = useSelector(getAllSettings);
  const { language } = settings;
  const dispatch = useDispatch();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleLanguageChange = () => {
    dispatch(changeLanguage());
  };
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          <img
            src="/images/logo.webp"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 "
            width={50}
            height={50}
          />
        </a>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} tr={link.tr} />
              </li>
            ))}
            <li>
              <button
                onClick={() => handleLanguageChange()}
                className="px-2 py-1 text-white"
              >
                {language.toUpperCase()}
              </button>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}
