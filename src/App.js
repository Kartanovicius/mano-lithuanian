import React from "react";
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactLoader from "./component/loader";

function App() {
  const Blog = lazy(() => import("./pages/blog"));
  const NotFound = lazy(() => import("./pages/not-found"));
  const HomePage = lazy(() => import("./pages/homepage"));

  return (
    <div className="">
      <Router>
        <Suspense fallback={<ReactLoader />}>
          <Switch>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/blog" component={Blog} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
