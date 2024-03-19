import React from 'react'

function FeeDetailsPage() {
  return (
    <div>
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="pills-feerecords-tab" data-bs-toggle="pill" data-bs-target="#pills-feerecords"
            type="button" role="tab" aria-controls="pills-feerecords" aria-selected="true">Fee Records</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-duerecords-tab" data-bs-toggle="pill" data-bs-target="#pills-duerecords"
            type="button" role="tab" aria-controls="pills-duerecords" aria-selected="false">No Due Records</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-feefollow-tab" data-bs-toggle="pill" data-bs-target="#pills-feefollow"
            type="button" role="tab" aria-controls="pills-feefollow" aria-selected="false">Fee FollowUps</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-feereceived-tab" data-bs-toggle="pill" data-bs-target="#pills-feereceived"
            type="button" role="tab" aria-controls="pills-feereceived" aria-selected="false">Fee Received</button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-feerecords" role="tabpanel" aria-labelledby="pills-feerecords-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="pills-duerecords" role="tabpanel" aria-labelledby="pills-duerecords-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="pills-feefollow" role="tabpanel" aria-labelledby="pills-feefollow-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="pills-feereceived" role="tabpanel" aria-labelledby="pills-feereceived-tab" tabindex="0">...</div>
      </div>
    </div>
  )
}

export default FeeDetailsPage