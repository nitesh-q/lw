import React from "react";

const StartedFree = () => {
  return (
    // <section className="seo_subscribe_area">
    //   {/* <div className="overlay_img"></div> */}
    //   {/* <div className="cloud_img"><img src={require('../img/seo/cloud.png')} alt=""/></div> */}
    //   <div className="container">
    //     {/* <SeoTitle Title="Check your Website’s SEO!" TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikeyWhy gormless, pear shaped.!"/> */}
    //     <form action="#" className="row seo_subscribe_form">
    //       {/* <div className="input-group col-lg-5 col-md-5 col-sm-6">
    //             <input type="url" name="website" id="website" placeholder="Web URL" className="form-control"/>
    //         </div> */}
    //       <div className="input-group col-lg-5 col-md-4 col-sm-6">
    //         <input
    //           type="email"
    //           name="email"
    //           id="emails"
    //           placeholder="Email"
    //           className="form-control"
    //         />
    //         <a
    //           href="/#"
    //           className="btn btn_get btn_get_two fadeInLeft"
    //           data-wow-delay="0.5s"
    //         >
    //           Start Trial
    //         </a>
    //       </div>
    //     </form>
    //   </div>
    // </section>
    <div className="row w-100 service">
    <div className="col">
      <form action="#" className="contact_form_box" method="post">
        <div className="form-group text_box">
          <input
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
       Start Trial
      </a>
    </div>
  </div>
  );
};

export default StartedFree;
