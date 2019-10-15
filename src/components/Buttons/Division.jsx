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
const Division = props => {
  const classes = useStyles();
  const { divide } = props;
  return (
    <Button
      onClick={divide}
      variant="contained"
      className={`${classes.button} operator-btn-green`}
    >
      ÷
    </Button>
  );
};

export default Division;
