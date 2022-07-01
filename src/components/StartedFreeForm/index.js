import React from "react";

const StartedFree = () => {
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
            placeholder="1234567890@protonmail.com"
          />
        </div>
      </form>
    </div>
    <div className="col-lg-1">
      <a href="/" className="btn btn_get btn_get_two ">
       Start Free Trial
      </a>
    </div>
  </div>
  );
};

export default StartedFree;
