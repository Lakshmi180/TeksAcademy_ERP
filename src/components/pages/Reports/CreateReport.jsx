import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
function CreateReport() {
    return (
        <div className='container'>
            <div className='card'>
                <div className="d-flex justify-content-between mt-4">
                    <h5 className="ms-2"> Reports</h5>
                    <NavLink to="/addassetsform" className="btn btn_primary fs-13">
                       Create Report
                    </NavLink>
                </div>
                <div className="card-body mt-2 ">
                    <div
                        className="table-responsive table-card "
                      
                    >
                        <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                            <thead className="  table-light ">
                                <tr className="shadow-sm bg-body-tertiary rounded  border-bottom  ">
                                    <th scope="col" className="fs_14 lh_xs fw_600 ">
                                        S.No
                                    </th>
                                    <th scope="col" className="fs_14 lh_xs  fw_600 ">
                                     Report Name
                                    </th>
                                    <th scope="col" className="fs_14 lh_xs fw_600  ">
                                       Report Type
                                    </th>
                                    <th scope="col" className="fs_14 lh_xs fw_600  ">
                                        Created By
                                    </th>
                                    <th scope="col" className="fs_14 lh_xs fw_600  ">
                                       Created At
                                    </th>
                                    <th scope="col" className="fs_14 lh_xs fw_600  ">
                                     Actions
                                    </th>
                                </tr>
                                <tr>
                        <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                          1
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                       lipika <br />
                       
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                          Kukkatpally
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                        T-shirt
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                       
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light '>
                        <MdDelete className='delete_icon table_icons me-3' />
                        </td>
                       
                        
                        
                      </tr>
                      <tr>
                        <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                          1
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                       lipika <br />
                       
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                          Kukkatpally
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                        T-shirt
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                       
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light '>
                        <MdDelete className='delete_icon table_icons me-3' />
                        </td>
                       
                        
                        
                      </tr>
                      <tr>
                        <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                          1
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                       lipika <br />
                       
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                          Kukkatpally
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                        T-shirt
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                       
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light '>
                        <MdDelete className='delete_icon table_icons me-3' />
                        </td>
                       
                        
                        
                      </tr>
                      <tr>
                        <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                          1
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                       lipika <br />
                       
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                          Kukkatpally
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                        T-shirt
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                       
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light '>
                        <MdDelete className='delete_icon table_icons me-3' />
                        </td>
                       
                        
                        
                      </tr>
                            </thead>

                        </table>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateReport