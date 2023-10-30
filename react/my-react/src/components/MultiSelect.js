import React, { useState } from 'react';

const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (event) => {
    const options = event.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedOptions(selectedValues);
  };

  return (
    <div>
      <select multiple onChange={handleSelectChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>
      <div>
        Selected Options: {selectedOptions.join(', ')}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
