import React from "react";
import { useSelector } from "react-redux";
import { getAllSettings } from "../features/settingsSlice";

export default function NavLink({ href, title, tr }) {
  const { settings } = useSelector(getAllSettings);
  const { language } = settings;
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {language === "tr" ? tr : title}
    </a>
  );
}
