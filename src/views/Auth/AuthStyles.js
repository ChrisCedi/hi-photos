import { makeStyles } from "@material-ui/core";
import { Images } from "../../assets/images";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${Images.mainBackground})`,
    backgroundSize: "cover",
    height: "100vh",
    backgroundPosition: "center",
  },
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
  title: {
    color: theme.palette.border.grey,
  },
  boxForm: {
    border: `1px solid ${theme.palette.border.grey}`,
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    marginTop: theme.spacing(2),
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  registerButton: {
    color: theme.palette.actions.action,
  },
}));

export { useStyles };
