/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { debounce } from "lodash";
import { fetchLaunchesData } from "../../Redux/Reducer/Launches/launchesSlice";
// import Pagination from "../../Component/Pagination";
import SearchBar from "../../Launches/SearchBar";
import FilterPanel from "../../Launches/FilterPanel";
import ListLaunchData from "../../Launches/ListLaunchData";
import Loader from "../../Component/Loader";

export default function Launches() {
  const { launches, totalPages, loading, page } = useSelector(
    (state) => state.launches
  );
  const [query, setQuery] = useState({});
  const dispatch = useDispatch();
  const handleSearchData = debounce((value) => {
    if (value) {
      setQuery((prev) => ({ ...prev, $text: { $search: value } }));
    } else {
      setQuery((prev) => {
        const { $text, ...rest } = prev;
        return rest;
      });
    }
  }, 500);
  const handleLaunchDate = (value) => {
    if (value === "all") {
      setQuery((prev) => {
        const { date_utc, ...rest } = prev;
        return rest;
      });
    } else {
      setQuery((prev) => ({
        ...prev,
        date_utc: {
          $gte: moment().subtract(1, `${value}`).format(),
          $lte: moment(),
        },
      }));
    }
  };
  const handleLaunchStatus = (value) => {
    if (value === "all") {
      setQuery((prev) => {
        const { success, ...rest } = prev;
        return rest;
      });
    } else {
      setQuery((prev) => ({ ...prev, success: value }));
    }
  };
  const handleLaunchUpcoming = (checked) => {
    if (checked) {
      setQuery((prev) => ({ ...prev, upcoming: true }));
    } else {
      setQuery((prev) => {
        const { upcoming, ...rest } = prev;
        return rest;
      });
    }
  };
  const handleClearFilter = () => {
    setQuery({});
  };
  useEffect(() => {
    dispatch(
      fetchLaunchesData({
        query,
        options: {},
      })
    );
  }, [dispatch, query]);
  return (
    <>
      <SearchBar handleSearchData={handleSearchData} />
      <div className="d-flex">
        <div className="p-4 mt-4 border" style={{ width: "20%" }}>
          <FilterPanel
            handleLaunchDate={handleLaunchDate}
            handleLaunchStatus={handleLaunchStatus}
            handleLaunchUpcoming={handleLaunchUpcoming}
            handleClearFilter={handleClearFilter}
          />
        </div>
        <div className="mx-auto w-auto">
          {loading ? (
            <Loader />
          ) : (
            <ListLaunchData
              launches={launches}
              totalPages={totalPages}
              page={page}
              query={query}
            />
          )}
        </div>
      </div>
    </>
  );
}
