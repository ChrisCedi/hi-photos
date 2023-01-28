import { makeStyles } from "@material-ui/core";
import { Images } from "../../assets/images";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${Images.mainBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  },
  bodyRegister: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  bodyLogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: "100vh",
  },
  title: {
    color: theme.palette.border.grey,
    textAlign: "center",
  },
  boxForm: {
    border: `1px solid ${theme.palette.secondary.main}`,
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
