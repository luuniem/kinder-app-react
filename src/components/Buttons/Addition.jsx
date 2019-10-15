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
const Addition = props => {
  const classes = useStyles();
  const { add } = props;
  return (
    <Button
      onClick={add}
      variant="contained"
      color="secondary"
      className={`${classes.button} operator-btn-red`}
    >
      +
    </Button>
  );
};

export default Addition;
