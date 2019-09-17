import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Signin } from "../_pages/signin";
import { Questionaire } from "../Questionaire";
import { CreateAccountPage } from "../Questionaire/Pages/CreateAccountPage";
import edQuestionaire from "../Questionaire/edQuestionPaths";
import sleepQuestionaire from "../Questionaire/sleepQuestionPaths";
import hairQuestionaire from "../Questionaire/hairQuestionPaths";
import Callback from "./callback";

const useStyles = makeStyles({
  app: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

const Main = props => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Switch>
        <Route path="/signin" render={() => <Signin to="/account" />} />
        <Route
          path={edQuestionaire.startPath}
          render={() => <Questionaire questionaire={edQuestionaire} />}
        />
        <Route
          path={edQuestionaire.pathBase}
          render={() => <Questionaire questionaire={edQuestionaire} />}
        />
        <Route
          path={hairQuestionaire.startPath}
          render={() => <CreateAccountPage questionaire={hairQuestionaire} />}
        />
        <Route
          path={hairQuestionaire.pathBase}
          render={() => <Questionaire questionaire={hairQuestionaire} />}
        />
        <Route
          path={`${sleepQuestionaire.startPath}/:id`}
          render={() => <CreateAccountPage questionaire={sleepQuestionaire} />}
        />
        <Route
          path={sleepQuestionaire.pathBase}
          render={() => <Questionaire questionaire={sleepQuestionaire} />}
        />
        <Route path="/callback" component={Callback} />
      </Switch>
    </div>
  );
};

const connectedMain = withRouter(Main);
export { connectedMain as Main };
