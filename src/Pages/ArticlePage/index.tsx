import {
  Select,
  MenuItem,
  Container,
  FormHelperText,
  Stack,
  SelectChangeEvent,
  IconButton,
  TextField,
  List,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState, useRef } from "react";
import ArticleItem from "./ArticleItem";
import Paginator from "../../Components/Paginator";

export interface IArticle {
  link: string;
  title: string;
  desc: string;
  time: string;
  category: string;
  icon: string;
}

interface ICategory {
  value: number;
  category: string;
}

// get unique category from json
const getCategories = (list: IArticle[]) => {
  let value = 0;
  const categories: ICategory[] = [
    {
      value: 0,
      category: "Unselected",
    },
  ];
  list.forEach((item) => {
    if (!categories.some((category) => category.category === item.category)) {
      categories.push({
        value: ++value,
        category: item.category,
      });
    }
  });
  return categories;
};

function ArticlePage() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [articleItems, setArticleItems] = useState<IArticle[]>([]);
  const [filteredItems, setfilteredItems] = useState<IArticle[]>([]);
  const [displayedItems, setDisplayedItems] = useState<IArticle[]>([]);
  const [categoryValue, setCategoryValue] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const searchRef = useRef<HTMLInputElement>();
  let keyword = "";

  const categoryChangeHandler = (event: SelectChangeEvent<number>) => {
    setCurrentPage(1);
    setCategoryValue(event.target.value as number);
  };

  const searchHandler = () => {
    keyword = searchRef.current ? searchRef.current.value : "";
    setCurrentPage(1);
    filterItems();
  };

  // filter the results
  const filterItems = () => {
    let _filteredItems = articleItems;
    // filter the keyword
    if (keyword !== "") {
      const upperKeyword = keyword.toUpperCase();
      _filteredItems = articleItems.filter((article) => {
        const upperTitle = article.title.toUpperCase();
        const upperDesc = article.desc.toUpperCase();
        if (
          upperTitle.indexOf(upperKeyword) !== -1 ||
          upperDesc.indexOf(upperKeyword) !== -1
        ) {
          return true;
        }
        return false;
      });
    }
    // filter the category
    const currentCategory = categories.find(
      (category) => category.value === categoryValue
    )?.category;
    if (currentCategory && currentCategory !== "Unselected") {
      _filteredItems = _filteredItems.filter(
        (item) => item.category === currentCategory
      );
    }
    // update states
    setfilteredItems(_filteredItems);
    setDisplayedItems(_filteredItems.slice(0, 6));
  };

  useEffect(() => {
    fetch("./assets/json/article.json")
      .then((res) => res.json())
      .then((res) => {
        const _categories = getCategories(res as IArticle[]);
        setCategories(_categories);
        setArticleItems(res as IArticle[]);
        setDisplayedItems((res as IArticle[]).slice(0, 6));
        setfilteredItems(res);
      });
  }, []);

  useEffect(() => {
    filterItems();
  }, [categoryValue]);

  return (
    <Container sx={{ p: 3 }} maxWidth="lg">
      <Stack direction="row" spacing={3} justifyContent="center">
        <div>
          <Select
            fullWidth
            onChange={categoryChangeHandler}
            value={categoryValue}
            size="small"
          >
            {categories.map((item) => {
              return (
                <MenuItem key={item.value} value={item.value}>
                  {item.category}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText sx={{ textAlign: "center" }}>Category</FormHelperText>
        </div>
        <div>
          <TextField
            inputRef={searchRef}
            size="small"
            label="Search"
            variant={"outlined"}
            InputProps={{
              endAdornment: (
                <IconButton onClick={searchHandler}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
          <FormHelperText sx={{ textAlign: "center" }}>Keyword</FormHelperText>
        </div>
      </Stack>
      <Stack justifyContent={"center"}>
        <Container maxWidth={"md"}>
          <List>
            {displayedItems.map((item, index) => {
              return <ArticleItem key={index} item={item} />;
            })}
          </List>
        </Container>
      </Stack>
      {filteredItems.length <= 0 ? (
        <Typography textAlign={"center"}>No Search Results Here</Typography>
      ) : (
        <Paginator
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          dataSource={filteredItems}
          setDisplayeditems={setDisplayedItems}
        />
      )}
    </Container>
  );
}

export default ArticlePage;
