import React from 'react'
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import "../../../assets/css/common/Tab.css"
function Tab() {
    return (
        <div>
            <div class="container mt-4 bg-white">
                <div class=" row fs-6 p-3 ">
                    <h5>Tabs</h5>
                    <div class="col-lg-6">
                        <ul class="nav nav-tabs mb-3" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-bs-toggle="tab" href="#home" role="tab" aria-selected="false" tabindex="-1">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" data-bs-toggle="tab" href="#product1" role="tab" aria-selected="true">
                                    Product
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-bs-toggle="tab" href="#messages" role="tab" aria-selected="false" tabindex="-1">
                                    Messages
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-bs-toggle="tab" href="#settings" role="tab" aria-selected="false" tabindex="-1">
                                    Settings
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content  text-muted">
                            <div class="tab-pane active show" id="home" role="tabpanel">
                                <h6>Graphic Design</h6>
                                <p class="mb-0">
                                    They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                                </p>
                            </div>
                            <div class="tab-pane" id="product1" role="tabpanel">
                                <h6>Product</h6>
                                <p class="mb-0">
                                    You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                </p>
                            </div>
                            <div class="tab-pane" id="messages" role="tabpanel">
                                <h6>Messages</h6>
                                <p class="mb-0">
                                    Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                    sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                    farm-to-table readymade. Messenger bag gentrify pitchfork
                                    tattooed craft beer, iphone skateboard locavore carles etsy
                                    salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                </p>
                            </div>
                            <div class="tab-pane" id="settings" role="tabpanel">
                                <h6>Settings</h6>
                                <p class="mb-0">
                                    Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                    art party before they sold out master cleanse gluten-free squid
                                    scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                    art party locavore wolf cliche high life echo park Austin. Cred
                                    vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                    farm-to-table VHS.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <ul class="nav nav-tabs-custom nav-success nav-justified mb-3 " role="tablist">
                            <li class="nav-item " role="presentation">
                                <a class="nav-link " data-bs-toggle="tab" href="#home1" role="tab" aria-selected="false" tabindex="-1">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link " data-bs-toggle="tab" href="#profile1" role="tab" aria-selected="false" tabindex="-1">
                                    Profile
                                </a>
                            </li>
                            <li class="nav-item " role="presentation">
                                <a class="nav-link active " data-bs-toggle="tab" href="#messages1" role="tab" aria-selected="true">
                                    Messages
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link " data-bs-toggle="tab" href="#settings1" role="tab" aria-selected="false" tabindex="-1">
                                    Settings
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content text-muted">
                            <div class="tab-pane" id="home1" role="tabpanel">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <RiCheckboxMultipleBlankFill
                                            className='text-success'
                                        />

                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR.
                                        <div class="mt-2">
                                            <a href="javascript:void(0);" class="btn btn-sm btn-soft-primary">Read More <IoIosArrowRoundForward /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="profile1" role="tabpanel">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <RiCheckboxMultipleBlankFill
                                            className='text-success'
                                        />
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown.
                                        <div class="mt-2">
                                            <a href="javascript:void(0);" class="btn btn-sm btn-soft-primary">Read More <IoIosArrowRoundForward /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane active show" id="messages1" role="tabpanel">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <RiCheckboxMultipleBlankFill
                                            className="text-success"
                                        />
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                        <div class="mt-2">
                                            <a href="javascript:void(0);" class="btn btn-sm btn-soft-primary">Read More<IoIosArrowRoundForward /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="settings1" role="tabpanel">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <RiCheckboxMultipleBlankFill
                                            className='text-success'
                                        />
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the.
                                        <div class="mt-2">
                                            <a href="javascript:void(0);" class="btn btn-sm btn-soft-primary">Read More <IoIosArrowRoundForward /></a>
                                        </div>
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

export default Tab