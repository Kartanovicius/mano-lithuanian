import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactLoader from "./component/loader";

function App() {
  const Article = lazy(() => import("./pages/article"));
  const NotFound = lazy(() => import("./pages/not-found"));
  const HomePage = lazy(() => import("./pages/homepage"));
  const Skill = lazy(() => import("./pages/skill"));

  return (
    <div className="">
      <Router>
          <Suspense fallback={<ReactLoader />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/article" component={Article} />
              <Route path="/skill" component={Skill} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
      </Router>
    </div>
  );
}

export default App;
