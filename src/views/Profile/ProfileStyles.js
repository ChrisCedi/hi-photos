import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridAvatar: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(2),
  },
  gridInfo: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",

    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
  avatar: {
    width: 200,
    height: 200,
    border: `5px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down("xs")]: {
      width: 100,
      height: 100,
    },
  },
  username: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

export { useStyles };
