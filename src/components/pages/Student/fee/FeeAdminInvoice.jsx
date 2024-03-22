import React from 'react'
import "./FeeAdminInvoice.css"
import { useReactToPrint } from "react-to-print";






function FeeAdminInvoice() {
    const componentRefff = React.useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRefff.current,
    });

    console.log(`Print ${componentRefff.current}`);







    return (
        <div className='container-fluid'  >
<div className='me-2'>
<button class="btn btn_primary me-2 " onClick={handlePrint}>Print</button>
</div>  




            <div className='invoice' ref={componentRefff}>
                <div className='invoice-border d-flex justify-content-center'>
                    <img className=" my-3 w-25" src="https://www.admin.teksacademy.com/static/media/Teks-Logo-with-Trade.07d75f2c54a71180af08.png" alt="logo" />
                </div>
                <div className="invoice-border"><h3 className="text-center my-3  black_color  fs-22 fw-500"> Fee Invoice</h3></div>

                <div className='invoice-border'>
                    <div className="row no-rowmargin">
                        <div class="col-6 pt-2 ">
                            <b className="ps-2   black_color fs-14 fs-14">Registration No : </b>TAA1803240726</div><div className="col-6 invoice-sideborder pt-2   black_color fs-14 fs-14"><b> Invoice NO : </b><b> IN-TAA-03-24/0726/1</b><p><span><b>Date:</b> 19-Mar-2024</span></p></div></div>
                </div>

                <div className='row invoice-border no-margin'>
                    <div className='col-6 invoice-sideborder py-2'>
                        <p className=""><strong className="ps-2  black_color fs-14"> KAPIL KNOWLEDGE HUB PVT LTD</strong></p>
                        <span className=' black_color fs-14'><b className="ps-2  black_color fs-14 ">CIN : </b>U80100TG2018PTC123853</span> <br />
                        <span className=' black_color fs-14'><b className="ps-2  black_color fs-14 ">GSTIN : </b> 36AAHCK0599C1ZI </span> <br />
                        <span className="ps-2  black_color fs-14"><b>Branch : </b> Teks-Ameerpet</span>
                    </div>

                    <div className="col-6 invoice-sideborder py-2  black_color fs-14"><p className="">BILL TO : </p><span><b>Name : </b>Doddapaneni Vinod</span><br /><span><b>Contact No : </b> 8688379973</span><br /><span><b>Email : </b> dvinod7457@gmail.com</span><br /><span><b>Address : </b> <span>Wyra,&nbsp;Vijayawada,&nbsp;Telangana, &nbsp;507165,&nbsp;India</span></span><br /><span><b>Course : </b> Full Stack Java</span></div>
                </div>

                <div className=' table table-responsive pt-4'>
                    <table className="table table-hover table-centered align-middle table-nowrap mb-0">

                        <thead>
                            <th className='th fs-14'>Fee Type</th>
                            <th className='th fs-14'>Course Type</th>
                            <th className='th fs-14'>HSN Type</th>
                            <th className='th fs-14'>Amount</th>
                            <th className='th fs-14'>Tax</th>
                            <th className='th fs-14'>Tax Amount</th>
                            <th className='th fs-14'>Total Amount</th>

                        </thead>
                        <tbody>
                            <tr>
                                <td className='fs-14 td'>Addmission fee
                                </td>
                                <td className='fs-14 td '>Addmission fee
                                </td>
                                <td className='fs-14 td ' >Addmission fee
                                </td>
                                <td className='fs-14 td '>Addmission fee
                                </td>
                                <td className='fs-14 td '>Addmission fee
                                </td>
                                <td className='fs-14 td '>Addmission fee
                                </td><td className='fs-14 td'>Addmission fee
                                </td>
                            </tr>
                            <tr>
                                <td className='fs-16 td fw-600 text-center' colSpan={3}>Total</td>
                                <td className='fs-14 td'>423.73
                                </td>
                                <td className='fs-14 td '>
                                </td>
                                <td className='fs-14 td ' >76.27
                                </td>
                                <td className='fs-14 td fw-600 ' >xyz
                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>

                <div className=' table table-responsive pt-4'>
                    <table className="table table-hover table-centered align-middle table-nowrap mb-0">

                        <thead>

                            <tr>
                                <th className='th fs-14 text-center' rowspan="2">HSN/AC</th>
                                <th className='th fs-14' rowspan="2">Taxable Value</th>

                                <td className='th fs-14' colSpan={2}>CGST</td>
                                <td className='th fs-14' colSpan={2}>SGST</td>
                                <th className='th fs-14 text-center' rowspan="2">Total Tax Amount</th>
                            </tr>
                            <tr>
                                <td className='th fs-14' >Rate</td>
                                <td className='th fs-14'>Amount</td>
                                <td className='th fs-14'>Rate</td>
                                <td className='th fs-14' >Amount</td>
                            </tr>






                        </thead>
                        <tbody>
                            <tr>
                                <td className='fs-14 td'>Addmission fee
                                </td>
                                <td className='fs-14 td '>Addmission fee
                                </td>
                                <td className='fs-14 td ' >Addmission fee
                                </td>
                                <td className='fs-14 td '>Addmission fee
                                </td>
                                <td className='fs-14 td '>Addmission fee
                                </td>
                                <td className='fs-14 td '>Addmission fee
                                </td><td className='fs-14 td'>Addmission fee
                                </td>
                            </tr>

                        </tbody>
                    </table>



                </div>
                <div className="row"><div class="col-6"><p><u><b className="ps-2 black-color fs-14">Bank details:</b></u></p><div className='black-color fs-14'><b className="ps-2 black-color fs-14">GSTIN:</b> 36AAHCK0599C1ZI</div><div>  <b className="ps-2 black-color fs-14">Account No:</b>    ...........</div><div> <b class="ps-2 black-color fs-14">IFSC Code:</b>  ...........</div><p><b className="ps-2 black-color fs-14">Branch:</b>   ..........</p></div>
                    <div className="col-6 m-auto"><div className='black-color fs-14'> KAPIL KNOWLEDGE HUB PVT LMD</div><div><small>(Formerly Kapil Food Park Pvt Ltd)</small></div></div></div>

            </div>
        </div>

        
    )
}

export default FeeAdminInvoice
