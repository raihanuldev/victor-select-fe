import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { formatMoney } from "../_constants/drugSelections";

const useStyles = makeStyles(theme => ({
  container: {
    margin: 0,
    paddingLeft: 8,
    paddingRight: 8
  },
  titleLine: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 0,
    marginBottom: theme.spacing(0.5) 
  },
  priceBox: {
    display: 'flex',
    alignSelf: 'flex-start'
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
    color: theme.palette.primary.main
  },
  dose: {
    fontSize: 11,
    fontWeight: 300,
    alignSelf: 'center',
    marginLeft: 4,
    marginTop: 4
  },
  description: {
    fontSize: 14,
    fontWeight: 300,
    marginTop: 0,
  },
  checked: {
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    borderWidth: 1
  },
}));

export const DrugSelectionDisplay = props => {
  const { options, checked } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.titleLine}>
        <Typography
          className={classes.title}
        >
          {options.label}
        </Typography>
        <div className= {classes.priceBox}>
        <Typography className={classes.price}> 
          {formatMoney(options.price,2)}
        </Typography>
        <Typography className={classes.dose}> 
          per dose
        </Typography>
        </div>
      </div>
        <Typography
          className={classes.description}
          variant="body2"
        >
                  {options.description}
                  </Typography>
        </div>
  );
};
