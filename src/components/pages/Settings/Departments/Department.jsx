import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { HiMiniPlus } from "react-icons/hi2";
import { DepartmentContext } from "../../../../context/deparmentContext/DepartmentContextProvider";
import { useDepartmentContext } from "../../../../hooks/useDepartmentContext";
import { toast } from "react-toastify";
import axios from "axios";

const Department = () => {
  const { DepartmentState } = useDepartmentContext();
  console.log(DepartmentState.departments, "DepartmentStatedfhfgh");

  const handleDepartmentDelete = async (id) => {
    let departmentID = { id: id };
    try {
      const { data, status } = await toast.promise(
        axios.delete(
          `${process.env.REACT_APP_API_URL}/deletedepartment/${id}`,
          id
        ),
        {
          loading: "Loading...",
          success: "Department Deleted Successfully",
          error: "Department not Deleted",
        }
      );
      console.log(data, status, "seethdsvf");

      if (status === 200) {
        console.log(data, "hellobb");
        // DispatchCourseState({ type: "DELETE_COURSE", payload: departmentID });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="card border-0">
          <div className="card-header">
            <div className="d-flex justify-content-between">
              <h5 className="fs-16 txt-color">Department</h5>
              <div>
                <button type="button" class="btn btn_primary add-btn fs_13 ">
                  <Link to="/createdepartment" className="button_color">
                    <HiMiniPlus /> Add Department
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
                    <th scope="col" className="fs_13 lh_xs fw_600 black_color ">
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
                    <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                      Create At
                    </th>
                    <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {DepartmentState.departments &&
                  DepartmentState?.departments.length > 0 ? (
                    DepartmentState.departments.map((item, index) => {
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
                            {/* {console.log('department_name', item[0].department_name)} */}
                            {item.department_name}
                          </td>
                          <td className="fs_13 black_color  lh_xs bg_light">
                            description
                          </td>
                          <td className="fs_13 black_color  lh_xs bg_light">
                            user
                          </td>
                          <td className="fs_13 black_color  lh_xs bg_light">
                            {date}
                          </td>
                          <td className="fs_13 black_color  lh_xs bg_light ">
                            <Link to={`/updatedepartment/${item.id}`}>
                              <MdEdit className="edit_icon table_icons me-3" />
                            </Link>
                            <MdDelete
                              className="delete_icon table_icons me-3"
                              onClick={() => handleDepartmentDelete(item.id)}
                            />
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td>No Data Found</td>
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
  );
};
export default Department;
