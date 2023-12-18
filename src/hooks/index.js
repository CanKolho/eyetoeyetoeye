import { useState } from "react"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook for creating form fields.
 * 
 * @param {string} type - The type of the form field.
 * @returns {object} - An object containing the form field properties and methods.
 */
export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => setValue('')
  
  return {
    type,
    value,
    onChange,
    reset
  }
}

/**
 * Custom hook that scrolls the window to the top on route change.
 */
export const useScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname]) // Triggered on route change
}
