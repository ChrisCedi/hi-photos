import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      width: "100%",
    },
  },
  avatar: {
    width: 30,
    height: 30,
  },
}));

export { useStyles };
