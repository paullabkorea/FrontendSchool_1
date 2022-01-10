import React from "react";
import { Route, Switch } from "react-router-dom";
import Resume from "./Resume";

const resumeId = ({ match }) => {
  console.log(match);
  return (
    <>
      <div>path : {match.path}</div>
    </>
  );
};

const ResumeRouter = () => {
  return (
    <Switch>
      <Route exact path="/resume/">
        <Resume
          hello="Hello"
          name="개리"
          hobby="게임"
          food="고기"
          color="blue"
        />
      </Route>
      <Route path="/resume/1" component={resumeId}></Route>
      <Route path="/resume/2" component={resumeId}></Route>
      <Route path="/resume/3" component={resumeId}></Route>
    </Switch>
  );
};

export default ResumeRouter;