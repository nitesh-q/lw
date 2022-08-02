import React from "react";
const TryAction = ({pClass=""}) => (
  <section className={`try_call_to_action_area sec_pad ${pClass}`}>
    <div className="container ">
      <div className="row w_98">
        <div className="col-lg-6  ">
          <div className="try_call_action_text">
            <h2>Try 99minds now</h2>
            <p>
              The free trial comes with no commitments <br></br>and no credit
              card required
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row w-100 try_action_service">
            {/* <div className="col">
              <form action="#" className="contact_form_box" method="post">
                <div className="form-group text_box">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </form>
            </div> */}
            <div className="action_about_btn_col">
              <a href="/" className="about_btn ">
                Get Started for free
              </a>
            </div>
          </div>

          <div className="row w-100 service ">
          
            <li className="col "> No Credit Card Required</li>
            <li className="col"> Free Sign Up</li>
            <li className="col"> 24/7 Support</li>
          
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default TryAction;
