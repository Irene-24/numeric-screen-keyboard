import React, { useState, useRef } from "react";
import KeyboardWrapper from "./KeyBoardWrapper";

const Eye = ({ show }) => {
  return show ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
};

const enterPress = (input) =>
  console.log(input || "enter pressed, but no input value");

const AppKeyBoard = ({ handleEnter = enterPress }) => {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const keyboard = useRef(null);

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard?.current?.setInput(input);
  };

  const onEnterPress = () => {
    handleEnter(input.trim());
  };

  return (
    <div>
      <div className="my-4 relative ">
        <input
          type={show ? "text" : "password"}
          value={input}
          placeholder={"Enter pin"}
          onChange={(e) => onChangeInput(e)}
          className="w-full border rounded p-2 pr-9 "
        />

        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-2 top-2/4 -translate-y-1/2"
        >
          <Eye show={show} />
        </button>
      </div>
      <KeyboardWrapper
        handleEnter={onEnterPress}
        keyboardRef={keyboard}
        onChange={setInput}
      />
    </div>
  );
};

export default AppKeyBoard;
