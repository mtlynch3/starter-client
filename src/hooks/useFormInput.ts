import React, { useState } from "react";

export default function useFormInput(
  initialValue = ""
): [
  string,
  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
] {
  const [value, setvalue] = useState(initialValue);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setvalue(event.target.value);
  };
  return [value, handleChange];
}
