import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "components/layout/Sidebar";
import FirstSlide from "components/feature/carousel/FirstSlide";
import ResultSlide from "components/feature/carousel/ResultSlide";
import DevSlide from "components/feature/carousel/DevSlide";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/first-slide" exact component={FirstSlide} />
        <Route path="/result-slide" exact component={ResultSlide} />
        <Route path="/dev-slide" exact component={DevSlide} />
      </Switch>
    </Router>
  );
}

export default App;
