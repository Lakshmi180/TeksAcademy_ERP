import React from 'react'
import "../../../assets/css/common/Accordian.css"
function Accordian() {
    return (
        <div> <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">
            <h5>Accordians</h5>
            <div class="accordion" id="default-accordion-example">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How to create a group booking ?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#default-accordion-example">
                        <div class="accordion-body fs-s">
                            Although you probably won’t get into any legal trouble if you do it just once, why risk it? If you made your subscribers a promise, you should honor that. If not, you run the risk of a drastic increase in opt outs, which will only hurt you in the long run.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why do we use it ?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#default-accordion-example">
                        <div class="accordion-body fs-s">
                            No charges are put in place by SlickText when subscribers join your text list. This does not mean however that charges 100% will not occur. Charges that may occur fall under part of the compliance statement stating "Message and Data rates may apply."
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Where does it come from ?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#default-accordion-example">
                        <div class="accordion-body fs-s">
                            Now that you have a general idea of the amount of texts you will need per month, simply find a plan size that allows you to have this allotment, plus some extra for growth. Don't worry, there are no mistakes to be made here. You can always upgrade and downgrade.
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="container mt-4  shadow-sm p-3 mb-5 bg-body rounded bg_white">

                <div class="accordion custom-accordionwithicon-plus" id="accordionWithplusicon">
                    <div class="accordion-item ">
                        <h2 class="d-flex accordion-header " id="accordionwithplusExample1">
                            <button class=" accordion-button acc-plus plus-plus" type="button" data-bs-toggle="collapse" data-bs-target="#accor_plusExamplecollapse1" aria-expanded="true" aria-controls="accor_plusExamplecollapse1">
                                What is User Interface Design?
                            </button>

                        </h2>
                        <div id="accor_plusExamplecollapse1" class="accordion-collapse collapse show " aria-labelledby="accordionwithplusExample1" data-bs-parent="#accordionWithplusicon">
                            <div class="accordion-body fs-s">
                                Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="accordionwithplusExample2">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accor_plusExamplecollapse2" aria-expanded="false" aria-controls="accor_plusExamplecollapse2">
                                What is Digital Marketing?
                            </button>
                        </h2>
                        <div id="accor_plusExamplecollapse2" class="accordion-collapse collapse" aria-labelledby="accordionwithplusExample2" data-bs-parent="#accordionWithplusicon">
                            <div class="accordion-body fs-s">
                                It makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own. commodo enim craft beer mlkshk aliquip jean shorts ullamco.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="accordionwithplusExample3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accor_plusExamplecollapse3" aria-expanded="false" aria-controls="accor_plusExamplecollapse3">
                                Where does it come from ?
                            </button>
                        </h2>
                        <div id="accor_plusExamplecollapse3" class="accordion-collapse collapse" aria-labelledby="accordionwithplusExample3" data-bs-parent="#accordionWithplusicon">
                            <div class="accordion-body fs-s">
                                Spacing depending on the situation and try, try again until it looks right, and each. next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco. omo nostrud organic, assumenda labore aesthetic magna delectus. pposites attract, and that’s a fact.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordian