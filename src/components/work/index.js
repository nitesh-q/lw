import React, { Component } from "react";
import Title from "../Common/Title";



const Work = ({config}) => {
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
          <div className="workflow_dot_line "></div>
          <div className="row">
            {config.map((i, index) => {
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
