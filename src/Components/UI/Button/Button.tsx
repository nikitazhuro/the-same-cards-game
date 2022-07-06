import React, { FC, ReactNode } from "react";

interface IButton {
  children? : any,
}

const Button: FC<any> = (props : IButton) => {
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}

export default Button;