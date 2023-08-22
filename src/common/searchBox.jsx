import React from "react";

const SearchBox = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.currentTarget.value);
  };

  return (
    <div class="input-group">
    <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" value={value}
      onChange={handleInputChange}/>
    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-search" aria-hidden="true"></i></button>
 </div>
  );
};

export default SearchBox;
