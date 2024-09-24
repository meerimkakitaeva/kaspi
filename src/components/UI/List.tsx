import React from "react";

interface Props {
  label: string;
  value: string | number;
}

const List: React.FC<Props> = ({ label, value }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
    }}
  >
    <div>{label}</div>
    <div>{value}</div>
  </div>
);

export default List;
