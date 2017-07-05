import React from 'react';

TextInput = ({placeholder, onChange, value}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
