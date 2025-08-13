// src/DatePickerField.js
import React from 'react';
import { useField } from 'formik';

const DatePickerField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <div className="custom-date-picker">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="date"
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'input-error' : ''}
      />
    </div>
  );
};

export default DatePickerField;
