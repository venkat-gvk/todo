import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import RenderList from "./RenderList";
import parseJson from "parse-json";

const Main = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const todos = [];
    for (let i = 0; i < localStorage.length; i++) {
      const id = localStorage.key(i);

      if (id === "gvk_portfolio_theme_mode") continue;

      const value = localStorage.getItem(id);
      todos.push(JSON.parse(value));
    }
    setList(todos);
  }, []);

  return (
    <div>
      <h1>TODO LIST</h1>
      <InputField
        input={input}
        setInput={setInput}
        list={list}
        setList={setList}
      />

      <RenderList list={list} setList={setList} />
    </div>
  );
};

export default Main;
