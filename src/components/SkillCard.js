import React from "react";

export default function SkillCard({ name, image }) {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <img src={image} height={75} width={75}/>
      <h1 className="text-[#ADB7BE]">{name}</h1>
    </div>
  );
}
