import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");

  //ky thuat debounce
  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) return;

    // moi lan go can phai xoa timeout truoc do
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    //set -- 100 -- clearTimeout cu, set -- 300  --> submit
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
  };

  return (
    <form>
      <input value={searchTerm} type="text" onChange={handleSearchTermChange} />
    </form>
  );
}

export default PostFiltersForm;
