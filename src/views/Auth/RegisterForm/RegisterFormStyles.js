import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  textField: {
    margintop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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
        borderColor: theme.palette.border.grey,
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
}));

export { useStyles };
