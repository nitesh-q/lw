import React from "react";

const StartedFree = ({btnClass}) => {
  return (
    <div className="row w-100 service">
    <div className="col">
      <form action="#" className="contact_form_box" method="post">
        <div className="form-group text_box">
          <input
          // className="shadow p-3 mb-5 bg-white rounded"
            type="text"
            name="email"
            id="email"
            placeholder="Enter mail"
          />
        </div>
      </form>
    </div>
    <div className="col-lg-1">
      <a href="/" className={`btn btn_get btn_get_two ${btnClass}`}>
       Start Free Trial
      </a>
    </div>
  </div>
  );
};

export default StartedFree;
