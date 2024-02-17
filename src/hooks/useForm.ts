import { ChangeEvent } from "react";
import { useState } from "react";

export const UseForm = <T extends Object>(initialState: T) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return { values, handleInputChange, reset };
};
