import React from 'react';
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
export const Roles = () => {
  return (
    <div>
      <div className="container">
        <div className=" d-flex justify-content-between">
          <div className='fs_13'>Roles</div>
          <div>
            <button className='btn btn-primary fs_13'>
              <Link to="/createrole" className='text-white'>Add Role</Link>
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-xl-12">
            <div className="card">
              {/* <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1 fs_16 py-2">
                  Card Tables
                </h4>
              </div> */}
              <div className="live-preview">
                <div className="table table-responsive table-card ">
                  <table className="table align-middle table-nowrap mb-0">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="cardtableCheck"
                            />
                            <label
                              className="form-check-label"
                              for="cardtableCheck"
                            ></label>
                          </div>
                        </th>
                        <th scope="col" className="fs_14 lh_xs black_color">
                          S.NO
                        </th>
                        <th scope="col" className="fs_14 lh_xs black_color">
                          Name
                        </th>
                        <th scope="col" className="fs_14 lh_xs black_color">
                          Description
                        </th>
                        <th scope="col" className="fs_14 lh_xs black_color">
                          Create By
                        </th>
                        <th scope="col" className="fs_14 lh_xs black_color">
                          Create At
                        </th>
                        <th scope="col" className="fs_14 lh_xs black_color">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="cardtableCheck01"
                            />
                            <label
                              className="form-check-label"
                              for="cardtableCheck01"
                            ></label>
                          </div>
                        </td>
                        <td className="fs_13">
                          1
                        </td>
                        <td className="fs_13 ">Sr. Associate</td>
                        <td className="fs_13 ">For Website Leads</td>
                        <td className="fs_13 ">-</td>
                        <td className="fs_13 ">20/12/2023</td>
                        <td>
                          <MdOutlineEdit />
                          <MdDeleteOutline className='ms-3' />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="cardtableCheck01"
                            />
                            <label
                              className="form-check-label"
                              for="cardtableCheck01"
                            ></label>
                          </div>
                        </td>
                        <td className="fs_13">
                          2
                        </td>
                        <td className="fs_13 "> Georgie Winters</td>
                        <td className="fs_13 ">07 Oct, 2021</td>
                        <td className="fs_13 ">-</td>
                        <td className="fs_13 ">20/12/2023</td>
                        <td>
                          <MdOutlineEdit />
                          <MdDeleteOutline className='ms-3' />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="cardtableCheck01"
                            />
                            <label
                              className="form-check-label"
                              for="cardtableCheck01"
                            ></label>
                          </div>
                        </td>
                        <td className="fs_13">
                          3
                        </td>
                        <td className="fs_13 "> Whitney Meier</td>
                        <td className="fs_13 ">06 Oct, 2021</td>
                        <td className="fs_13 ">-</td>
                        <td className="fs_13 ">20/12/2023</td>
                        <td>
                          <MdOutlineEdit />
                          <MdDeleteOutline className='ms-3' />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="cardtableCheck01"
                            />
                            <label
                              className="form-check-label"
                              for="cardtableCheck01"
                            ></label>
                          </div>
                        </td>
                        <td className="fs_13">
                          4
                        </td>
                        <td className="fs_13 ">Justin Maier</td>
                        <td className="fs_13 ">05 Oct, 2021</td>
                        <td className="fs_13 ">-</td>
                        <td className="fs_13 ">20/12/2023</td>
                        <td>
                          <MdOutlineEdit />
                          <MdDeleteOutline className='ms-3' />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

