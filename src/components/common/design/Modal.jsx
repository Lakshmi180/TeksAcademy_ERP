import React from 'react'
import { IoIosClose } from "react-icons/io";
function Modal() {
  return (
    <div>
         <div class="container mt-4 bg-white">
                <div class=" row fs-6 p-3 ">
                    <h5>Modals</h5>
                    <div class="col-lg-6">
                        <button type="button" class="btn btn-primary mt-4 " data-bs-toggle="modal" data-bs-target="#myModal">Standard Modal</button>
                        <div id="myModal" class="modal fade" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header ">
                                        <h5 class="modal-title" id="myModalLabel">Modal Heading</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
                                    </div>
                                    <div class="modal-body fsize">
                                        <h5 class="fs-15">
                                            Overflowing text to show scroll behavior
                                        </h5>
                                        <p class="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                                        <p class="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                                        <p class="text-muted">It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
                                    </div>
                                    <div class="modal-footer fsize">
                                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary ">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-6">
                        <button type="button" class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Static Backdrop Modal
                        </button>

                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-body text-center p-5">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/lupuorrc.json"
                                            trigger="loop"
                                            colors="primary:#121331,secondary:#08a88a"
                                        >
                                        </lord-icon>

                                        <div class="mt-4">
                                            <h4 class="mb-3">You've made it!</h4>
                                            <p class="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                                            <div class="hstack gap-2 justify-content-center">
                                                <a href="javascript:void(0);" class="btn btn-link link-success fw-medium" data-bs-dismiss="modal"><IoIosClose /> Close</a>
                                                <a href="javascript:void(0);" class="btn btn-success">Completed</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalgrid">
                            Launch Demo Modal
                        </button>
                        <div class="modal fade" id="exampleModalgrid" tabindex="-1" aria-labelledby="exampleModalgridLabel" aria-modal="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalgridLabel">Grid Modals</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="javascript:void(0);">
                                            <div class="row g-3">
                                                <div class="col-xxl-6">
                                                    <div>
                                                        <label for="firstName" class="form-label">First Name</label>
                                                        <input type="text" class="form-control" id="firstName" placeholder="Enter firstname" />
                                                    </div>
                                                </div>
                                                <div class="col-xxl-6">
                                                    <div>
                                                        <label for="lastName" class="form-label">Last Name</label>
                                                        <input type="text" class="form-control" id="lastName" placeholder="Enter lastname" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <label for="genderInput" class="form-label">Gender</label>
                                                    <div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                            <label class="form-check-label" for="inlineRadio1">Male</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                            <label class="form-check-label" for="inlineRadio2">Female</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                            <label class="form-check-label" for="inlineRadio3">Others</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xxl-6">
                                                    <div>
                                                        <label for="emailInput" class="form-label">Email</label>
                                                        <input type="email" class="form-control" id="emailInput" placeholder="Enter your email" />
                                                    </div>
                                                </div>
                                                <div class="col-xxl-6">
                                                    <div>
                                                        <label for="passwordInput" class="form-label">Password</label>
                                                        <input type="password" class="form-control" id="passwordInput" value="451326546" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="hstack gap-2 justify-content-end">
                                                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                        <button type="submit" class="btn btn-primary">Submit</button>
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
            </div>
    </div>
  )
}

export default Modal