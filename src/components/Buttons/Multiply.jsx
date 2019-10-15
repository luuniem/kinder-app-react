import React from "react";
import "./Buttons.scss";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));
const Multiply = props => {
  const { multiply } = props;
  const classes = useStyles();

  return (
    <Button
      onClick={multiply}
      variant="contained"
      className={`operator-btn-yellow ${classes.button}`}
    >
      X
    </Button>
  );
};

export default Multiply;
