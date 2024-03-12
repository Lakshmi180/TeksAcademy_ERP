import React from 'react'
export const CreateRole = () => {
  return (
    <div>
      <div className="container">
        <h6>Create Role</h6>
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
        </div>
      </div>
    </div>
      )
}
