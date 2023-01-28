import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.primary,
    position: "relative",
    borderBottom: `2px solid #bdbdbdbd`,
    padding: theme.spacing(1),
  },
  gridTitleLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleLogo: {
    color: theme.palette.font.dark,
    textAlign: "center",
    fontSize: theme.typography.h4.fontSize,
    [theme.breakpoints.down("xs")]: {
      paddingBottom: theme.spacing(2),
    },
  },
}));

export { useStyles };
