import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  textField: {
    margintop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    //importanteeeeeee para modificar un textfield

    // "& label.Mui-focused": {
    //     color: "green"
    //   },
    //   "& .MuiInput-underline:after": {
    //     borderBottomColor: "green"
    //   },
    //   "& .MuiOutlinedInput-root": {
    //     "& fieldset": {
    //       borderColor: "red"
    //     },
    //     "&:hover fieldset": {
    //       borderColor: "yellow"
    //     },
    //     "&.Mui-focused fieldset": {
    //       borderColor: "green"
    //     }
    //   }
    "& label.Mui-focused": {
      color: theme.palette.font.light,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
  error: {
    color: theme.palette.actions.danger,
    fontSize: theme.typography.caption.fontSize,
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
  },
  description: {
    color: theme.palette.border.grey,
    paddingBottom: theme.spacing(2),
    textAlign: "center",
  },
  errorLogin: {
    textAlign: "center",
    color: theme.palette.actions.danger,
    paddingTop: theme.spacing(2),
  },
}));

export { useStyles };
