import { useState } from "react";

const CountController = () => {
  const [value, setValue] = useState(1);

  function handlePlusClick() {
    setValue(value + 1);
  }

  function handleMinusClick() {
    if (value > 1) setValue(value - 1);
  }
  return (
    <div className="input-group">
      <button
        className="minus-item input-group-addon btn btn-primary"
        onClick={() => handleMinusClick()}
      >
        -
      </button>
      <input
        type="number"
        className="item-count form-control"
        min="0"
        max="100"
        value={value}
        disabled
      />
      <button
        className="plus-item btn btn-primary input-group-addon"
        onClick={() => handlePlusClick()}
      >
        +
      </button>
    </div>
  );
};

export default CountController;
