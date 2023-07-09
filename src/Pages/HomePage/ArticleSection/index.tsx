import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import SectionHeading from "../../../Components/SectionHeading";
import { IArticle } from "../../ArticlePage";
import ArticleItem from "../../ArticlePage/ArticleItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

function ArticleSection() {
  const [articleItems, setArticleItems] = useState<IArticle[]>([]);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/Articles");
  };

  useEffect(() => {
    fetch("./assets/json/article.json")
      .then((res) => res.json())
      .then((res) => {
        setArticleItems((res as IArticle[]).slice(0, 4));
      });
  }, []);

  return (
    <Container maxWidth={"lg"}>
      <SectionHeading heading="Recent Articles" />
      {articleItems.map((item, index) => {
        return <ArticleItem item={item} />;
      })}
      <Box display={"flex"} justifyContent={"center"}>
        <Button
          onClick={clickHandler}
          endIcon={<MoreVertIcon />}
          variant={"contained"}
        >
          Explore More Articles
        </Button>
      </Box>
    </Container>
  );
}

export default ArticleSection;
