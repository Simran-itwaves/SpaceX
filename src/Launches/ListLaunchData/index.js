import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "../../Component/Pagination/index";

export default function ListLaunchData({ launches, totalPages, query, page }) {
  return (
    <div>
      {Array.isArray(launches) && launches.length ? (
        <>
          <div className="d-flex row container justify-content-evenly mx-auto ">
            {launches?.map((launch) => (
              <div
                className="card my-4 p-0"
                style={{ width: "12rem" }}
                key={launch.id}
              >
                <img
                  src="https://media.timeout.com/images/105653190/image.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{launch.name}</h5>
                  <p className="card-text">{launch.status}</p>
                </div>
              </div>
            ))}
          </div>
          <Pagination totalPages={totalPages} query={query} page={page} />
        </>
      ) : (
        <div className="mt-5">no data found</div>
      )}
    </div>
  );
}
