import React from "react";

const RenderList = ({ list, setList }) => {
  const deleteItem = (id) => {
    localStorage.removeItem(id);
    const updateList = list.filter((l) => l.id !== id);
    setList([...updateList]);
  };

  return (
    <ul className="tilesWrap">
      {list.map((li, index) => {
        return (
          <li key={li.id}>
            <h2>{li.value}</h2>
            <p>added at {li.date_time}</p>
            <button onClick={() => deleteItem(li.id)}>DELETE</button>
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(RenderList);
