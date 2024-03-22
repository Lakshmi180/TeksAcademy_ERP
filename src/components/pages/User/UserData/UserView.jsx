import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./UserView.css";
import axios from "axios";
// import "./UserView.css";
// import {UserPhoto} from "../../../../images/profile.jpg"
function UserView() {
  const [activeTab, setActiveTab] = useState('overview'); // State to manage active tab

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [singleUser, setUser] = useState("");
  console.log(singleUser, "juhgjdgjgd")


  useEffect(() => {
    // Make a GET request to your backend API endpoint
    axios
      .get(`${process.env.REACT_APP_API_URL}/viewuser/${courseId}`)
      .then((response) => {
        // Handle the successful response here
        setUser(response.data[0]); // Update the data state with the fetched data
        console.log("studentdata---", response.data[0]);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error fetching data:", error);
      });
  }, [courseId]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'activities':
        return (
          <div className="tab-pane fade active show" id="activities" role="tabpanel">
            <div className="card cards">
              <div className="card-body">
                <h5 className="card-title mb-3">Activities</h5>
                <div className="acitivity-timeline">
                  <div className="acitivity-item d-flex">

                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Oliver Phillips <span className="badge bg-primary-subtle text-primary align-middle">New</span></h6>
                      <p className="text-muted mb-2">We talked about a project on linkedin.</p>
                      <small className="mb-0 text-muted">Today</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">

                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Nancy Martino <span className="badge bg-secondary-subtle text-secondary align-middle">In Progress</span></h6>
                      <p className="text-muted mb-2"><i className="ri-file-text-line align-middle ms-2"></i> Create new project Buildng product</p>
                      <div className="avatar-group mb-2">

                        <a href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                          <div className="avatar-xs">

                          </div>
                        </a>
                        <a href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="more">
                          <div className="avatar-xs">
                            <div className="avatar-title rounded-circle">
                              2+
                            </div>
                          </div>
                        </a>
                      </div>
                      <small className="mb-0 text-muted">Yesterday</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">

                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Natasha Carey <span className="badge bg-success-subtle text-success align-middle">Completed</span>
                      </h6>
                      <p className="text-muted mb-2">Adding a new event with attachments</p>
                      <div className="row">
                        <div className="col-xxl-4">
                          <div className="row border border-dashed gx-2 p-2 mb-2">



                          </div>

                        </div>
                      </div>
                      <small className="mb-0 text-muted">25 Nov</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">

                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Bethany Johnson</h6>
                      <p className="text-muted mb-2">added a new member to velzon dashboard</p>
                      <small className="mb-0 text-muted">19 Nov</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar-xs acitivity-avatar">
                        <div className="avatar-title rounded-circle bg-danger-subtle text-danger">
                          <i className="ri-shopping-bag-line"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Your order is placed <span className="badge bg-danger-subtle text-danger align-middle ms-1">Out of Delivery</span></h6>
                      <p className="text-muted mb-2">These customers can rest assured their order has been placed.</p>
                      <small className="mb-0 text-muted">16 Nov</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">

                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Lewis Pratt</h6>
                      <p className="text-muted mb-2">They all have something to say
                        beyond the words on the page. They can come across as
                        casual or neutral, exotic or graphic. </p>
                      <small className="mb-0 text-muted">22 Oct</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar-xs acitivity-avatar">
                        <div className="avatar-title rounded-circle bg-info-subtle text-info">
                          <i className="ri-line-chart-line"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Monthly sales report</h6>
                      <p className="text-muted mb-2">
                        <span className="text-danger">2 days left</span> notification to submit the monthly sales report. <a href="javascript:void(0);" className="link-warning text-decoration-underline">Reports Builder</a>
                      </p>
                      <small className="mb-0 text-muted">15 Oct</small>
                    </div>
                  </div>
                  <div className="acitivity-item d-flex">
                    <div className="flex-shrink-0">

                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">New ticket received <span className="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                      <p className="text-muted mb-2">User <span className="text-secondary">Erica245</span> submitted a ticket.</p>
                      <small className="mb-0 text-muted">26 Aug</small>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );
      case 'projects':
        return (
          <div className='' >
            <div className="card cards ">
              <div className="card-body">
                <h5 className="card-title mb-3">Projects</h5>
                <div className="acitivity-timeline">
                  <div className="acitivity-item d-flex">

                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Oliver Phillips <span className="badge bg-primary-subtle text-primary align-middle">New</span></h6>
                      <p className="text-muted mb-2">We talked about a project on linkedin.</p>
                      <small className="mb-0 text-muted">Today</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">

                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Nancy Martino <span className="badge bg-secondary-subtle text-secondary align-middle">In Progress</span></h6>
                      <p className="text-muted mb-2"><i className="ri-file-text-line align-middle ms-2"></i> Create new project Buildng product</p>
                      <div className="avatar-group mb-2">

                        <a href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                          <div className="avatar-xs">

                          </div>
                        </a>
                        <a href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="more">
                          <div className="avatar-xs">
                            <div className="avatar-title rounded-circle">
                              2+
                            </div>
                          </div>
                        </a>
                      </div>
                      <small className="mb-0 text-muted">Yesterday</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">

                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Natasha Carey <span className="badge bg-success-subtle text-success align-middle">Completed</span>
                      </h6>
                      <p className="text-muted mb-2">Adding a new event with attachments</p>
                      <div className="row">
                        <div className="col-xxl-4">
                          <div className="row border border-dashed gx-2 p-2 mb-2">



                          </div>

                        </div>
                      </div>
                      <small className="mb-0 text-muted">25 Nov</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">

                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Bethany Johnson</h6>
                      <p className="text-muted mb-2">added a new member to velzon dashboard</p>
                      <small className="mb-0 text-muted">19 Nov</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar-xs acitivity-avatar">
                        <div className="avatar-title rounded-circle bg-danger-subtle text-danger">
                          <i className="ri-shopping-bag-line"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Your order is placed <span className="badge bg-danger-subtle text-danger align-middle ms-1">Out of Delivery</span></h6>
                      <p className="text-muted mb-2">These customers can rest assured their order has been placed.</p>
                      <small className="mb-0 text-muted">16 Nov</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">

                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Lewis Pratt</h6>
                      <p className="text-muted mb-2">They all have something to say
                        beyond the words on the page. They can come across as
                        casual or neutral, exotic or graphic. </p>
                      <small className="mb-0 text-muted">22 Oct</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar-xs acitivity-avatar">
                        <div className="avatar-title rounded-circle bg-info-subtle text-info">
                          <i className="ri-line-chart-line"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Monthly sales report</h6>
                      <p className="text-muted mb-2">
                        <span className="text-danger">2 days left</span> notification to submit the monthly sales report. <a href="javascript:void(0);" className="link-warning text-decoration-underline">Reports Builder</a>
                      </p>
                      <small className="mb-0 text-muted">15 Oct</small>
                    </div>
                  </div>
                  <div className="acitivity-item d-flex">
                    <div className="flex-shrink-0">

                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">New ticket received <span className="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                      <p className="text-muted mb-2">User <span className="text-secondary">Erica245</span> submitted a ticket.</p>
                      <small className="mb-0 text-muted">26 Aug</small>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );
      case 'documents':
        return (
          <div className='' >
            <div className="card cards ">
              <div className="card-body">
                <h5 className="card-title mb-3">Documents</h5>
                <div className="acitivity-timeline">
                  <div className="acitivity-item d-flex">

                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Oliver Phillips <span className="badge bg-primary-subtle text-primary align-middle">New</span></h6>
                      <p className="text-muted mb-2">We talked about a project on linkedin.</p>
                      <small className="mb-0 text-muted">Today</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">

                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Nancy Martino <span className="badge bg-secondary-subtle text-secondary align-middle">In Progress</span></h6>
                      <p className="text-muted mb-2"><i className="ri-file-text-line align-middle ms-2"></i> Create new project Buildng product</p>
                      <div className="avatar-group mb-2">

                        <a href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                          <div className="avatar-xs">

                          </div>
                        </a>
                        <a href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="more">
                          <div className="avatar-xs">
                            <div className="avatar-title rounded-circle">
                              2+
                            </div>
                          </div>
                        </a>
                      </div>
                      <small className="mb-0 text-muted">Yesterday</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">

                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Natasha Carey <span className="badge bg-success-subtle text-success align-middle">Completed</span>
                      </h6>
                      <p className="text-muted mb-2">Adding a new event with attachments</p>
                      <div className="row">
                        <div className="col-xxl-4">
                          <div className="row border border-dashed gx-2 p-2 mb-2">



                          </div>

                        </div>
                      </div>
                      <small className="mb-0 text-muted">25 Nov</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">

                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Bethany Johnson</h6>
                      <p className="text-muted mb-2">added a new member to velzon dashboard</p>
                      <small className="mb-0 text-muted">19 Nov</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar-xs acitivity-avatar">
                        <div className="avatar-title rounded-circle bg-danger-subtle text-danger">
                          <i className="ri-shopping-bag-line"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Your order is placed <span className="badge bg-danger-subtle text-danger align-middle ms-1">Out of Delivery</span></h6>
                      <p className="text-muted mb-2">These customers can rest assured their order has been placed.</p>
                      <small className="mb-0 text-muted">16 Nov</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">

                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Lewis Pratt</h6>
                      <p className="text-muted mb-2">They all have something to say
                        beyond the words on the page. They can come across as
                        casual or neutral, exotic or graphic. </p>
                      <small className="mb-0 text-muted">22 Oct</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar-xs acitivity-avatar">
                        <div className="avatar-title rounded-circle bg-info-subtle text-info">
                          <i className="ri-line-chart-line"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Monthly sales report</h6>
                      <p className="text-muted mb-2">
                        <span className="text-danger">2 days left</span> notification to submit the monthly sales report. <a href="javascript:void(0);" className="link-warning text-decoration-underline">Reports Builder</a>
                      </p>
                      <small className="mb-0 text-muted">15 Oct</small>
                    </div>
                  </div>
                  <div className="acitivity-item d-flex">
                    <div className="flex-shrink-0">

                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">New ticket received <span className="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                      <p className="text-muted mb-2">User <span className="text-secondary">Erica245</span> submitted a ticket.</p>
                      <small className="mb-0 text-muted">26 Aug</small>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );
      default:
        return (
          <div className='container'>
            <div className='row'>
              <div className="col-xxl-4 col-lg-4 ">
                <div className="card cards">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Info</h5>
                    <div className="table-responsive">
                      <table className="table table-borderless mb-0">
                        <tbody>
                          <tr>
                            <th className="ps-0" scope="row">Full Name :</th>
                            <td className="text-muted">Anna Adame</td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">Mobile :</th>
                            <td className="text-muted">+(1) 987 6543</td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">E-mail :</th>
                            <td className="text-muted">daveadame@velzon.com</td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">Location :</th>
                            <td className="text-muted">California, United States
                            </td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">Joining Date</th>
                            <td className="text-muted">24 Nov 2021</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-8 col-lg-12 pe-4">
                <div className='card cards '>
                  <div className="card-body fs-s ">
                    <h5 className="card-title mb-3">About</h5>
                    <p>Hi I'm Anna Adame, It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.</p>
                    <p>You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites. This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard.</p>
                    <div className="row">
                      <div className="col-6 col-md-4">
                        <div className="d-flex mt-4">
                          <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                            <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                              <i className="ri-user-2-fill"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="mb-1">Designation :</p>
                            <h6 className="text-truncate mb-0">Lead Designer / Developer</h6>
                          </div>
                        </div>
                      </div>

                      <div className="col-6 col-md-4">
                        <div className="d-flex mt-4">
                          <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                            <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                              <i className="ri-global-line"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="mb-1">Website :</p>
                            <a href="#" className="fw-semibold">www.velzon.com</a>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className='container'>

      <div className=''>
        <div className='student-bg-position bg-imges '></div>
        <div className='position-absolute text-white' style={{ zIndex: 2 }}>
          <div className='row g-4'>
            <div className="col-auto">
              <div className="avatar-lg mt-4 ms-4">
                <img src="https://themesbrand.com/velzon/html/master/assets/images/users/avatar-1.jpg" alt="user-img" className="img-thumbnail rounded-circle" />
              </div>
            </div>
          </div>
          <div className='pt-2 mb-4 mb-lg-3 pb-lg-4  profile-wrapper'>
            <div className='position-absolute text-white' style={{ zIndex: 2, top: 25, left: 50 }}>
              <div className="col ms-5">
                <div className="ps-5">
                  <h3 className="text-white mb-1  ">Anna Adame</h3>
                  <p className="text-white mb-1 fs-s ms-1 ">Owner &amp; Founder</p>
                  <div className="text-mute fs-s mb-1 hstack gap-1">
                    <div className="me-2"><i className="ri-map-pin-user-line me-1 text-white text-opacity-75 fs-16 align-middle"></i>California, United States</div>
                    <div>
                      <i className="ri-building-line me-1 text-mute text-opacity-75 fs-16 align-middle"></i>Themesbrand
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between  ">
            <div className='ms-5'>
              <ul className="nav nav-pills animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1 mt-4" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className={`nav-link fs-14 ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => handleTabChange('overview')}>
                    Overview
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={`nav-link fs-14 ${activeTab === 'activities' ? 'active' : ''}`} onClick={() => handleTabChange('activities')}>
                    Activities
                  </button>

                </li>
                <li className="nav-item" role="presentation">
                  <button className={`nav-link fs-14 ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => handleTabChange('projects')}>
                    Projects
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={`nav-link fs-14 ${activeTab === 'documents' ? 'active' : ''}`} onClick={() => handleTabChange('documents')}>
                    Documents
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
      <div className='container '>
        <div className=" position-absolute ms-2 " style={{ zIndex: 1 }}>
          <div className="col">
            {renderTabContent()}
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>

  );

}

export default UserView;