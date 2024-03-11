
import "../../../assets/css/common/Forms.css";
import { RiUploadCloud2Fill } from "react-icons/ri";
import React from 'react'
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import "../../../assets/css/common/Forms.css"

function Form() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const cities = [
    "Montreal", "Toronto", "Vancouver",
    "Lyon", "Marseille", "Paris",
    "Barcelona", "Madrid", "Malaga",
    "Liverpool", "London", "Manchester",
    "Michigan", "New York", "Washington"
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSearchTerm(city);
  };

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div class="row ">
          <div class="col-lg-12">
            <div class="card border-0 bg-transparent ">
              <div className="text-start ms-4 fs-16">
                <p>Input Example</p>
              </div>
              <div>
                <div class="card-body m-3 fs-s">
                  <div class="live-preview">
                    <div class="row gy-4 ">
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s "
                              for="example-text-input"
                            >
                              Basic Input
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              id="example-text-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="example-text-input ">
                              {" "}
                              Input with Label
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              id="example-text-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="example-text-input">
                              {" "}
                              Input with Placeholder
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              id="example-text-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="example-text-input ">
                              Text Input
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              id="example-text-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="example-text-input ">
                              Readonly plain Text Input
                            </label>
                            <input
                              class="form-control-plaintext fs-s"
                              type="text"
                              id="readonlyPlaintext"
                              value="Readonly input"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label  fs-s" for="readonlyInput">
                              Readonly Input
                            </label>
                            <input
                              class="form-control fs-s"
                              type="text"
                              id="readonlyInput"
                              value="Readonly input"
                              radioGroup=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="disabledInput">
                              Disabled Input
                            </label>
                            <input
                              class="form-control fs-s"
                              type="text"
                              id="disabledInput"
                              value="Disabled input"
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="text-start">
                            <label class="form-label fs-s" for="iconInput">
                              Input with Icon
                            </label>
                            <div class="form-icon d-flex">
                              <input
                                class="form-control form-control-icon fs-s"
                                type="email"
                                id="iconInput"
                                placeholder="example@gmail.com"
                              />
                            </div>

                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div class=" text-start">
                          <label class="form-label fs-s" for="example-text-input">
                            {" "}
                            Input with Icon right
                          </label>
                          <div class="form-icon right">
                            <input
                              class="form-control fs-s"
                              type="email"
                              id="example-text-input"
                              placeholder="example@gmail.com"
                            />
                            <i class="ri-mail-unread-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="example-text-input ">
                              Input Date
                            </label>
                            <input
                              class="form-control fs-s"
                              type="date"
                              id="exampleInputdate"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="example-text-input ">
                              Input Time
                            </label>
                            <input
                              class="form-control"
                              type="time"
                              id="exampleInputtime"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="example-text-input ">
                              {" "}
                              Input Password
                            </label>
                            <input
                              class="form-control"
                              type="password"
                              id="example-text-input"
                              value="44512465"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="example-text-input ">
                              Example TextArea
                            </label>
                            <textarea
                              class="form-control"
                              id="exampleFormContro;Textarea5"
                              rows="3"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="example-text-input">
                              Form Text{" "}
                            </label>
                            <input
                              class="form-control"
                              type="password"
                              id="formtextinput"
                            />
                            <div id="passwordHelpBlock" class="form-text">
                              "Must be 8-20 characters long"
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="colorPicker ">
                              Color Picker
                            </label>
                            <input
                              class="form-control form-control-color w-100"
                              type="color"
                              id="colorpicker"
                              value="#364574"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="example-text-input ">
                              Input Border Style
                            </label>
                            <input
                              class="form-control border-dashed fs-s"
                              type="text"
                              id="borderInput"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="exampleDataList ">
                              Datalist example
                            </label>
                            <input
                              class="form-control fs-s"
                              type="text"
                              id="example-text-input"
                              list="datalistOptions"
                              placeholder="search your country..."
                            />
                            <datalist id="datalistOptions">
                              <option>India</option>
                              <option>Switzerland</option>
                              <option>America</option>
                              <option>Londan</option>
                              <option>India</option>
                            </datalist>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-group text-start">
                            <label class="form-label fs-s" for="example-text-input ">
                              Rounded Input
                            </label>
                            <input
                              class="form-control rounded-pill fs-s"
                              type="text"
                              id="example-text-input"
                              placeholder="enter your name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-md-6">
                        <div>
                          <div class="form-floating">
                            <input
                              class="form-control fs-s"
                              type="text"
                              id="example-text-input"
                              placeholder="Enter your firstname"
                            />
                            <label class="form-label fs-s" for="example-text-input ">
                              Floating Input
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
                <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="card-body">
                        <div class="col-lg-6">
                          <select class="form-select mb-3" aria-label="Default select example">
                            <option selected="">Select your Status </option>
                            <option value="1">Declined Payment</option>
                            <option value="2">Delivery Error</option>
                            <option value="3">Wrong Amount</option>
                          </select>
                        </div>
                      </div>

                    </div>
                    <div class="col-lg-6">
                      <select class="form-select select-scrl" size="3" aria-label="size 3 select example">
                        <option selected="">Open this select menu (select menu size)</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                      </select>
                    </div>
                    <div class="col-lg-6">
                      <div class="row">
                        <div class="col-md-6 w-100">
                          <div className="container mt-5">
                            <div className="row">
                              <div className="col-md-6 ">
                                <div className="dropdown">
                                  <input
                                    type="search"
                                    className="form-control dropdown-toggle p-2 rounded"
                                    placeholder="Choose a city"
                                    value={searchTerm}
                                    onChange={handleInputChange}
                                    data-bs-toggle="dropdown"
                                  />
                                  <ul className=" form-select dropdown-menu px-3" size="3" aria-label="size 3 select example">
                                    {filteredCities.map((city, index) => (
                                      <li key={index}>
                                        <a
                                          className="dropdown-item"
                                          onClick={() => handleCitySelect(city)}
                                        >
                                          {city}

                                        </a>
                                      </li>
                                    ))}
                                    {filteredCities.length === 0 && (
                                      <li>
                                        <span className="dropdown-item">No results found</span>
                                      </li>
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>

                  </div>

                </div>
                <div class="container mt-4 bg_white">

                  <div class=" row fs-16 p-3 ">

                    <h5>Pagination</h5>

                    <nav aria-label="...">
                      <ul class="pagination pagination-md">
                        <li class="page-item disabled">

                          <a class="page-link" href="#" tabindex="-1"> <IoIosArrowRoundBack /> Prev</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active square">
                          <a class="page-link" href="#">2 </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                          <a class="page-link" href="#">Next <IoIosArrowRoundForward /></a>
                        </li>
                      </ul>
                    </nav>

                    <nav aria-label="...">
                      <ul class="pagination pagination-sm">
                        <li class="page-item disabled">
                          <span class="page-link"><IoIosArrowBack /></span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active square">
                          <span class="page-link">
                            2

                          </span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                          <a class="page-link" href="#"><IoIosArrowForward /></a>
                        </li>
                      </ul>
                    </nav>
                    <nav aria-label="Page navigation example">
                      <ul class="pagination pagination-rounded pagination-sm">
                        <li class="page-item disabled p-1">
                          <a href="#" class="page-link rounded"><IoIosArrowRoundBack /></a>
                        </li>
                        <li class="page-item p-1">
                          <a href="#" class="page-link rounded">1</a>
                        </li>
                        <li class="page-item active p-1">
                          <a href="#" class="page-link rounded col">2</a>
                        </li>
                        <li class="page-item p-1">
                          <a href="#" class="page-link rounded">3</a>
                        </li>
                        <li class="page-item p-1">
                          <a href="#" class="page-link rounded">4</a>
                        </li>
                        <li class="page-item p-1">
                          <a href="#" class="page-link rounded">5</a>
                        </li>
                        <li class="page-item p-1">
                          <a href="#" class="page-link rounded"><IoIosArrowRoundForward /></a>
                        </li>
                      </ul>
                    </nav>
                    <nav arial-label="page navigation example">

                      <nav aria-label="...">

                        <ul class="pagination pagination-sm">
                          <li class="page-item disabled p-1">
                            <a class="page-link rounded" href="#" tabindex="-1"><IoIosArrowRoundBack /> </a>
                          </li>
                          <li class="page-item p-1 "><a class="page-link rounded" href="#">1</a></li>
                          <li class="page-item active p-1 "><a class="page-link rounded col" href="#">2</a></li>
                          <li class="page-item p-1 "><a class="page-link rounded" href="#">3</a></li>
                          <li class="page-item p-1 ">
                            <a class="page-link rounded" href="#"> <IoIosArrowRoundForward /></a>
                          </li>
                        </ul>
                      </nav>
                    </nav>

                  </div>

                </div>
                <div class="container mt-4 bg_white ">
                  <div class=" row fs-16 p-3 ">
                    <h5 class="text-center">Picker</h5>
                    <div class="col text-center">
                      <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        dateFormat="MMMM d, yyyy"
                        className='date-pic'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </div >
        </div>
      </div>
      <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div class="row fs-16">
          <div class="col-lg-12">
            <div class="card border-0 bg-transparent ">
              <div class="">
                <p class="text-start fs-16"> Input Sizing </p>
              </div>
            </div>
          </div>
          <div class="card-body m-3">
            <p class="text-muted text-start fs-s">
              use <code>form-control-lg</code> class to set small large size
              input and use <code>form-control-sm</code> class to set small size
              input. No class is needed for default size input
            </p>
            <div>
              <div class="row  g-3">
                <div class="col-lg-4">
                  <input
                    class="form-control form-control-sm"
                    type="text"
                    id="example-text-input"
                    placeholder=".form-control-sm"
                  />
                </div>
                <div class="col-lg-4">
                  <input
                    class="form-control"
                    type="text"
                    id="example-text-input"
                    placeholder=".form-control-sm"
                  />
                </div>
                <div class="col-lg-4">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    id="example-text-input"
                    placeholder=".form-control-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div class="row fs-16">
          <div class="col-lg-12">
            <div class="card border-0 bg-transparent ">
              <div class="align-items-center  ">
                <p class="text-start fs-16">File Input </p>
              </div>
            </div>
          </div>
          <div class="card-body m-3">
            <div class="row align-items-center text-start g-3 fs-s">
              <div class="col-lg-4">
                <div>
                  <label for="formfile" class="form-label fs-s">
                    Default File Input Example
                  </label>
                  <p class="text-muted fs-s">
                    use <code>input</code> attribute with
                    <code>type="file</code> tag for default file input{" "}
                  </p>
                  <input class="form-control fs-s" type="file" id="formfile" />
                </div>
              </div>
              <div class="col-lg-4 ">
                <div>
                  <label for="formFileMultiple" class="form-label fs-s">
                    Multiple File Input Example
                  </label>
                  <p class="text-muted fs-s">
                    use <code>multiple</code> attribute within the input
                    attribute to select multiple files
                  </p>
                  <input
                    class="form-control fs-s"
                    type="file"
                    id="formFileMultiple"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div>
                  <label for="formFileDisabled" class="form-label fs-s">
                    Disabled File Input Example
                  </label>
                  <p class="text-muted fs-s">
                    use <code>Disabled</code> attribute within the input
                    attribute to disable the file input.
                  </p>
                  <input
                    class="form-control fs-s"
                    type="file"
                    id="formFileDisabled"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="row mt-4 align-items-center text-start g-3">
              <h5 class="fs-16 para">File Input Sizing</h5>
              <div class="col-lg-4 fs-s">
                <div>
                  <label for="formSizeSmall" class="form-label">
                    small size file input example
                  </label>
                  <p class="text-muted">
                    use <code>form-control-sm</code> class within the
                    form-control class to set a small size file input.
                  </p>
                  <input
                    class="form-control form-control-sm"
                    type="file"
                    id="formSizeSmall"
                  />
                </div>
              </div>
              <div class="col-lg-4 fs-s">
                <div>
                  <label for="formSizeDefault" class="form-label">
                    Default size file input example
                  </label>
                  <p class="text-muted">
                    use <code>form-control</code> class and{" "}
                    <code>type="file"</code> attribute within the input
                    attribute to set a default size file input.
                  </p>
                  <input
                    class="form-control "
                    type="file"
                    id="formSizeDefault"
                  />
                </div>
              </div>
              <div class="col-lg-4 fs-s">
                <div>
                  <label for="formSizeLarge" class="form-label">
                    Large size file input example
                  </label>
                  <p class="text-muted">
                    use <code>form-control-lg</code> class within the
                    form-control class to set a large size file input.
                  </p>
                  <input
                    class="form-control form-control-lg"
                    type="file"
                    id="formSizeLarge"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div class="row fs-16 p-3">
          <div class="col-lg-12 ">
            <div class="card border-0 bg-transparent ">
              <div class="align-items-center  ">
                <p class="text-start"> Input Group</p>
              </div>
            </div>
          </div>
          <div class="card-body text-start fs-s">
            <div>
              <p class="fs-16">Basic example</p>
              <p class="text-muted">
                use <code> input-group</code> class to div element which
                contains input attribute to wrap a default input in the group.
              </p>
            </div>
            <div class="row g-3">
              <div class="col-lg-6 fs-s">
                <div class="input-group ">
                  <span class="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div class="col-lg-6 fs-s">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span class="input-group-text" id="basic-addon2">
                    @example.com
                  </span>
                </div>
              </div>
              <div class="col-lg-12 fs-s">
                <div class="input-group mb-3">
                  <span class="input-group-text">$</span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <span class="input-group-text">.00</span>
                </div>
              </div>
              <div class="col-lg-12 fs-s">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                  />
                  <span class="input-group-text">@</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Server"
                    aria-label="Server"
                  />
                </div>
              </div>
              <div class="col-lg-6 fs-s">
                <div class="input-group fs-s">
                  <span class="input-group-text fs-s">With textarea</span>
                  <textarea
                    class="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-6 fs-s">
                <label for="basic-url" class="form-label">
                  Your vanity URL
                </label>
                <div class="input-group mb-3 fs-s">
                  <span class="input-group-text fs-s" id="basic-addon3">
                    https://example.com/users/
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </div>
              </div>
              <div class="mt-4">
                <p class="fs-16 para">Wrapping</p>
                <p class="text-muted">
                  Input groups wrap by default via <code>flex-wrap:wrap</code>{" "}
                  in order to accommodate custom form field validation within an
                  input group. You may disable this with{" "}
                  <code>flex-nowwrap</code> class
                </p>
                <div class="input-group ">
                  <span class="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div class="row fs-16 p-3">
          <div class="col-lg-12 fs-s">
            <div class="card border-0 bg-transparent ">
              <div class="align-items-center  ">
                <p class="text-start fs-16">Input Group sizing</p>
              </div>
            </div>
          </div>
          <div class="card-body text-start fs-s">
            <div>
              <p class="text-muted">
                use <code> input-group-sm</code> class to set a small size input
                group and v<code>input-group-lg</code> " class to input-group
                class to set a large size input group respectively. no such
                class is required for a default size input group."
              </p>
            </div>
            <div class="row align-items-center g-3 fs-s">
              <div class="col-lg-4">
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Small
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>
              <div class="col-lg-4 ">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Default
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="input-group input-group-lg mb-3">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-lg fs-s"
                  >
                    Large
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div class="row fs-16 p-3">
          <div class="col-lg-12 fs-s">
            <div class="card border-0 bg-transparent ">
              <div class="align-items-center  ">
                <p class="text-start fs-16"> Multiple Input </p>
              </div>
            </div>
          </div>
          <div class="card-body text-start fs-s">
            <p class="text-muted">
              Input groups wrap by default via <code>{`<input>`} </code>
              in order to accommodate custom form field validation within an
              input group. You may disable this with <code>
                flex-nowwrap
              </code>{" "}
              class
            </p>
            <div class="col-lg-12 fs-s">
              <div class="input-group">
                <span class="input-group-text">First and last name</span>
                <input
                  type="text"
                  aria-label="First name"
                  class="form-control"
                />
                <input
                  type="text"
                  aria-label="Last name"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-lg-12 mt-3 fs-s">
              <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <span class="input-group-text">0.00</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Dollar amount (with dot and two decimal places)"
                />
              </div>
            </div>
            <div class="col-lg-12 fs-s">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Dollar amount (with dot and two decimal places)"
                />
                <span class="input-group-text">$</span>
                <span class="input-group-text">0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div class="row fs-16 p-3">
          <div class="col-lg-12">
            <div class="card border-0 bg-transparent fs-s ">
              <div class="align-items-center  ">
                <p class="text-start fs-16">
                  Buttons, Checkbox and Radio groups{" "}
                </p>
              </div>
              <div class="card-body text-start fs-s">
                <p class="text-muted">
                  Use any checkbox, radio, or button option within an input
                  group’s addon instead of text. We recommend adding{" "}
                  <code>mt-0</code>
                  class to the <code>form-check-input</code> when there’s no
                  visible text next to the input.
                </p>
                <div class="row g-3 fs-s">
                  <div class="col-lg-6">
                    <div class="input-group">
                      <div class="input-group-text">
                        <input
                          class="form-check-input mt-0 "
                          type="checkbox"
                          value
                          aria-label="checkbox for following text input"
                        />
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        arial-label="Text input with checkbox"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-group">
                      <div class="input-group-text">
                        <input
                          class="form-check-input mt-0 "
                          type="checkbox"
                          value
                          aria-label="checkbox for following text input"
                        />
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        arial-label="Text input with checkbox"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-group">
                      <button
                        class="btn primary_outline "
                        type="button"
                        id="button-addon1"
                      >
                        Button
                      </button>

                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        arial-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        arial-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        class="btn btn-outline-success success_outline "
                        type="button"
                        id="button-addon2"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-group">
                      <button class="btn btn_primary" type="button">
                        Button
                      </button>
                      <button
                        class="btn btn_success "
                        type="button"
                        id="button-addon2"
                      >
                        Button
                      </button>
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        arial-label="Example text with two button addons"
                        aria-describedby="button-addon2"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        arial-label="Example text with two button addons"
                        aria-describedby="button-addon2"
                      />
                      <button class="btn btn_primary" type="button">
                        Button
                      </button>
                      <button
                        class="btn btn_success "
                        type="button"
                        id="button-addon2"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div class="row fs-16 p-3">
          <div class="col-lg-12">
            <div class="card border-0 bg-transparent fs-s ">
              <div class="align-items-center  ">
                <p class="text-start fs-16">Buttons with dropdowns</p>
              </div>
              <div class="card-body text-start fs-s">
                <p class="text-muted">
                  You can use a button with the dropdown toggle to set the file
                  input group.
                </p>
                <div class="row g-3">
                  <div class="col-lg-6">
                    <div class="input-group">
                      <div class="dropdown">
                        <button
                          class="btn btn_primary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown button
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Text input with dropdown button"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Text input with dropdown button"
                      />
                      <div class="dropdown">
                        <button
                          class="btn btn_success dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown button
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 mt-3">
                  <div class="input-group">
                    <button
                      class="btn primary_outline dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action before
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action before
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with 2 dropdown buttons"
                    />
                    <button
                      class="btn success_outline dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Separated link
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

      <div className="container  mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="card d-flex">
              <div className="card-header">
                <h4 className="card-title mb-0 fs-16">Dropzone</h4>
              </div>
              <div className="card-body">
                <p className="text-muted fs-s ">
                  DropzoneJS is an open source library that provides drag’n’drop
                  file uploads with image previews.
                </p>

                <div className="dropzone dropone-border dz-clicable d-flex justify-content-center flex-column text-center m-2 form-control">

                  <div className="dz-message needclick  align-items-center   ">
                    <div className="mb-3 ">
                      <RiUploadCloud2Fill className="display-4 text-muted" />
                    </div>
                    <h4>Drop files here or click to upload.</h4>
                  </div>

                </div>
                <label for="customFileInput" className="form-label">
                </label>
                <input
                  type="file"
                  className="form-control "
                  id="customFileInput"
                />
                <ul className="list-unstyled mb-0" id="dropzone-preview"></ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4 p-3 mb-3 bg-body rounded bg_white ">
          <div className="col-lg-6 mb-2">
            <div className="card d-flex">
              <div className="card-header">
                <h4 className=" card-title fs-16"> Multiple Uploads</h4>
              </div>
              <div className="card-body ">
                <p className="fs-s text-muted mb-2">
                  FilePond is a JavaScript library that optimizes multiple
                  images for faster uploads and offers a great, accessible,
                  silky smooth user experience.
                </p>

                <div
                  class="filepond--root filepond filepond-input-multiple filepond--hopper text-center d-flex justify-content-center align-items-center "
                  data-style-button-remove-item-position="left"
                  data-style-button-process-item-position="right"
                  data-style-load-indicator-position="right"
                  data-style-progress-indicator-position="right"
                  data-style-button-remove-item-align="false"
                  style={{ height: "76px" }}
                >



                  <div className="dz-message needclick  align-items-center   ">
                    <div className="mb-3 ">

                    </div>
                    <div className="img-box-fs-s">
                      Drag &amp; Drop your files or{" "}
                      <span
                        class="filepond--label-action fw-medium"
                        tabindex="0"
                      >
                        Browse
                      </span>
                    </div>
                  </div>

                </div>
                <label for="customFileInput" className="form-label">
                </label>
                <input
                  type="file"
                  className="form-control "
                  id="customFileInput"
                />
                <ul className="list-unstyled mb-0" id="dropzone-preview"></ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card d-flex">
              <div className="card-header">
                <h4 className=" card-title fs-16">Profile Picture Selection</h4>
              </div>
              <div className="card-body ">
                <p className="fs-s text-muted mb-2">
                  FilePond is a JavaScript library with profile picture-shaped
                  file upload variation.
                </p>
                <div className="avatar-xl mx-auto d-flex flex-column justify-content-center align-items-center text-center">
                  <div
                    class="filepond--root filepond filepond-input-multiple filepond--hopper text-center filepond-profile-picture d-flex justify-content-center align-items-center "
                    data-style-button-remove-item-position="left"
                    data-style-button-process-item-position="right"
                    data-style-load-indicator-position="right"
                    data-style-progress-indicator-position="right"
                    data-style-button-remove-item-align="false"
                    style={{ height: "120px", width: "120px" }}
                  >


                    <div className="dz-message needclick  align-items-center   ">
                      <div className="mb-3 ">

                      </div>
                      <div className="img-box-fs-s">
                        Drag &amp; Drop your files or{" "}
                        <span
                          class="filepond--label-action fw-medium"
                          tabindex="0"
                        >
                          Browse
                        </span>
                      </div>

                    </div>



                  </div>
                  <label for="customFileInput" className="form-label">
                  </label>
                  <input
                    type="file"
                    className="form-control "
                    id="customFileInput"
                  />
                  <ul className="list-unstyled mb-0" id="dropzone-preview"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" container  mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div className="row">
          <div className="col-xxl-12">
            <div className="card">
              <div className="card-header align-items-center">
                <h4 className="fs-16">Forms</h4>
              </div>
              <div className="card-body">
                <p className="text-muted fs-s">
                  More complex forms can be built using our grid classes. Use
                  these for form layouts that require multiple columns, varied
                  widths, and additional alignment options.{" "}
                  <span class="fw-medium">
                    Requires the <code>$enable-grid-classes</code> Sass variable
                    to be enabled
                  </span>{" "}
                  (on by default).
                </p>
                <div className="live-prieview">
                  <form action="javascript:void(0)">
                    <div className="row d-flex">
                      <div className="col-md-6">
                        <div class="mb-3">
                          <label
                            for="firstNameinput"
                            className="form-label form-fs-s fw-medium"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-fs-s"
                            placeholder="Enter your firstname"
                            id="firstNameinput"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            for="lastNameinput"
                            className="form-label form-fs-s fw-medium"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-fs-s"
                            placeholder="Enter your lastname"
                            id="firstNameinput"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label
                            for="lastNameinput"
                            className="form-label form-fs-s fw-medium"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-fs-s"
                            placeholder="Enter Company Name"
                            id="companyNameinput"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            for="phonenumberInput"
                            className="form-label form-fs-s fw-medium"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control form-fs-s"
                            placeholder="+(245) 451 45123"
                            id="phonenumberInput"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            for="emailInput"
                            className="form-label form-fs-s fw-medium"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control form-fs-s"
                            placeholder="example @gmail.com"
                            id="emailInput"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label
                            for="address1ControlTextarea "
                            className="form-label form-fs-s fw-medium"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control form-fs-s "
                            placeholder="Address 1"
                            id="address1ControlTextarea"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            for="citynameInput"
                            className="form-label form-fs-s fw-medium"
                          >
                            City
                          </label>
                          <input
                            type="email"
                            className="form-control form-fs-s"
                            placeholder="Enter your city"
                            id="citynameInput"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            for="ForminputState"
                            className="form-label fw-medium form-fs-s"
                          >
                            State
                          </label>

                          <input
                            type="state"
                            className="form-control form-fs-s"
                            placeholder="Choose"
                            id="stateInput"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="text-end">
                          <button
                            type="submit "
                            className="btn btn_primary form-fs-s fw-medium"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div className="row  ">
          <div className="col-xxl-6 mb-2">
            <div className="card d-flex">
              <div className="card-header align-items-center">
                <h4 className="fs-16">Vertical Forms</h4>
              </div>
              <div className="card-body">
                <p className="text-muted fs-s">Example of vertical form using <code>form-control</code> class. No need to specify row and col class to create vertical form.</p>
                <div className="live-preview">
                  <form action="javascript:void(0);">
                    <div className="mb-3">
                      <label for="employeeName " className="form-label fw-medium form-fs-s">
                        Employee Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-fs-s"
                        id="employeeName"
                        placeholder="Enter employee name"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="employeeUrl" className="form-label fw-medium form-fs-s">
                        Employee Department URL
                      </label>
                      <input
                        type="url"
                        className="form-control form-fs-s "
                        id="employeeUrl"
                        placeholder="Enter employee url"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="StartleaveDate" className="form-label fw-medium form-fs-s">
                        Start Leave Date
                      </label>
                      <input
                        type="text"
                        className="form-control flatpickr-input form-fs-s"
                        data-provider="flatpickr"
                        id="StartleaveDate"
                        readonly="readonly"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="EndleaveDate" className="form-label fw-medium form-fs-s">
                        End Leave Date
                      </label>
                      <input
                        type="text"
                        className="form-control flatpickr-input form-fs-s"
                        data-provider="flatpickr"
                        id="EndleaveDate"
                        readonly="readonly"

                      >

                      </input>

                    </div>
                    <div className="mb-3">
                      <label for="VertimeassageInput" className="form-label fw-medium form-fs-s">
                        Message
                      </label>
                      <textarea
                        className="form-control form-fs-s"
                        id="VertimeassageInput "
                        rows="3"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn_primary fw-medium form-fs-s">
                        Add Leave
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-6 ">
            <div className="card d-flex">
              <div className="card-header fs-s">
                <h4 className="fs-16">Horizontal Form</h4>
              </div>
              <div className="card-body">
                <p className="text-muted fs-s">Create horizontal forms with the grid by adding the <code>row</code> class to form groups and using the <code>col-*-*</code> class to specify the width of your labels and controls. Be sure to add <code>col-form-label</code> class to your <code>&lt;label&gt;</code>s as well so they’re vertically centered with their associated form controls.</p>
                <div className="live-preview">
                  <form action="javascript:void(0);">
                    <div class="row mb-3">
                      <div className="col-lg-3">
                        <label for="nameInput" className="form-label fw-medium form-fs-s">Name</label>
                      </div>
                      <div className="col-lg-9">
                        <input type="text" className="form-control form-fs-s" id="nameInput" placeholder="Enter your name" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <label for="websiteUrl" className="form-label fw-medium form-fs-s">Website URL</label>
                      </div>
                      <div className="col-lg-9">
                        <input type="url" className="form-control form-fs-s" id="websiteUrl" placeholder="Enter your url" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <label for="dateInput" className="form-label fw-medium form-fs-s">Date</label>
                      </div>
                      <div className="col-lg-9">
                        <input type="text" className="form-control flatpickr-input form-fs-s" data-provider="flatpickr" id="dateInput" readonly="readonly" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <label for="timeInput" className="form-label fw-medium form-fs-s">Time</label>
                      </div>
                      <div className="col-lg-9">
                        <input type="text" className="form-control flatpickr-input form-fs-s" data-provider="timepickr" data-time-basic="true" id="timeInput" readonly="readonly" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <label for="leaveemails" className="form-label fw-medium form-fs-s">Email Id</label>
                      </div>
                      <div className="col-lg-9">
                        <input type="email" className="form-control form-fs-s" id="leaveemails" placeholder="Enter your email" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <label for="contactNumber" className="form-label fw-medium form-fs-s">Contact Number</label>
                      </div>
                      <div className="col-lg-9">
                        <input type="number" className="form-control form-fs-s" id="contactNumber" placeholder="
                                                    Enter contact number"/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <label for="meassageInput" className="form-label fw-medium form-fs-s">Message</label>
                      </div>
                      <div className="col-lg-9">
                        <textarea className="form-control form-fs-s" id="meassageInput" rows="3" placeholder="Enter your message"></textarea>
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn_primary fw-medium form-fs-s">Add Leave</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


  );
}
export default Form
