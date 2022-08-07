import React from "react";
import Icon1 from "../../images/service/icon1.png";
import Icon2 from "../../images/service/icon2.png";
import Icon3 from "../../images/service/icon3.png";

const Service = () => {
  return (
    <section className=" service_provide mb_50 mt_50">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ">
            <div className="service_provide_content justify-content-start">
              <img src={Icon1} />
              <p>24/7 Support</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service_provide_content justify-content-start">
              <img src={Icon3} />
              <p>Trusted by 500+ Merchants</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service_provide_content position">
              <img src={Icon2} />
              <p>Safe and Secure Platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
