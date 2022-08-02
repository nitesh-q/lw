import React from "react";
import { TABLE_HEAD, CHECK_ICON, PRICE_LIST,TABLE_BOTTOM } from "../../../config";

const getClassNameForIcon = (icon) => {
  switch (icon) {
    case "Y":
      return "icon_check_alt2";
    case "N":
      return "icon_close";
    default:
      return null;
  }
};
const SequrityPrice = () => {
  return (
    <section className="pricing_area_four sec_pad">
      <div className="container-sm container-xl">
        <div className="hosting_title security_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            <span>For teams of all sizes, in the cloud</span>
          </h2>
          <p>Our FREE plan comes with 50 transactions, 1 Campaign, 1 Integration and $0.5 per additional transaction.</p>
        </div>
        <div className="price_info_two price_info_three">
          <div className="price_head">
            {TABLE_HEAD.map((i) => {
              return (
                <div className="p_head">
                  <h5>{i}</h5>
                </div>
              );
            })}
          </div>
          <div className="price_body">
            {PRICE_LIST.map((list,index) => {
              return (
                <div className="pr_list" key={index}>
                  <div className="price_item">
                    <h5
                      className="pr_title"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Save time by using keyboard shortcuts all across SaasLand"
                    >
                      {list.Column1}
                    </h5>
                  </div>
                  {TABLE_HEAD.map((i) => {
                    if (!i) {
                      return null;
                    }
                    return (
                      <div className="price_item" data-title={i}>
                        <h5 className="check">
                          {CHECK_ICON.includes(list[i]) ? null : list[i]}
                          <i className={getClassNameForIcon(list[i])}></i>
                        </h5>
                      </div>
                    );
                  })}
                  
                </div>
                
              );
            })}
            <div className="pr_list">
              <div className="price_item"></div>
              {TABLE_BOTTOM.map((item,index)=>{
                return (
                    <div className="price_item">
                    <a href={item.Url} className="price_btn btn_hover">
                    {item.Label}
                    </a>
                  </div>
                )
              })}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SequrityPrice;
