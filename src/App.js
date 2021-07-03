import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import ReactLoader from "./component/loader";

function App() {
  const Article = lazy(() => import("./pages/article"));
  const NotFound = lazy(() => import("./pages/not-found"));
  const HomePage = lazy(() => import("./pages/homepage"));

  return (
    <div className="">
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
        >
          <Suspense fallback={<ReactLoader />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/article" component={Article} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </AnimatedSwitch>
      </Router>
    </div>
  );
}

export default App;
