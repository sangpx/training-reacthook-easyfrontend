import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaulutProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  //Prevent reload in browser
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!onSubmit) return;

    const formValues = {
      title: value,
    };

    onSubmit(formValues);

    //reset lai form value
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleValueChange} value={value} type="text" />
    </form>
  );
}

export default TodoForm;
