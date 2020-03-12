import React, { useState } from "react";

const FormField = props => {
  const [itemInput, setItemInput] = useState("");

  const handleChange = event => {
    setItemInput(event.target.value);
  };

  const submitFunction = event => {
    props.addItem(event, itemInput);
    setItemInput(" ");
  };
  console.log(itemInput);

  return (
    <>
      <form onSubmit={submitFunction}>
        <input
          type="text"
          placeholder="enter item"
          name="itemInput"
          value={itemInput}
          onChange={handleChange}
        />
        <button className="add-btn">ADD</button>
      </form>
    </>
  );
};

export default FormField;
