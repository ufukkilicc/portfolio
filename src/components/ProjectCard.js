import React from "react";
import {
  CodeBracketIcon,
  EyeIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { getAllCompanies } from "../features/companiesSlice";

export default function ProjectCard({
  id,
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  role,
  companyId,
}) {
  const { companies } = useSelector(getAllCompanies);
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <a
            href={gitUrl ? gitUrl : ""}
            className="h-14 z-1 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon
              className={`${
                gitUrl ? "" : "cursor-not-allowed"
              } h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white`}
            />
          </a>
          <a
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </a>
          <a
            href={`/projects/${id}`}
            className="h-14 w-14 -right-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <BookOpenIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
          <div className="flex items-center justify-start gap-1">
            <h5 className="text-xl font-semibold">{title}</h5>
            <h5 className="text-[#ADB7BE]">{role}</h5>
          </div>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
        {/* <div className="bg-white rounded-2xl">
          <img
            src={companies.find((company) => company.id === companyId).image}
            height={60}
            width={60}
          />
        </div> */}
      </div>
    </div>
  );
}
