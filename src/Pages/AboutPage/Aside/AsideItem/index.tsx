import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";
import "./style.scss";

interface IAsideItemProps {
  children: React.ReactElement;
  headingName: string;
  anchor: string;
}

function AsideItem(props: IAsideItemProps) {
  return (
    <>
      <ListItem className="list-item" disablePadding>
        <ListItemButton
          onClick={() => {
            window.location.href = props.anchor;
          }}
        >
          <ListItemIcon sx={{ color: "#fff" }}>{props.children}</ListItemIcon>
          <ListItemText primary={props.headingName} />
        </ListItemButton>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </>
  );
}

export default AsideItem;
