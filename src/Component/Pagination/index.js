import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import classes from "./pagination.module.css";
import { fetchLaunchesData } from "../../Redux/Reducer/Launches/launchesSlice";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Pagination({ totalPages, query, page }) {
  const dispatch = useDispatch();
  function handlePageClick(e) {
    console.log(e.selected + 1);
    dispatch(
      fetchLaunchesData({
        query,
        options: {
          page: e.selected + 1,
        },
      })
    );
  }
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        previousLabel="<<"
        nextLabel=">>"
        onPageChange={(e) => handlePageClick(e)}
        pageRangeDisplayed={5}
        forcePage={page - 1}
        pageCount={totalPages}
        disableInitialCallback={true}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        containerClassName={classes.pagination}
        breakLinkClassName={classes.page_link}
        pageLinkClassName={classes.page_link}
        previousLinkClassName={classes.page_link}
        nextLinkClassName={classes.page_link}
        activeClassName={classes.active}
        disabledClassName={classes.disable}
      />
    </div>
  );
}
