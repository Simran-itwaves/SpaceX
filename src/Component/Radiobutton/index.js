import React from "react";

export default function RadioButton({ options, handleChecked }) {
  return (
    <div>
      <input
        type="radio"
        name={options.name}
        value={options.value}
        defaultChecked={options.checked}
        onChange={(e) => handleChecked(e.target.value, e.target.checked)}
      />
      <label className="mx-2">{options.label}</label>
    </div>
  );
}
