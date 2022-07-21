import React, { Component } from "react";
const  GridItem =({type, title, description, image })=> {
    return (
      <div className="col-lg-4 col-sm-6 ">
        <a href="/case-study-details">
          <div className="Case_studies_list_item Case_studies_list_item_two">
            <img className="img-fluid" src={image} alt="" />

            <div className="Case_studies_content">
              <div class="portfolio_label">{type}</div>
              <h5 className="Case_studies_title">{title}</h5>

              <p>{description}</p>
              <div className="post-info-bottom">
                <a href="/case-study-details" className="learn_btn_two">
                 Read more <i className="arrow_right"></i>
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
export default GridItem;
