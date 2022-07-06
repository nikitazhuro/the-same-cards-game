import React, { FC } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../../UI/Button/Button"

const MenuForm: FC = () => {
  const history = useNavigate()
  const startTheGame = () => {
    history('/play')
  }
  return (
    <div className="MenuForm">
      <Button onClick={() => startTheGame()}>Start</Button>
      <Button>Options</Button>
      <Button>Exit</Button>
    </div>
  )
}

export default MenuForm;