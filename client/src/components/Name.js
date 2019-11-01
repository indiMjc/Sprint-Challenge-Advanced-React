import React from "react";
import { useToggleClass } from "../hooks/classtoggleHook";

const Name = props => {
  const [darkMode, setDarkMode] = useToggleClass(false);
  const toggle = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <h1 data-testid="h1-click" onClick={toggle}>
      Name: {props.name}
    </h1>
  );
};

export default Name;
