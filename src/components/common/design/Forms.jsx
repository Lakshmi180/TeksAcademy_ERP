import "../../../assets/css/common/Forms.css";
import { RiUploadCloud2Fill } from "react-icons/ri";
import React from "react";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import "../../../assets/css/common/Forms.css";

function Form() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const cities = [
    "Montreal",
    "Toronto",
    "Vancouver",
    "Lyon",
    "Marseille",
    "Paris",
    "Barcelona",
    "Madrid",
    "Malaga",
    "Liverpool",
    "London",
    "Manchester",
    "Michigan",
    "New York",
    "Washington",
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSearchTerm(city);
  };

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div className="row ">
          <div className="col-lg-12">
            <div className="card border-0 bg_transparent ">
              <div className="text-start ms-4 fs-16">
                <p className="txt-color">Input Example</p>
              </div>
              <div>
                <div className="card-body m-3 fs-s">
                  <div className="live-preview">
                    <div className="row gy-4 ">
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="example-text-input"
                            >
                              Basic Input
                            </label>
                            <input
                              className="form-control bg-form"
                              type="text"
                              id="example-text-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="example-text-input "
                            >
                              {" "}
                              Input with Label
                            </label>
                            <input
                              className="form-control  bg-form"
                              type="text"
                              id="example-text-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-stxt-color"
                              htmlFor="example-text-input"
                            >
                              {" "}
                              Input with Placeholder
                            </label>
                            <input
                              className="form-control bg-form"
                              type="text"
                              id="example-text-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="example-text-input "
                            >
                              Text Input
                            </label>
                            <input
                              className="form-control bg-form"
                              type="text"
                              id="example-text-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="example-text-input "
                            >
                              Readonly plain Text Input
                            </label>
                            <input
                              className="form-control-plaintext fs-s  bg-form"
                              type="text"
                              id="readonlyPlaintext"
                              value="Readonly input"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label  fs-s txt-color"
                              htmlFor="readonlyInput"
                            >
                              Readonly Input
                            </label>
                            <input
                              className="form-control fs-s  bg-form"
                              type="text"
                              id="readonlyInput"
                              value="Readonly input"
                              radioGroup=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="disabledInput"
                            >
                              Disabled Input
                            </label>
                            <input
                              className="form-control fs-s bg-form"
                              type="text"
                              id="disabledInput"
                              value="Disabled input"
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="iconInput"
                            >
                              Input with Icon
                            </label>
                            <div className="form-icon d-flex">
                              <input
                                className="form-control form-control-icon fs-s bg-form"
                                type="email"
                                id="iconInput"
                                placeholder="example@gmail.com"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div className=" text-start">
                          <label
                            className="form-label fs-s txt-color"
                            htmlFor="example-text-input"
                          >
                            {" "}
                            Input with Icon right
                          </label>
                          <div className="form-icon right">
                            <input
                              className="form-control fs-s bg-form"
                              type="email"
                              id="example-text-input"
                              placeholder="example@gmail.com"
                            />
                            <i className="ri-mail-unread-line"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="example-text-input "
                            >
                              Input Date
                            </label>
                            <input
                              className="form-control fs-s bg-form"
                              type="date"
                              id="exampleInputdate"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="example-text-input "
                            >
                              Input Time
                            </label>
                            <input
                              className="form-control bg-form"
                              type="time"
                              id="exampleInputtime"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="example-text-input "
                            >
                              {" "}
                              Input Password
                            </label>
                            <input
                              className="form-control bg-form"
                              type="password"
                              id="example-text-input"
                              value="44512465"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="example-text-input "
                            >
                              Example TextArea
                            </label>
                            <textarea
                              className="form-control bg-form"
                              id="exampleFormContro;Textarea5"
                              rows="3"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="example-text-input"
                            >
                              Form Text{" "}
                            </label>
                            <input
                              className="form-control bg-form"
                              type="password"
                              id="formtextinput"
                            />
                            <div
                              id="passwordHelpBlock"
                              className="form-text txt-color"
                            >
                              "Must be 8-20 characters long"
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="colorPicker "
                            >
                              Color Picker
                            </label>
                            <input
                              className="form-control form-control-color w-100 bg-form"
                              type="color"
                              id="colorpicker"
                              value="#364574"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="example-text-input "
                            >
                              Input Border Style
                            </label>
                            <input
                              className="form-control border-dashed fs-s  bg-form"
                              type="text"
                              id="borderInput"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="exampleDataList "
                            >
                              Datalist example
                            </label>
                            <input
                              className="form-control fs-s  bg-form"
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
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-group text-start">
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="example-text-input "
                            >
                              Rounded Input
                            </label>
                            <input
                              className="form-control rounded-pill fs-s bg-form"
                              type="text"
                              id="example-text-input"
                              placeholder="enter your name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-6">
                        <div>
                          <div className="form-floating">
                            <input
                              className="form-control fs-s bg-form"
                              type="text"
                              id="example-text-input"
                              placeholder="Enter your firstname"
                            />
                            <label
                              className="form-label fs-s txt-color"
                              htmlFor="example-text-input "
                            >
                              Floating Input
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card-body">
                        <div className="col-lg-6">
                          <select
                            className="form-select mb-3 bg-form form-control"
                            aria-label="Default select example"
                          >
                            <option selected="">Select your Status </option>
                            <option value="1">Declined Payment</option>
                            <option value="2">Delivery Error</option>
                            <option value="3">Wrong Amount</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <select
                        className="form-select select-scrl bg-form"
                        size="3"
                        aria-label="size 3 select example"
                      >
                        <option selected="">
                          Open this select menu (select menu size)
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-md-6 w-100">
                          <div className="container mt-5">
                            <div className="row">
                              <div className="col-md-6 ">
                                <div className="dropdown">
                                  <input
                                    type="search"
                                    className="form-control dropdown-toggle p-2 rounded bg-form"
                                    placeholder="Choose a city"
                                    value={searchTerm}
                                    onChange={handleInputChange}
                                    data-bs-toggle="dropdown"
                                  />
                                  <ul
                                    className=" form-select dropdown-menu px-3"
                                    size="3"
                                    aria-label="size 3 select example"
                                  >
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
                                        <span className="dropdown-item">
                                          No results found
                                        </span>
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
                <div className="container mt-4 bg_white">
                  <div className=" row fs-16 p-3 ">
                    <h5 className="txt-color">Pagination</h5>

                    <nav aria-label="...">
                      <ul className="pagination pagination-md">
                        <li className="page-item disabled ">
                          <a className="page-linkbg-form" href="#" tabindex="-1">
                            {" "}
                            <IoIosArrowRoundBack /> Prev
                          </a>
                        </li>
                        <li className="page-itembg-form">
                          <a className="page-link bg-form" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item active square  bg-form">
                          <a className="page-link bg-form" href="#">
                            2{" "}
                          </a>
                        </li>
                        <li className="page-item bg-form">
                          <a className="page-link bg-form" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item bg-form">
                          <a className="page-link bg-form" href="#">
                            Next <IoIosArrowRoundForward />
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <nav aria-label="...">
                      <ul className="pagination pagination-sm">
                        <li className="page-item disabled">
                          <span className="page-link bg-form">
                            <IoIosArrowBack />
                          </span>
                        </li>
                        <li className="page-item">
                          <a className="page-link bg-form" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item active square">
                          <span className="page-link bg-form">2</span>
                        </li>
                        <li className="page-item">
                          <a className="page-link bg-form" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link bg-form" href="#">
                            <IoIosArrowForward />
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination pagination-rounded pagination-sm">
                        <li className="page-item disabled p-1">
                          <a href="#" className="page-link rounded bg-form">
                            <IoIosArrowRoundBack />
                          </a>
                        </li>
                        <li className="page-item p-1">
                          <a href="#" className="page-link rounded bg-form">
                            1
                          </a>
                        </li>
                        <li className="page-item active p-1">
                          <a href="#" className="page-link rounded col bg-form">
                            2
                          </a>
                        </li>
                        <li className="page-item p-1">
                          <a href="#" className="page-link rounded bg-form">
                            3
                          </a>
                        </li>
                        <li className="page-item p-1">
                          <a href="#" className="page-link rounded bg-form">
                            4
                          </a>
                        </li>
                        <li className="page-item p-1">
                          <a href="#" className="page-link rounded bg-form">
                            5
                          </a>
                        </li>
                        <li className="page-item p-1">
                          <a href="#" className="page-link rounded bg-form">
                            <IoIosArrowRoundForward />
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <nav arial-label="page navigation example">
                      <nav aria-label="...">
                        <ul className="pagination pagination-sm">
                          <li className="page-item disabled p-1">
                            <a
                              className="page-link rounded bg-form"
                              href="#"
                              tabindex="-1"
                            >
                              <IoIosArrowRoundBack />{" "}
                            </a>
                          </li>
                          <li className="page-item p-1 ">
                            <a className="page-link rounded bg-form" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active p-1 ">
                            <a className="page-link rounded col bg-form" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item p-1 ">
                            <a className="page-link rounded bg-form" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item p-1 ">
                            <a className="page-link rounded bg-form" href="#">
                              {" "}
                              <IoIosArrowRoundForward />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </nav>
                  </div>
                </div>
                <div className="container mt-4 bg_white ">
                  <div className=" row fs-16 p-3 ">
                    <h5 className="text-center">Picker</h5>
                    <div className="col text-center">
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="MMMM d, yyyy"
                        className="date-pic"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div className="row fs-16">
          <div className="col-lg-12">
            <div className="card border-0 bg_transparent ">
              <div className="">
                <p className="text-start fs-16 txt-color"> Input Sizing </p>
              </div>
            </div>
          </div>
          <div className="card-body m-3">
            <p className="text-muted text-start fs-s txt-color">
              use <code>form-control-lg</code> class to set small large size
              input and use <code>form-control-sm</code> class to set small size
              input. No class is needed for default size input
            </p>
            <div>
              <div className="row  g-3">
                <div className="col-lg-4">
                  <input
                    className="form-control form-control-sm bg-form"
                    type="text"
                    id="example-text-input"
                    placeholder=".form-control-sm"
                  />
                </div>
                <div className="col-lg-4">
                  <input
                    className="form-control"
                    type="text"
                    id="example-text-input"
                    placeholder=".form-control-sm bg-form"
                  />
                </div>
                <div className="col-lg-4">
                  <input
                    className="form-control form-control-lg bg-form"
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
      <div className="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div className="row fs-16">
          <div className="col-lg-12">
            <div className="card border-0 bg-transparent ">
              <div className="align-items-center   ">
                <p className="text-start fs-16 txt-color">File Input </p>
              </div>
            </div>
          </div>
          <div className="card-body m-3">
            <div className="row align-items-center text-start g-3 fs-s">
              <div className="col-lg-4">
                <div>
                  <label htmlFor="formfile" className="form-label fs-s txt-color">
                    Default File Input Example
                  </label>
                  <p className="text-muted fs-s txt-color">
                    use <code>input</code> attribute with
                    <code>type="file</code> tag for default file input{" "}
                  </p>
                  <input
                    className="form-control fs-s bg-form"
                    type="file"
                    id="formfile"
                  />
                </div>
              </div>
              <div className="col-lg-4 ">
                <div>
                  <label
                    htmlFor="formFileMultiple txt-color"
                    className="form-label fs-s"
                  >
                    Multiple File Input Example
                  </label>
                  <p className="text-muted fs-s">
                    use <code>multiple</code> attribute within the input
                    attribute to select multiple files
                  </p>
                  <input
                    className="form-control fs-s bg-form"
                    type="file"
                    id="formFileMultiple"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <label htmlFor="formFileDisabled" className="form-label fs-s">
                    Disabled File Input Example
                  </label>
                  <p className="text-muted fs-s">
                    use <code>Disabled</code> attribute within the input
                    attribute to disable the file input.
                  </p>
                  <input
                    className="form-control fs-s bg-form"
                    type="file"
                    id="formFileDisabled"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4 align-items-center text-start g-3">
              <h5 className="fs-16 para">File Input Sizing</h5>
              <div className="col-lg-4 fs-s">
                <div>
                  <label htmlFor="formSizeSmall" className="form-label">
                    small size file input example
                  </label>
                  <p className="text-muted">
                    use <code>form-control-sm</code> class within the
                    form-control class to set a small size file input.
                  </p>
                  <input
                    className="form-control form-control-sm bg-form"
                    type="file"
                    id="formSizeSmall"
                  />
                </div>
              </div>
              <div className="col-lg-4 fs-s">
                <div>
                  <label htmlFor="formSizeDefault" className="form-label">
                    Default size file input example
                  </label>
                  <p className="text-muted">
                    use <code>form-control</code> class and{" "}
                    <code>type="file"</code> attribute within the input
                    attribute to set a default size file input.
                  </p>
                  <input
                    className="form-control bg-form "
                    type="file"
                    id="formSizeDefault"
                  />
                </div>
              </div>
              <div className="col-lg-4 fs-s">
                <div>
                  <label htmlFor="formSizeLarge" className="form-label">
                    Large size file input example
                  </label>
                  <p className="text-muted">
                    use <code>form-control-lg</code> class within the
                    form-control class to set a large size file input.
                  </p>
                  <input
                    className="form-control form-control-lg bg-form"
                    type="file"
                    id="formSizeLarge"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div className="row fs-16 p-3">
          <div className="col-lg-12 ">
            <div className="card border-0 bg-transparent ">
              <div className="align-items-center  ">
                <p className="text-start"> Input Group</p>
              </div>
            </div>
          </div>
          <div className="card-body text-start fs-s">
            <div>
              <p className="fs-16">Basic example</p>
              <p className="text-muted">
                use <code> input-group</code> class to div element which
                contains input attribute to wrap a default input in the group.
              </p>
            </div>
            <div className="row g-3">
              <div className="col-lg-6 fs-s">
                <div className="input-group ">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control bg-form"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col-lg-6 fs-s">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control bg-form"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    @example.com
                  </span>
                </div>
              </div>
              <div className="col-lg-12 fs-s">
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <input
                    type="text"
                    className="form-control bg-form"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <span className="input-group-text">.00</span>
                </div>
              </div>
              <div className="col-lg-12 fs-s">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control bg-form"
                    placeholder="Username"
                    aria-label="Username"
                  />
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control bg-form"
                    placeholder="Server"
                    aria-label="Server"
                  />
                </div>
              </div>
              <div className="col-lg-6 fs-s">
                <div className="input-group fs-s">
                  <span className="input-group-text fs-s">With textarea</span>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-6 fs-s">
                <label htmlFor="basic-url" className="form-label">
                  Your vanity URL
                </label>
                <div className="input-group mb-3 fs-s">
                  <span className="input-group-text fs-s" id="basic-addon3">
                    https://example.com/users/
                  </span>
                  <input
                    type="text"
                    className="form-control bg-form"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="fs-16 para">Wrapping</p>
                <p className="text-muted">
                  Input groups wrap by default via <code>flex-wrap:wrap</code>{" "}
                  in order to accommodate custom form field validation within an
                  input group. You may disable this with{" "}
                  <code>flex-nowwrap</code> class
                </p>
                <div className="input-group ">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control bg-form"
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
      <div className="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div className="row fs-16 p-3">
          <div className="col-lg-12 fs-s">
            <div className="card border-0 bg-transparent ">
              <div className="align-items-center  ">
                <p className="text-start fs-16">Input Group sizing</p>
              </div>
            </div>
          </div>
          <div className="card-body text-start fs-s">
            <div>
              <p className="text-muted">
                use <code> input-group-sm</code> class to set a small size input
                group and v<code>input-group-lg</code> " class to input-group
                class to set a large size input group respectively. no such
                class is required for a default size input group."
              </p>
            </div>
            <div className="row align-items-center g-3 fs-s">
              <div className="col-lg-4">
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    Small
                  </span>
                  <input
                    type="text"
                    className="form-control bg-form"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">
                    Default
                  </span>
                  <input
                    type="text"
                    className="form-control bg-form"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="input-group input-group-lg mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-lg fs-s">
                    Large
                  </span>
                  <input
                    type="text"
                    className="form-control bg-form"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div className="row fs-16 p-3">
          <div className="col-lg-12 fs-s">
            <div className="card border-0 bg-transparent ">
              <div className="align-items-center  ">
                <p className="text-start fs-16"> Multiple Input </p>
              </div>
            </div>
          </div>
          <div className="card-body text-start fs-s">
            <p className="text-muted">
              Input groups wrap by default via <code>{`<input>`} </code>
              in order to accommodate custom form field validation within an
              input group. You may disable this with <code>
                flex-nowwrap
              </code>{" "}
              class
            </p>
            <div className="col-lg-12 fs-s">
              <div className="input-group">
                <span className="input-group-text">First and last name</span>
                <input
                  type="text"
                  aria-label="First name"
                  className="form-controlbg-form"
                />
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control bg-form"
                />
              </div>
            </div>
            <div className="col-lg-12 mt-3 fs-s">
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <span className="input-group-text">0.00</span>
                <input
                  type="text"
                  className="form-controlbg-form"
                  aria-label="Dollar amount (with dot and two decimal places)"
                />
              </div>
            </div>
            <div className="col-lg-12 fs-s">
              <div className="input-group">
                <input
                  type="text"
                  className="form-controlbg-form"
                  aria-label="Dollar amount (with dot and two decimal places)"
                />
                <span className="input-group-text">$</span>
                <span className="input-group-text">0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div className="row fs-16 p-3">
          <div className="col-lg-12">
            <div className="card border-0 bg-transparent fs-s ">
              <div className="align-items-center  ">
                <p className="text-start fs-16">
                  Buttons, Checkbox and Radio groups{" "}
                </p>
              </div>
              <div className="card-body text-start fs-s">
                <p className="text-muted">
                  Use any checkbox, radio, or button option within an input
                  group’s addon instead of text. We recommend adding{" "}
                  <code>mt-0</code>
                  class to the <code>form-check-input</code> when there’s no
                  visible text next to the input.
                </p>
                <div className="row g-3 fs-s">
                  <div className="col-lg-6">
                    <div className="input-group">
                      <div className="input-group-text">
                        <input
                          className="form-check-input mt-0bg-form "
                          type="checkbox"
                          value
                          aria-label="checkbox for following text input"
                        />
                      </div>
                      <input
                        type="text"
                        className="form-control bg-form"
                        arial-label="Text input with checkbox"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <div className="input-group-text">
                        <input
                          className="form-check-input mt-0 bg-form"
                          type="checkbox"
                          value
                          aria-label="checkbox for following text input"
                        />
                      </div>
                      <input
                        type="text"
                        className="form-control bg-form"
                        arial-label="Text input with checkbox"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <button
                        className="btn primary_outline bg-form "
                        type="button"
                        id="button-addon1"
                      >
                        Button
                      </button>

                      <input
                        type="text"
                        className="form-control bg-form"
                        placeholder=""
                        arial-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-form"
                        placeholder=""
                        arial-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="btn btn-outline-success success_outline "
                        type="button"
                        id="button-addon2"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <button className="btn btn_primary" type="button">
                        Button
                      </button>
                      <button
                        className="btn btn_sucess "
                        type="button"
                        id="button-addon2"
                      >
                        Button
                      </button>
                      <input
                        type="text"
                        className="form-control bg-form"
                        placeholder=""
                        arial-label="Example text with two button addons"
                        aria-describedby="button-addon2"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-form"
                        placeholder=""
                        arial-label="Example text with two button addons"
                        aria-describedby="button-addon2"
                      />
                      <button className="btn btn_primary" type="button">
                        Button
                      </button>
                      <button
                        className="btn btn_sucess "
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
      <div className="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
        <div className="row fs-16 p-3">
          <div className="col-lg-12">
            <div className="card border-0 bg-transparent fs-s ">
              <div className="align-items-center  ">
                <p className="text-start fs-16">Buttons with dropdowns</p>
              </div>
              <div className="card-body text-start fs-s">
                <p className="text-muted">
                  You can use a button with the dropdown toggle to set the file
                  input group.
                </p>
                <div className="row g-3">
                  <div className="col-lg-6">
                    <div className="input-group">
                      <div className="dropdown">
                        <button
                          className="btn btn_primary dropdown-toggle "
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown button
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                      <input
                        type="text"
                        className="form-control "
                        aria-label="Text input with dropdown button"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-form"
                        aria-label="Text input with dropdown button"
                      />
                      <div className="dropdown">
                        <button
                          className="btn btn_success dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown button
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-3">
                  <div className="input-group">
                    <button
                      className="btn primary_outline dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action before
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action before
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Text input with 2 dropdown buttons"
                    />
                    <button
                      className="btn success_outline dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
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
                <label htmlFor="customFileInput" className="form-label"></label>
                <input
                  type="file"
                  className="form-control bg-form "
                  id="customFileInput"
                />
                <ul className="list-unstyled mb-0" id="dropzone-preview"></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 p-3 mb-3 bg-body rounded bg_white ">
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
                  className="filepond--root filepond filepond-input-multiple filepond--hopper text-center d-flex justify-content-center align-items-center "
                  data-style-button-remove-item-position="left"
                  data-style-button-process-item-position="right"
                  data-style-load-indicator-position="right"
                  data-style-progress-indicator-position="right"
                  data-style-button-remove-item-align="false"
                  style={{ height: "76px" }}
                >
                  <div className="dz-message needclick  align-items-center   ">
                    <div className="mb-3 "></div>
                    <div className="img-box-fs-s">
                      Drag &amp; Drop your files or{" "}
                      <span
                        className="filepond--label-action fw-medium"
                        tabindex="0"
                      >
                        Browse
                      </span>
                    </div>
                  </div>
                </div>
                <label htmlFor="customFileInput" className="form-label"></label>
                <input
                  type="file"
                  className="form-control bg-form"
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
                    className="filepond--root filepond filepond-input-multiple filepond--hopper text-center filepond-profile-picture d-flex justify-content-center align-items-center "
                    data-style-button-remove-item-position="left"
                    data-style-button-process-item-position="right"
                    data-style-load-indicator-position="right"
                    data-style-progress-indicator-position="right"
                    data-style-button-remove-item-align="false"
                    style={{ height: "120px", width: "120px" }}
                  >
                    <div className="dz-message needclick  align-items-center   ">
                      <div className="mb-3 "></div>
                      <div className="img-box-fs-s">
                        Drag &amp; Drop your files or{" "}
                        <span
                          className="filepond--label-action fw-medium"
                          tabindex="0"
                        >
                          Browse
                        </span>
                      </div>
                    </div>
                  </div>
                  <label htmlFor="customFileInput" className="form-label"></label>
                  <input
                    type="file"
                    className="form-control bg-form "
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
                  <span className="fw-medium">
                    Requires the <code>$enable-grid-classes</code> Sass variable
                    to be enabled
                  </span>{" "}
                  (on by default).
                </p>
                <div className="live-prieview">
                  <form action="javascript:void(0)">
                    <div className="row d-flex">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="firstNameinput"
                            className="form-label form-fs-s fw-medium"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-fs-s bg-form"
                            placeholder="Enter your firstname"
                            id="firstNameinput"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="lastNameinput"
                            className="form-label form-fs-s fw-medium"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-fs-s bg-form"
                            placeholder="Enter your lastname"
                            id="firstNameinput"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label
                            htmlFor="lastNameinput"
                            className="form-label form-fs-s fw-medium"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-fs-s bg-form"
                            placeholder="Enter Company Name"
                            id="companyNameinput"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="phonenumberInput"
                            className="form-label form-fs-s fw-medium"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control form-fs-s bg-form"
                            placeholder="+(245) 451 45123"
                            id="phonenumberInput"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="emailInput"
                            className="form-label form-fs-s fw-medium"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control form-fs-s bg-form"
                            placeholder="example @gmail.com"
                            id="emailInput"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label
                            htmlFor="address1ControlTextarea "
                            className="form-label form-fs-s fw-medium"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control form-fs-s bg-form "
                            placeholder="Address 1"
                            id="address1ControlTextarea"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="citynameInput"
                            className="form-label form-fs-s fw-medium"
                          >
                            City
                          </label>
                          <input
                            type="email"
                            className="form-control form-fs-s bg-form"
                            placeholder="Enter your city"
                            id="citynameInput"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="ForminputState"
                            className="form-label fw-medium form-fs-s"
                          >
                            State
                          </label>

                          <input
                            type="state"
                            className="form-control form-fs-s bg-form"
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
                <p className="text-muted fs-s">
                  Example of vertical form using <code>form-control</code>{" "}
                  class. No need to specify row and col class to create vertical
                  form.
                </p>
                <div className="live-preview">
                  <form action="javascript:void(0);">
                    <div className="mb-3">
                      <label
                        htmlFor="employeeName "
                        className="form-label fw-medium form-fs-s"
                      >
                        Employee Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-fs-s bg-form"
                        id="employeeName"
                        placeholder="Enter employee name"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="employeeUrl"
                        className="form-label fw-medium form-fs-s"
                      >
                        Employee Department URL
                      </label>
                      <input
                        type="url"
                        className="form-control form-fs-s bg-form"
                        id="employeeUrl"
                        placeholder="Enter employee url"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="StartleaveDate"
                        className="form-label fw-medium form-fs-s"
                      >
                        Start Leave Date
                      </label>
                      <input
                        type="text"
                        className="form-control flatpickr-input form-fs-s bg-form"
                        data-provider="flatpickr"
                        id="StartleaveDate"
                        readonly="readonly"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="EndleaveDate"
                        className="form-label fw-medium form-fs-s bg-form"
                      >
                        End Leave Date
                      </label>
                      <input
                        type="text"
                        className="form-control flatpickr-input form-fs-s bg-form"
                        data-provider="flatpickr"
                        id="EndleaveDate"
                        readonly="readonly"
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="VertimeassageInput"
                        className="form-label fw-medium form-fs-s"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control form-fs-s bg-form"
                        id="VertimeassageInput "
                        rows="3"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <div className="text-end">
                      <button
                        type="submit"
                        className="btn btn_primary fw-medium form-fs-s"
                      >
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
                <p className="text-muted fs-s">
                  Create horizontal forms with the grid by adding the{" "}
                  <code>row</code> class to form groups and using the{" "}
                  <code>col-*-*</code> class to specify the width of your labels
                  and controls. Be sure to add <code>col-form-label</code> class
                  to your <code>&lt;label&gt;</code>s as well so they’re
                  vertically centered with their associated form controls.
                </p>
                <div className="live-preview">
                  <form action="javascript:void(0);">
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <label
                          htmlFor="nameInput"
                          className="form-label fw-medium form-fs-s"
                        >
                          Name
                        </label>
                      </div>
                      <div className="col-lg-9">
                        <input
                          type="text"
                          className="form-control form-fs-s bg-form"
                          id="nameInput"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <label
                          htmlFor="websiteUrl"
                          className="form-label fw-medium form-fs-s"
                        >
                          Website URL
                        </label>
                      </div>
                      <div className="col-lg-9">
                        <input
                          type="url"
                          className="form-control form-fs-s bg-form"
                          id="websiteUrl"
                          placeholder="Enter your url"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <label
                          htmlFor="dateInput"
                          className="form-label fw-medium form-fs-s"
                        >
                          Date
                        </label>
                      </div>
                      <div className="col-lg-9">
                        <input
                          type="text"
                          className="form-control flatpickr-input form-fs-s bg-form"
                          data-provider="flatpickr"
                          id="dateInput"
                          readonly="readonly"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <label
                          htmlFor="timeInput"
                          className="form-label fw-medium form-fs-s"
                        >
                          Time
                        </label>
                      </div>
                      <div className="col-lg-9">
                        <input
                          type="text"
                          className="form-control flatpickr-input form-fs-s bg-form"
                          data-provider="timepickr"
                          data-time-basic="true"
                          id="timeInput"
                          readonly="readonly"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <label
                          htmlFor="leaveemails"
                          className="form-label fw-medium form-fs-s"
                        >
                          Email Id
                        </label>
                      </div>
                      <div className="col-lg-9">
                        <input
                          type="email"
                          className="form-control form-fs-s bg-form"
                          id="leaveemails"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <label
                          htmlFor="contactNumber"
                          className="form-label fw-medium form-fs-s"
                        >
                          Contact Number
                        </label>
                      </div>
                      <div className="col-lg-9">
                        <input
                          type="number"
                          className="form-control form-fs-s bg-form"
                          id="contactNumber"
                          placeholder="
                                                    Enter contact number"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <label
                          htmlFor="meassageInput"
                          className="form-label fw-medium form-fs-s"
                        >
                          Message
                        </label>
                      </div>
                      <div className="col-lg-9">
                        <textarea
                          className="form-control form-fs-s bg-form"
                          id="meassageInput"
                          rows="3"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="text-end">
                      <button
                        type="submit"
                        className="btn btn_primary fw-medium form-fs-s"
                      >
                        Add Leave
                      </button>
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
export default Form;
