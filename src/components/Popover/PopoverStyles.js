import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 210,
    [theme.breakpoints.down("xs")]: {
      width: 150,
    },
  },
}));

export { useStyles };
