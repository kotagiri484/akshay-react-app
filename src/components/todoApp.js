import React, { useState } from "react";
import {VALUE_TWO} from '../utils/constants'
const TodoApp = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    return text.length > VALUE_TWO ? (setList([...list, text]), setText("")) : text;
  };

  return (
    <>
      <>
        <h1>Todo Application By Akshay</h1>
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleChange}
        />{" "}
        &nbsp;&nbsp;
        {text.length > VALUE_TWO ? <button onClick={handleAdd}>ADD</button> : ""}
      </>
      <>
        {list.length > 0 ? (
          list.map((item) => {
            return <li>{item}</li>;
          })
        ) : (
          <span>"no data is found"</span>
        )}
      </>
    </>
  );
};
export default TodoApp;
