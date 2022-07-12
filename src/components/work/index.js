import React, { Component } from "react";
import Title from "../Common/Title";

const AUTOMATION_WORK = [
  {
    title: "Set up Trigger",
    subTitle: "TRIGGE",
    desc: "When order status is updated to paid",
  },
  {
    title: "Logic Conditions",
    subTitle: "CONDITIONS ",
    desc: "If total value of order is greater than $50",
  },
  {
    title: "Execute Action",
    subTitle: "ACTION ",
    desc: "Send a text/email message with a discount gift card",
  },
];

const Work = () => {
  return (
    <section className="support_work_area sec_pad">
      <div className="container">
        <Title
          sClass="sec_title text-center mb_70"
          title="How its work"
          tClass="t_color3"
          titleP=""
        />
        <div className="work_content ">
          <div className="row">
            
              {AUTOMATION_WORK.map((i,index) => {
                return (
                    <div className="col-lg-4">
                  <div className="work_item">
                    <h5>{i.title}</h5>
                    <p>{i.subTitle} </p>
                    <ul className="list-unstyled p_list">
                      <li>{i.desc}</li>
                    </ul>
                  </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;
