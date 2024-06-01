import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [
    {
      id: 1,
      name: "Javascript",
      image: "/images/skills/javascript.png",
    },
    {
      id: 2,
      name: "Typescript",
      image: "/images/skills/typescript.webp",
    },
    {
      id: 3,
      name: "Docker",
      image: "/images/skills/docker.png",
    },
    {
      id: 4,
      name: "Nestjs",
      image: "/images/skills/nestjs.png",
    },
    {
      id: 5,
      name: "Reactjs",
      image: "/images/skills/react.png",
    },
    {
      id: 6,
      name: "Vscode",
      image: "/images/skills/vscode.png",
    },
    {
      id: 7,
      name: "Postman",
      image: "/images/skills/postman.png",
    },
    {
      id: 8,
      name: "Mongo",
      image: "/images/skills/mongo.png",
    },
    {
      id: 9,
      name: "Github",
      image: "/images/skills/github.png",
    },
    {
      id: 10,
      name: "Mysql",
      image: "/images/skills/mysql.png",
    },
    {
      id: 11,
      name: "Git",
      image: "/images/skills/git.png",
    },
    {
      id: 12,
      name: "Chatgpt",
      image: "/images/skills/chatgpt.png",
    },
    {
      id: 12,
      name: "Sql",
      image: "/images/skills/sql.png",
    },
    {
      id: 13,
      name: "Nodejs",
      image: "/images/skills/nodejs.png",
    },
    {
      id: 14,
      name: "Jira",
      image: "/images/skills/jira.png",
    },
    {
      id: 15,
      name: "Typeorm",
      image: "/images/skills/typeorm.png",
    },
    {
      id: 16,
      name: "Casl",
      image: "/images/skills/casl.png",
    },
    {
      id: 17,
      name: "Swagger",
      image: "/images/skills/swagger.png",
    },
  ],
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
});
export const {} = skillsSlice.actions;
export const getAllSkills = (state) => state.skills;

export default skillsSlice.reducer;
