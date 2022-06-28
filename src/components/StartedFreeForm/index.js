import React from "react";

const StartedFree = () => {
  return (
    <div>
      <form action="#" className="contact_form_box" method="post">
        <div className="form-group text_box">
          <input type="text" name="email" id="email" placeholder="Email" />
        </div>
        <button className="btn btn_get btn_get_two" type="submit">
          Get Started for Free
        </button>
      </form>
    </div>
  );
};

export default StartedFree;
