import { useState } from "react";

export const useToggleClass = () => {
  const [newClass, setNewClass] = useState();

  const body = document.querySelector("body");
  newClass
    ? body.classList.add("dark-mode")
    : body.classList.remove("dark-mode");

  return [newClass, setNewClass];
};
