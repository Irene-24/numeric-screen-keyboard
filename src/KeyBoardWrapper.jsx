import React, { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const layout = {
  default: ["1 2 3", "4 5 6", "7 8 9", "{shift} 0 {bksp}", ". {enter}"],
  shift: ["_ / #", "- % ^", "& * (", "{shift} ) +", ". {enter}"],
};

//OVERWTITE CLASSES WITH CUSTOM CLASSES DEFINED IN index.css
//or global.css if you're using nextjs
//SPECIFICITY IS IMPORTANT SO BE CAREFUL
const buttonTheme = [
  {
    class: "font-bold hg-red text-white",
    buttons: "7",
  },
];

const KeyboardWrapper = ({ onChange, handleEnter, keyboardRef }) => {
  const [layoutName, setLayoutName] = useState("default");

  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }

    if (button === "{enter}") {
      handleEnter();
    }
  };

  return (
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName={layoutName}
      onChange={onChange}
      onKeyPress={onKeyPress}
      layout={layout}
      buttonTheme={buttonTheme}
    />
  );
};

export default KeyboardWrapper;
