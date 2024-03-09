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
            <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg-white">
                <div class="row fs-6">
                    <div class="col-lg-12">
                        <div class="card border-0 bg-transparent ">
                            <div className='text-start'>
                                <p >Input Example</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body m-3">
                        <div class="live-preview">
                            <div class="row gy-4 ">
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div className="form-group text-start">
                                            <label className="form-label fsize " for="example-text-input">Basic Input</label>
                                            <input class="form-control" type="text" id="example-text-input" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label fsize" for="example-text-input "> Input with Label</label>
                                            <input class="form-control" type="text" id="example-text-input" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label fsize" for="example-text-input"> Input with Placeholder</label>
                                            <input class="form-control" type="text" id="example-text-input" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label fsize" for="example-text-input ">Text Input</label>
                                            <input class="form-control" type="text" id="example-text-input" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label fsize" for="example-text-input ">Readonly plain Text Input</label>
                                            <input class="form-control-plaintext fsize" type="text" id="readonlyPlaintext" value="Readonly input" readOnly />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label  fsize" for="readonlyInput">Readonly Input</label>
                                            <input class="form-control fsize" type="text" id="readonlyInput" value="Readonly input" radioGroup='' />

                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label fsize" for="disabledInput">Disabled Input</label>
                                            <input class="form-control fsize" type="text" id="disabledInput" value="Disabled input" disabled />

                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="text-start">
                                            <label class="form-label fsize" for="iconInput">Input with Icon</label>
                                            <div class="form-icon d-flex">


                                                <input class="form-control form-control-icon fsize" type="email" id="iconInput" placeholder='example@gmail.com'
                                                />

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div class=" text-start">
                                        <label class="form-label fsize" for="example-text-input"> Input with Icon right</label>
                                        <div class="form-icon right">

                                            <input class="form-control fsize" type="email" id="example-text-input" placeholder='example@gmail.com' />
                                            <i class="ri-mail-unread-line"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label fsize" for="example-text-input ">Input Date</label>
                                            <input class="form-control fsize" type="date" id="exampleInputdate" />

                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label fsize" for="example-text-input ">Input Time</label>
                                            <input class="form-control" type="time" id="exampleInputtime" />

                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label fsize" for="example-text-input "> Input Password</label>
                                            <input class="form-control" type="password" id="example-text-input" value="44512465" />

                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label fsize" for="example-text-input ">Example TextArea</label>
                                            <textarea class="form-control" id="exampleFormContro;Textarea5" rows="3"></textarea>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label fsize" for="example-text-input">Form Text </label>
                                            <input class="form-control" type="password" id="formtextinput" />
                                            <div id="passwordHelpBlock" class="form-text">
                                                "Must be 8-20 characters long"
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label fsize" for="colorPicker ">Color Picker</label>
                                            <input class="form-control form-control-color w-100" type="color" id="colorpicker" value="#364574" />

                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label fsize" for="example-text-input ">Input Border Style</label>
                                            <input class="form-control border-dashed fsize" type="text" id="borderInput" placeholder='Enter your name' />

                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-group text-start">
                                            <label class="form-label fsize" for="exampleDataList ">Datalist example</label>
                                            <input class="form-control fsize" type="text" id="example-text-input" list="datalistOptions" placeholder='search your country...' />
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
                                            <label class="form-label fsize" for="example-text-input ">Rounded Input</label>
                                            <input class="form-control rounded-pill fsize" type="text" id="example-text-input" placeholder='enter your name' />

                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6">
                                    <div>
                                        <div class="form-floating">
                                            <input class="form-control fsize" type="text" id="example-text-input" placeholder='Enter your firstname' />
                                            <label class="form-label fsize" for="example-text-input ">Floating Input</label>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg-white">
                <div class="row fs-6">
                    <div class="col-lg-12">
                        <div class="card border-0 bg-transparent ">
                            <div class="">
                                <p class="text-start fsize" > Input Sizing </p>
                            </div>
                        </div>

                    </div>
                    <div class="card-body m-3">
                        <p class="text-muted text-start fsize">
                            use{" "}
                            <code>form-control-lg</code>{" "}
                            class to set small large size input and use{" "}
                            <code>form-control-sm</code>{" "}
                            class to set small size input. No class is needed for default size input
                        </p>
                        <div>
                            <div class="row  g-3">
                                <div class="col-lg-4">
                                    <input class="form-control form-control-sm" type="text" id="example-text-input" placeholder='.form-control-sm' />
                                </div>
                                <div class="col-lg-4">
                                    <input class="form-control" type="text" id="example-text-input" placeholder='.form-control-sm' />
                                </div>
                                <div class="col-lg-4">
                                    <input class="form-control form-control-lg" type="text" id="example-text-input" placeholder='.form-control-sm' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg-white">
                <div class="row fs-6">
                    <div class="col-lg-12">
                        <div class="card border-0 bg-transparent ">
                            <div class="align-items-center  ">
                                <p class="text-start fsize" >File Input </p>
                            </div>
                        </div>

                    </div>
                    <div class="card-body m-3">

                        <div class="row align-items-center text-start g-3 fsize">
                            <div class="col-lg-4">
                                <div>
                                    <label for="formfile" class="form-label fsize">Default File Input Example</label>
                                    <p class="text-muted fsize">
                                        use {" "}
                                        <code>input</code>{" "}
                                        attribute with
                                        <code>type="file</code>{" "}
                                        tag for default file input{" "}
                                    </p>
                                    <input class="form-control fsize" type="file" id="formfile" />
                                </div>

                            </div>
                            <div class="col-lg-4 ">
                                <div>
                                    <label for="formFileMultiple" class="form-label fsize">Multiple File Input Example</label>
                                    <p class="text-muted fsize">
                                        use {" "}
                                        <code>multiple</code>{" "}
                                        attribute within the input attribute to select multiple files


                                    </p>
                                    <input class="form-control fsize" type="file" id="formFileMultiple" />
                                </div>

                            </div>
                            <div class="col-lg-4">
                                <div>
                                    <label for="formFileDisabled" class="form-label fsize">Disabled File Input Example</label>
                                    <p class="text-muted fsize">
                                        use {" "}
                                        <code>Disabled</code> {" "}
                                        attribute within the input attribute to disable the file input.

                                    </p>
                                    <input class="form-control fsize" type="file" id="formFileDisabled" disabled />
                                </div>

                            </div>
                        </div>
                        <div class="row mt-4 align-items-center text-start g-3">
                            <h5 class="fs-6 para">File Input Sizing</h5>
                            <div class="col-lg-4 fsize">
                                <div>
                                    <label for="formSizeSmall" class="form-label">small size file input example</label>
                                    <p class="text-muted">
                                        use {" "}
                                        <code>form-control-sm</code> {" "}
                                        class within the form-control class to set a small size file input.


                                    </p>
                                    <input class="form-control form-control-sm" type="file" id="formSizeSmall" />
                                </div>
                            </div>
                            <div class="col-lg-4 fsize">
                                <div>
                                    <label for="formSizeDefault" class="form-label">Default size file input example</label>
                                    <p class="text-muted">
                                        use {" "}
                                        <code>form-control</code> {" "}
                                        class and {" "}

                                        <code>type="file"</code> {" "}
                                        attribute within the input attribute to set a default size file input.


                                    </p>
                                    <input class="form-control " type="file" id="formSizeDefault" />
                                </div>
                            </div>
                            <div class="col-lg-4 fsize">
                                <div>
                                    <label for="formSizeLarge" class="form-label">Large size file input example</label>
                                    <p class="text-muted">
                                        use {" "}
                                        <code>form-control-lg</code> {" "}

                                        class within the form-control class to set a large size file input.


                                    </p>
                                    <input class="form-control form-control-lg" type="file" id="formSizeLarge" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg-white">
                <div class="row fs-6 p-3">
                    <div class="col-lg-12 fsize">
                        <div class="card border-0 bg-transparent ">
                            <div class="align-items-center  ">
                                <p class="text-start" > Input Group</p>
                            </div>
                        </div>

                    </div>
                    <div class="card-body text-start fsize">
                        <div >
                            <p class="fs-6">Basic example</p>
                            <p class="text-muted">
                                use {" "}
                                <code> input-group</code> {" "}
                                class to div element which contains input attribute to wrap a default input in the group.
                            </p>
                        </div>
                        <div class="row g-3">
                            <div class="col-lg-6 fsize">
                                <div class="input-group ">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div class="col-lg-6 fsize">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span class="input-group-text" id="basic-addon2">@example.com</span>
                                </div>
                            </div>
                            <div class="col-lg-12 fsize">
                                <div class="input-group mb-3">
                                    <span class="input-group-text">$</span>
                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                            <div class="col-lg-12 fsize">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                                    <span class="input-group-text">@</span>
                                    <input type="text" class="form-control" placeholder="Server" aria-label="Server" />
                                </div>
                            </div>
                            <div class="col-lg-6 fsize">
                                <div class="input-group fsize">
                                    <span class="input-group-text fsize">With textarea</span>
                                    <textarea class="form-control" aria-label="With textarea"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-6 fsize">
                                <label for="basic-url" class="form-label">Your vanity URL</label>
                                <div class="input-group mb-3 fsize">
                                    <span class="input-group-text fsize" id="basic-addon3">https://example.com/users/</span>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                            </div>
                            <div class="mt-4">
                                <p class="fs-15 para">Wrapping</p>
                                <p class="text-muted">
                                    Input groups wrap by default via{" "}
                                    <code>flex-wrap:wrap</code>{" "}
                                    in order to accommodate custom form field validation within an input group. You may disable this with {" "}
                                    <code>flex-nowwrap</code>{" "}
                                    class
                                </p>
                                <div class="input-group ">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg-white">
                <div class="row fs-6 p-3">
                    <div class="col-lg-12 fsize">
                        <div class="card border-0 bg-transparent ">
                            <div class="align-items-center  ">
                                <p class="text-start fs-6" >Input Group sizing</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body text-start fsize">
                        <div>
                            <p class="text-muted">
                                use {" "}
                                <code> input-group-sm</code> {" "}
                                class to set a small size input group and {" "}v
                                <code>input-group-lg</code> {" "}
                                " class to input-group class to set a large size input group respectively. no such class is required for a default size input group."
                            </p>
                        </div>
                        <div class="row align-items-center g-3 fsize">
                            <div class="col-lg-4">
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                            </div>
                            <div class="col-lg-4 ">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="input-group input-group-lg mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-lg fsize">Large</span>
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg-white">
                <div class="row fs-6 p-3">
                    <div class="col-lg-12 fsize">
                        <div class="card border-0 bg-transparent ">
                            <div class="align-items-center  ">
                                <p class="text-start fs-6" > Multiple Input </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body text-start fsize">

                        <p class="text-muted">
                            Input groups wrap by default via {" "}
                            <code>{`<input>`} </code>
                            in order to accommodate custom form field validation within an input group. You may disable this with {" "}
                            <code>flex-nowwrap</code>{" "}
                            class
                        </p>
                        <div class="col-lg-12 fsize">
                            <div class="input-group">
                                <span class="input-group-text">First and last name</span>
                                <input type="text" aria-label="First name" class="form-control" />
                                <input type="text" aria-label="Last name" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-12 mt-3 fsize">
                            <div class="input-group mb-3">
                                <span class="input-group-text">$</span>
                                <span class="input-group-text">0.00</span>
                                <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                            </div>
                        </div>
                        <div class="col-lg-12 fsize">
                            <div class="input-group">
                                <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                                <span class="input-group-text">$</span>
                                <span class="input-group-text">0.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg-white">
                <div class="row fs-6 p-3">
                    <div class="col-lg-12">
                        <div class="card border-0 bg-transparent fsize ">
                            <div class="align-items-center  ">
                                <p class="text-start fs-6" >Buttons, Checkbox and Radio groups </p>
                            </div>
                            <div class="card-body text-start fsize">

                                <p class="text-muted">
                                    Use any checkbox, radio, or button option within an input group’s addon instead of text. We recommend adding{" "}
                                    <code>mt-0</code>
                                    class to the{" "}
                                    <code>form-check-input</code>{" "}
                                    when there’s no visible text next to the input.
                                </p>
                                <div class="row g-3 fsize">
                                    <div class="col-lg-6">
                                        <div class="input-group">
                                            <div class="input-group-text">
                                                <input class="form-check-input mt-0 " type="checkbox" value aria-label="checkbox for following text input" />
                                            </div>
                                            <input type="text" class="form-control" arial-label="Text input with checkbox" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="input-group">
                                            <div class="input-group-text">
                                                <input class="form-check-input mt-0 " type="checkbox" value aria-label="checkbox for following text input" />
                                            </div>
                                            <input type="text" class="form-control" arial-label="Text input with checkbox" />
                                        </div>

                                    </div>
                                    <div class="col-lg-6">
                                        <div class="input-group">

                                            <button class="btn btn-outline-primary " type="button" id="button-addon1">Button</button>

                                            <input type="text" class="form-control" placeholder='' arial-label="Example text with button addon" aria-describedby="button-addon1" />
                                        </div>

                                    </div>
                                    <div class="col-lg-6">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder='' arial-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button class="btn btn-outline-success " type="button" id="button-addon2">Button</button>


                                        </div>

                                    </div>
                                    <div class="col-lg-6">
                                        <div class="input-group">
                                            <button class="btn btn-primary" type="button">Button</button>
                                            <button class="btn btn-success " type="button" id="button-addon2">Button</button>
                                            <input type="text" class="form-control" placeholder='' arial-label="Example text with two button addons" aria-describedby="button-addon2" />
                                        </div>

                                    </div>
                                    <div class="col-lg-6">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder='' arial-label="Example text with two button addons" aria-describedby="button-addon2" />
                                            <button class="btn btn-primary" type="button">Button</button>
                                            <button class="btn btn-success " type="button" id="button-addon2">Button</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg-white">
                <div class="row fs-6 p-3">
                    <div class="col-lg-12">
                        <div class="card border-0 bg-transparent fsize ">
                            <div class="align-items-center  ">
                                <p class="text-start fs-6" >Buttons with dropdowns</p>
                            </div>
                            <div class="card-body text-start fsize" >
                                <p class="text-muted">
                                    You can use a button with the dropdown toggle to set the file input group.
                                </p>
                                <div class="row g-3">
                                    <div class="col-lg-6">
                                        <div class="input-group">

                                            <div class="dropdown">
                                                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown button
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a class="dropdown-item" href="">Action</a></li>
                                                    <li><a class="dropdown-item" href="">Another action</a></li>
                                                    <li><a class="dropdown-item" href="">Something else here</a></li>
                                                </ul>
                                            </div>
                                            <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="input-group">
                                            <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                                            <div class="dropdown">
                                                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown button
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a class="dropdown-item" href="">Action</a></li>
                                                    <li><a class="dropdown-item" href="">Another action</a></li>
                                                    <li><a class="dropdown-item" href="">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 mt-3">
                                    <div class="input-group">
                                        <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="">Action before</a></li>
                                            <li><a class="dropdown-item" href="">Another action before</a></li>
                                            <li><a class="dropdown-item" href="">Something else here</a></li>
                                            <li><a class="dropdown-item" href="">Separated link</a></li>
                                        </ul>
                                        <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons" />
                                        <button class="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="">Action</a></li>
                                            <li><a class="dropdown-item" href="">Another action</a></li>
                                            <li><a class="dropdown-item" href="">Something else here</a></li>
                                            <li><a class="dropdown-item" href="">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg-white">
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

                            <div class="col-lg-6 mt-3">
                                <div class="input-group ms-2 ps-1">
                                    <div class="dropdown">
                                        <input class="dropdown-toggle form-control " type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" placeholder='This is a placeholder ' />
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><input type="search.." placeholder="search.." class="form-control border-start-0" /></li>
                                            <li><a class="dropdown-item" href="">Action</a></li>
                                            <li><a class="dropdown-item" href="">Another action</a></li>
                                            <li><a class="dropdown-item" href="">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-4 bg-white">
                <div class=" row fs-6 p-3 ">

                    <h5>Pagination</h5>

                    <nav aria-label="...">
                        <ul class="pagination pagination-md">
                            <li class="page-item disabled">

                                <a class="page-link" href="" tabindex="-1"> <IoIosArrowRoundBack /> Prev</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active">
                                <a class="page-link" href="">2 </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="">Next <IoIosArrowRoundForward /></a>
                            </li>
                        </ul>
                    </nav>

                    <nav aria-label="...">
                        <ul class="pagination pagination-sm">
                            <li class="page-item disabled">
                                <span class="page-link"><IoIosArrowBack /></span>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active">
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
                                <a href="#" class="page-link rounded">2</a>
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
                                <li class="page-item active p-1 "><a class="page-link rounded" href="#">2</a></li>
                                <li class="page-item p-1 "><a class="page-link rounded" href="#">3</a></li>
                                <li class="page-item p-1 ">
                                    <a class="page-link rounded" href="#"> <IoIosArrowRoundForward /></a>
                                </li>
                            </ul>
                        </nav>
                    </nav>

                </div>

            </div>
            <div class="container mt-4 bg-white ">
                <div class=" row fs-6 p-3 ">
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
    )
}
export default Form
