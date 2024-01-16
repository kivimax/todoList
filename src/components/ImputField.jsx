import React from "react";

const InputField = ({ text, hendelInput, addInput }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addInput();
    }
  };
  return (
    <div>
      <label>
        <input
          value={text}
          onChange={(e) => hendelInput(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <button onClick={addInput}>Add</button>
      </label>
    </div>
  );
};

export default InputField;
