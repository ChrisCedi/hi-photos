import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  delete: {
    color: theme.palette.actions.danger,
  },
}));

export { useStyles };
