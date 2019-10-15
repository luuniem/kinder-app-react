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

const Subtraction = props => {
  const { subtract } = props;
  const classes = useStyles();

  return (
    <Button
      onClick={subtract}
      variant="contained"
      color="primary"
      className={`${classes.button} operator-btn-blue`}
    >
      -
    </Button>
  );
};

export default Subtraction;
