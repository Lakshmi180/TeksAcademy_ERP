import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { HiMiniPlus } from "react-icons/hi2";
import { BranchContext } from "../../../../context/branchContext/BranchContextProvider";
import { useBranchContext } from "../../../../hooks/useBranchContext";

export const Branch = () => {
  const { DispatchBranch, BranchState, getAllBranches } = useBranchContext();
  console.log(BranchState.branches, "kbdvjdj");

  const [createdBy, setCreatedBy] = useState(() => {
    const userData = JSON.parse(localStorage.getItem("data"));
    return userData || "";
  });

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="card border-0">
              <div className="card-header">
                <div className="d-flex justify-content-between">
                  <h5 className="fs-16 txt-color">Branch</h5>
                  <div>
                    <button
                      type="button"
                      class="btn btn_primary add-btn fs_13 "
                    >
                      <Link to="/createbranch" className="button_color">
                        <HiMiniPlus /> Add Branch
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div class="table-responsive table-card border-0">
                  <table className="table table-centered align-middle table-nowrap equal-cell-table">
                    <thead>
                      <tr className="">
                        <th
                          scope="col"
                          className="fs_13 lh_xs fw_600 black_color "
                        >
                          S.No
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600  "
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600  "
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600  "
                        >
                          Create By
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          Create At
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      style={{ maxHeight: "400px", overflowY: "auto" }}
                      className=""
                    >
                      {BranchState.branches &&
                      BranchState.branches.length > 0 ? (
                        BranchState.branches.map((item, index) => {
                          let date = new Date(item.date);
                          const day = date.getUTCDate();
                          const monthIndex = date.getUTCMonth();
                          const year = date.getUTCFullYear();

                          const monthAbbreviations = [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                          ];

                          // Formatting the date
                          date = `${day < 10 ? "0" : ""}${day}-${
                            monthAbbreviations[monthIndex]
                          }-${year}`;

                          return (
                            <tr>
                              <td className="fs_13 black_color fw_500 lh_xs bg_light ">
                                {index + 1}
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light">
                                {item.branch_name}
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light">
                                Description
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light">
                                {createdBy?.user?.fullname}
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light">
                                {date}
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light ">
                                <Link to={`/editbranch/${item.id}`}>
                                  <MdEdit className="text-mute table_icons me-3" />
                                </Link>

                                <MdDelete className="text-mute table_icons me-3" />
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td>no data found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="align-items-center d-flex justify-content-between row text-center text-sm-start">
                  <div className="col-sm">
                    <div className="text_mute pagination-text">
                      Showing <span className="fw-semibold">5</span> of{" "}
                      <span className="fw-semibold">25</span> Results
                    </div>
                  </div>
                  <div className="col-sm-auto mt-3 mt-sm-0">
                    <ul className="mt-2 pagination pagination-separated pagination-sm mb-0 justify-content-center">
                      <li className="page-item disabled p-1">
                        <a href="#" className="page-link ">
                          ←
                        </a>
                      </li>
                      <li className="page-item p-1">
                        <a href="#" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item active p-1">
                        <a href="#" className="page-link ">
                          2
                        </a>
                      </li>
                      <li className="page-item p-1">
                        <a href="#" className="page-link">
                          3
                        </a>
                      </li>
                      <li className="page-item p-1">
                        <a href="#" className="page-link">
                          →
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
