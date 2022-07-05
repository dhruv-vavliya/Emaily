import React from "react";

// input, label, meta and other properties are coming from props which are
// provided by reduxForm.
// console.log(props)
const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label style={{ fontWeight: 500, fontSize: 16 }}>{label}</label>
      <input
        {...input}
        style={{
          marginBottom: "5px",
          fontFamily: "'Open Sans', sans serif",
          fontSize: 14,
          fontWeight: 600,
          borderBottom: "1px solid #ffd700",
        }}
      />
      <div
        className="red-text"
        style={{ marginBottom: "20px", fontWeight: 550 }}
      >
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
