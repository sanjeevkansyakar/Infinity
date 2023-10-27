"use client";
import { forwardRef, useId } from "react";
const Input = forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label
            className="inline-block mb-1 p-1 text-md max-md:text-sm font-semibold tracking-wide"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={`px-3 py-2 rounded-lg bg-white/80 text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          {...props}
          id={id}
          ref={ref}
        />
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
