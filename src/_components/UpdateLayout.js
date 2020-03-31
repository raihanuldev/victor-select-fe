import React from "react";
import { ExitButton } from "./";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appContent: {
    backgroundColor: "#FAFAFA",
    flex: 1,
    overflowY: "auto",
    [theme.breakpoints.up(1280)]: {
      paddingTop: 60
    },
    [theme.breakpoints.down(1279)]: {
      paddingTop: 110
    }
  },
  header: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    right: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 8px",
    background: "rgb(255, 255, 255)",
    transition: "transform 0.3s ease 0s"
  },
  headerText: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: "100%"
  },
  text: {
    fontSize: 16,
    letterSpacing: "0.64px",
    color: "rgb(110, 119, 127)",
    fontWeight: 400,
    margin: 0
  },
  button: {
    position: "absolute",
    left: "calc(8px)",
    top: "50%",
    transform: "translateY(-50%)"
  },
  appContentInner: {
    padding: "0 13px",
    width: 580,
    maxWidth: "100%",
    margin: "0 auto"
  },
  appMain: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    background: "rgb(255,255,255)"
  }
}));

const Header = props => {
  const classes = useStyles();
  const { headerText } = props;

  return (
    <div className={classes.header}>
      <div className={classes.button}>
        <ExitButton />
      </div>
      <div className={classes.headerText}>
        <h3 className={classes.text}>{headerText}</h3>
      </div>
    </div>
  );
};

export const UpdateLayout = props => {
  const classes = useStyles();
  const { headerText } = props;

  return (
    <div className={classes.appMain}>
      <Header headerText={headerText} />
      <div className={classes.appContent}>
        <div className={classes.appContentInner}>{props.children}</div>
      </div>
    </div>
  );
};
