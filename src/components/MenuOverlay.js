import React from "react";
import NavLink from "./NavLink";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, getAllSettings } from "../features/settingsSlice";

export default function MenuOverlay({ links }) {
  const { settings } = useSelector(getAllSettings);
  const { language } = settings;
  const dispatch = useDispatch();
  const handleLanguageChange = () => {
    dispatch(changeLanguage());
  };
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}{" "}
      <li>
        <button
          onClick={() => handleLanguageChange()}
          className="px-2 py-1 text-white"
        >
          {language.toUpperCase()}
        </button>
      </li>
    </ul>
  );
}
