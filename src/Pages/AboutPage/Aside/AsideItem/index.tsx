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
            const anchor = document.querySelector(props.anchor);
            anchor?.scrollIntoView();
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
