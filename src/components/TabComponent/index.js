import React from "react";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import Slider from "react-slick";

const TabComponent = ({ Tab, pClass, rClass }) => {
  const [activeTab, setActiveTab] = useState(Tab.Pannel[0].id);
  return (
    <section className={`developer_product_area sec_pad ${pClass} `}>
      <div className="container">
        {Tab.Head.map((item, index) => (
          <h2
            key={index}
            className="f_size_30 f_600 t_color3 l_height40 text-center mb_50 l_sapcing1"
          >
            {item.Title}
          </h2>
        ))}

        <div className="row">
          <div className="col-lg-12 d-flex-column align-items-center justify-content-center">
            <div className="developer_product_content">
              <ul
                className="nav nav-tabs develor_tab mb-30 border_none"
                id="myTab1"
                role="tablist"
              >
                {Tab.Pannel.map((item, index) => (
                  <>
                    <li
                      className="nav-item"
                      key={index}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <a
                        className={`nav-link ${
                          activeTab === item.id ? "active" : ""
                        }`}
                        data-tab={`${item.id}-tab`}
                        id={`${item.id}-tab`}
                        data-bs-toggle="tab"
                        href={`#${item.id}`}
                        role="tab"
                        aria-controls={item.id}
                        aria-selected={item.selected}
                      >
                        {item.label}
                      </a>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            {Tab.Pannel.map((item, index) =>
              activeTab === item.id ? (
                <div key={index} className="tab-content developer_tab_content ">
                  <div
                    className={`tab-pane fade show active`}
                    id={item.id}
                    role="tabpanel"
                    aria-labelledby={`${item.id}-tab`}
                  >
                    <section className="customer_engagement_one d-flex-row justify-content-center align-items-start">
                      <div className="container">
                        <div className="row  flex-row-reverse ">
                          <div className={`col-lg-7 h_500 ${rClass}`}>
                            <div className="customer_engagement_img">
                              <Fade bottom cascade>
                                <img src={item.image} alt="features_img" />
                              </Fade>
                            </div>
                          </div>

                          <div className="col-lg-5   ">
                            <Fade bottom cascade>
                              <div className="customer_engagement_content d-flex-row justify-content-center align-items-start ">
                                <h2 className="">{item.title}</h2>
                                <h3 className="t">{item.title2}</h3>
                                <h6 className="">{item.description1}</h6>
                                {item.subTitle.map((i, index) => {
                                  return (
                                    <ul
                                      className="d-flex justify-content-start pl_1"
                                      key={index}
                                    >
                                      <li>
                                        {i.title}
                                        <span>{i.description}</span>
                                      </li>
                                    </ul>
                                  );
                                })}
                                <h6>{item.description2}</h6>

                                <div className="col-lg-9">
                                  <button
                                    className="btn btn_get btn_get_two mt-3"
                                    type="submit"
                                  >
                                    Get Started for Free
                                  </button>
                                </div>
                              </div>
                            </Fade>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TabComponent;
