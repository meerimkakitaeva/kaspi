import React from "react";

interface Props {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string | number;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  options?: string[];
}

const TextField: React.FC<Props> = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  name,
  onChange,
  options,
}) => {
  return (
    <div
      className="input_container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor={id} className="label">
        {label}
      </label>
      {options ? (
        <select id={id} value={value} onChange={onChange} name={name}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          style={{ color: "D9D9D9", fontSize: "14px" }}
        />
      )}
    </div>
  );
};

export default TextField;
