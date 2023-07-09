import { Stack, Pagination } from "@mui/material";
import { PaginatorCore } from "./PaginatorCore";

interface IPaginatorProps {
  dataSource: any[];
  setDisplayeditems: React.Dispatch<React.SetStateAction<any[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function Paginator(props: IPaginatorProps) {
  const paginatorCore = new PaginatorCore(props.dataSource, 6);

  const changePageHandler = (page: number) => {
    const displayedItems = paginatorCore.getPage(page);
    props.setDisplayeditems(displayedItems);
    props.setCurrentPage(page);
  };

  return (
    <Stack alignItems="center">
      <Pagination
        page={props.currentPage}
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
