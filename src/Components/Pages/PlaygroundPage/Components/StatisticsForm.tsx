import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import Statistics from "./Statistics";

const StatisticsForm = () => {
  const history = useNavigate();
  return (
    <div className="StatisticsForm">
      <Statistics />
      <Button onClick={() => history('/')}>
        Exit
      </Button>
    </div>
  )
}

export default StatisticsForm;