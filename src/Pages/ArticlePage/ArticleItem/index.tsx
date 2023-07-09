import {
  Avatar,
  Card,
  CardContent,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { IArticle } from "..";

interface IArticleItem {
  item: IArticle;
}

function ArticleItem(props: IArticleItem) {
  const item = props.item;

  const JumpHandler = (link: string) => {
    window.open(link);
  };

  return (
    <Card
      onClick={() => {
        JumpHandler(item.link);
      }}
      sx={{
        mb: 3,
        cursor: "pointer",
        ":hover": {
          backgroundColor: grey[200],
        },
      }}
    >
      <CardContent>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={item.icon} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant={"h3"} sx={{ fontSize: "20px" }}>
                {item.title}
              </Typography>
            }
            secondary={
              <>
                <Typography sx={{ py: 1 }} variant={"body2"} color={grey[600]}>
                  {item.desc}
                </Typography>
                <Typography variant={"body2"}>{item.time}</Typography>
              </>
            }
          />
        </ListItem>
      </CardContent>
    </Card>
  );
}

export default ArticleItem;
