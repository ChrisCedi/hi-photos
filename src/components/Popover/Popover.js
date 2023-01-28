import React from "react";
import { useStyles } from "./PopoverStyles";
import {
  Popover as MuiPopover,
  IconButton,
  Box,
  CardActionArea,
  Divider,
} from "@material-ui/core";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ScheduleIcon from "@material-ui/icons/Schedule";

export const Popover = () => {
  const classes = useStyles();

  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <IconButton variant="contained" {...bindTrigger(popupState)}>
              <MoreHorizIcon color="secondary" />
            </IconButton>
            <MuiPopover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <CardActionArea>
                <Box p={2} className={classes.menuItem}>
                  futuras acciones
                  <ScheduleIcon color="secondary" />
                </Box>
              </CardActionArea>
              <Divider />
              <CardActionArea>
                <Box p={2} className={classes.menuItem}>
                  Cerrar sesión
                  <ExitToAppIcon color="secondary" />
                </Box>
              </CardActionArea>
            </MuiPopover>
          </div>
        )}
      </PopupState>
    </>
  );
};
