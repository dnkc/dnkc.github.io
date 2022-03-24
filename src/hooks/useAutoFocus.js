import { useEffect } from "react";

export const useAutoFocus = (inputId) => {
  useEffect(() => {
    document.getElementById(inputId).focus();
  });
};
