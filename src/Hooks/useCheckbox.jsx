import { useState } from "react";

const useCheckbox = (initialValue = false) => {
  const [checked, setChecked] = useState(initialValue);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return [checked, handleChange];
};

export default useCheckbox;
