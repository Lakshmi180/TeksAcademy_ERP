import React, { useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { HiMiniPlus } from "react-icons/hi2";
import { CourseContext } from "../../../../context/courseContext/CourseContextProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useCourseContext } from "../../../../hooks/useCourseContext";

const Course = () => {
  const { DispatchCourse, courseState, getAllCourses } = useCourseContext();

  const handleDeleteCourse = async (id) => {
    let courseID = { id: id };
    try {
      const { data, status } = await toast.promise(
        axios.delete(`${process.env.REACT_APP_API_URL}/deletecourse/${id}`, id),
        {
          loading: "Loading...",
          success: "Course Deleted Successfully",
          error: "Course not Deleted",
        }
      );
      console.log(data, status, "seethdsvf");

      if (status === 200) {
        console.log(data, "hellobb");
        DispatchCourse({ type: "DELETE_COURSE", payload: courseID });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="card border-0">
              <div className="card-header">
                <div className="d-flex justify-content-between">
                  <h5 className="fs-16 txt-color">Course</h5>
                  <div>
                    <button
                      type="button"
                      class="btn btn_primary add-btn fs_13 "
                    >
                      <Link to="/createcourse" className="button_color">
                        <HiMiniPlus /> Add Course
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div class="table-responsive table-card border-0 ">
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
                          Course Name
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600  "
                        >
                          Course Package
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600  "
                        >
                          Fee
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600  "
                        >
                          Max Discount
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
                      className="scrollable-body"
                      style={{
                        display: "block",
                        flexDirection: "column",
                        maxHeight: "calc(80vh - 200px)",
                        overflowY: "auto",
                      }}
                    >
                      {courseState.courses && courseState.courses.length > 0 ? (
                        courseState.courses.map((item, index) => {
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
                                {item.course_name}
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light">
                                {item.course_package}
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light">
                                {item.fee}
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light">
                                {item.max_discount}
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light">
                                {date}
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light ">
                                <NavLink to={`/updatecourse/${item.id}`}>
                                  <MdEdit className="edit_icon table_icons me-3" />
                                </NavLink>
                                <MdDelete
                                  className="delete_icon table_icons me-3"
                                  onClick={(e) => handleDeleteCourse(item.id)}
                                />
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

                  {/* <div className="table-responsive">
                                        <table className="table table-centered align-middle table-nowrap equal-cell-table">
                                            <thead className="sticky-header">
                                                <tr>
                                                    <th scope="col" className="fs_13 lh_xs fw_600 black_color">
                                                        S.No
                                                    </th>
                                                    <th scope="col" className="fs_13 lh_xs black_color fw_600">
                                                        Course Name
                                                    </th>
                                                    <th scope="col" className="fs_13 lh_xs black_color fw_600">
                                                        Course Package
                                                    </th>
                                                    <th scope="col" className="fs_13 lh_xs black_color fw_600">
                                                        Fee
                                                    </th>
                                                    <th scope="col" className="fs_13 lh_xs black_color fw_600">
                                                        Max Discount
                                                    </th>
                                                    <th scope="col" className="fs_13 lh_xs black_color fw_600">
                                                        Created At
                                                    </th>
                                                    <th scope="col" className="fs_13 lh_xs black_color fw_600">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="scrollable-body">
                                                {courseState.courses && courseState.courses.length > 0 ? (
                                                    courseState.courses.map((item, index) => {
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
                                                            "Dec"
                                                        ];

                                                        // Formatting the date
                                                        date = `${day < 10 ? "0" : ""}${day}-${monthAbbreviations[monthIndex]}-${year}`;
                                                        return (
                                                            <tr key={item.id}>
                                                                <td className="fs_13 black_color fw_500 lh_xs bg_light">{index + 1}</td>
                                                                <td className="fs_13 black_color lh_xs bg_light">{item.course_name}</td>
                                                                <td className="fs_13 black_color lh_xs bg_light">{item.course_package}</td>
                                                                <td className="fs_13 black_color lh_xs bg_light">{item.fee}</td>
                                                                <td className="fs_13 black_color lh_xs bg_light">{item.max_discount}</td>
                                                                <td className="fs_13 black_color lh_xs bg_light">{date}</td>
                                                                <td className="fs_13 black_color lh_xs bg_light">
                                                                    <NavLink to={`/updatecourse/${item.id}`}>
                                                                        <MdEdit className="text-mute table_icons me-3" />
                                                                    </NavLink>
                                                                    <MdDelete className="text-mute table_icons me-3" onClick={() => handleDeleteCourse(item.id)} />
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                ) : (
                                                    <tr>
                                                        <td colSpan="7">No data found</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div> */}
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
export default Course;
