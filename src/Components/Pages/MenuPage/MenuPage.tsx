import React, { FC } from "react";

import video from '../../../Assets/videoGif.gif'

import MenuForm from "./Components/MenuForm";

const MenuPage: FC = () => {
  return (
    <div className="MenuPage">
      <MenuForm />
      <div>
      <img
        className="Background"
        src={video}
      />
    </div>
    </div>
  )
}

export default MenuPage;