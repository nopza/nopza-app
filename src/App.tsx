import React from "react";
import RegisterPage from "./components/Pages/RegisterPage";
import HomePage from "./components/Pages/HomePage";

import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
};

export default App;
