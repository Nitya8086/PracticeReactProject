import React from "react";

function Component1({ data, ondata }) {
  return (
    <div>
      <th>
        {" "}
        first Component
        {data.map((item, index) => (
          <button
            key={index}
            style={{
              backgroundColor: item,
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              margin: "10px",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => ondata(item)}>
            {item}
          </button>
        ))}
      </th>
    </div>
  );
}

export default Component1;
