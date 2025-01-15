import React from "react";

function FormTextarea({ label, name, value, placeholder, rows, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default FormTextarea;
