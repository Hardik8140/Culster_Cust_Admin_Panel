import { useState } from "react";

const useCheckbox = (initialValue = false) => {
  const [checked, setChecked] = useState(initialValue);

  const handleChange = (event) => {
    if (event) {
      setChecked(event.target.checked);
    } else {
      setChecked(true);
    }
  };

  return [checked, handleChange];
};

export default useCheckbox;
