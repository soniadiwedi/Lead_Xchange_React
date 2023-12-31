import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <>
      <div className="form-group">
        <label
          id={name}
          htmlFor={name}
          dangerouslySetInnerHTML={{ __html: label }}
        />

        <input {...rest} id={name} name={name} className="form-control" />
        {error && <p className="text-danger">{error}</p>}
      </div>
    </>
  );
};

export default Input;
