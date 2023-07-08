import { Stack, Pagination } from "@mui/material";
import { PaginatorCore } from "./PaginatorCore";
import { IProjectItem } from "../../Pages/ProjectPage";

interface IPaginatorProps {
  dataSource: any[];
  setDisplayeditems: React.Dispatch<React.SetStateAction<IProjectItem[]>>;
}

function Paginator(props: IPaginatorProps) {
  const paginatorCore = new PaginatorCore(props.dataSource, 6);

  const changePageHandler = (page: number) => {
    const displayedItems = paginatorCore.getPage(page);
    props.setDisplayeditems(displayedItems);
  };

  return (
    <Stack alignItems="center">
      <Pagination
        onChange={(event, page) => {
          changePageHandler(page);
        }}
        size="large"
        count={paginatorCore.pageCount}
        siblingCount={0}
        boundaryCount={1}
        color="primary"
      />
    </Stack>
  );
}

export default Paginator;
