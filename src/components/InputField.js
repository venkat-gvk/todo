import React from "react";
import { v4 } from "uuid";
import "./InputField.css";

const InputField = ({ input, setInput, list, setList }) => {
  const getInput = (e) => {
    setInput(e.target.value);
  };

  const addToList = (e) => {
    e.preventDefault();
    if (input && input.trim().length !== 0) {
      const mod = input.trim();
      const id = v4();

      const date = new Date();
      const date_time =
        date.toLocaleDateString() + " " + date.toLocaleTimeString();

      const obj = {
        id,
        date_time,
        value: mod,
      };

      setList([obj, ...list]);
      localStorage.setItem(id, JSON.stringify(obj));
      setInput("");
    }
  };

  const clearList = (e) => {
    e.preventDefault();
    setList([]);
    localStorage.clear();
  };

  const disableButton = !input.trim() ? "disableButton" : "add";
  const clearButton = list.length ? "clear" : "disableClear";

  return (
    <div id="form-control">
      <form>
        <input
          type="text"
          className="question"
          id="nme"
          required
          autoComplete="off"
          value={input}
          onChange={getInput}
        />
        <label htmlFor="nme">
          <span>Write Something</span>
        </label>

        <div className="button_cont" align="center">
          <button className={disableButton} onClick={addToList}>
            Add to List
          </button>

          <button className={clearButton} onClick={clearList}>
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputField;
