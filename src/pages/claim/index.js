import React from "react";
import Layout from "../../components/Layout";
import "../../assets/main.css";

const Claim = () => {
  return (
    <>
      <section className="bg_banner_1 sec_pad">
        <div>
          <h2 className="text-center w_color ">Claim</h2>
        </div>
      </section>

      <div className="">
        <iframe
          className="google_form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSej_Q6OGdlkrLxwXB58yNQ8LRDF2fgNIRtcgqjjkuArhXiTyw/viewform?embedded=true"
          width="640"
          height="1000"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
        >
          Loading…
        </iframe>{" "}
      </div>
    </>
  );
};
export default Claim;
