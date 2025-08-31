import { useState } from "react";

function ListGroup() {
  const items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Berlin",
    "Sydney",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List Group Component</h1>
      <ul className="list-group">
        {items.map((item, idx) => (
          <li
            className={
              selectedIndex === idx
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(idx);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
