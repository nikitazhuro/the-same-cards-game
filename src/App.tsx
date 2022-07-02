import React, { FC } from "react";
import AppRouter from "./Router/AppRouter";

import './Styles/index.css';

const App: FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  )
}

export default App;