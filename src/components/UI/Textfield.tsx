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
  required: boolean;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
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
  required,
  onKeyPress,
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
          onKeyPress={onKeyPress}
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          style={{ color: "D9D9D9", fontSize: "14px" }}
          required={required}
        />
      )}
    </div>
  );
};

export default TextField;
