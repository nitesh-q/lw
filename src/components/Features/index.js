import React from "react";
import { Reveal } from "react-reveal";

const Features = ({
  img1,
  rowClass,
  title,
  subTitle,
  desc,
  desc1,
  pClass,
  img1Class,
  img2Class,
  ptClass,
}) => {
  return (
    <section className={`chat_features_area ${ptClass}`}>
      <div className="container">
        <div className={`row align-items-center ${rowClass}`}>
          <div className="col-lg-6">
            <div className="chat_features_img chat_features_img_one">
              <Reveal effect="fadeInRight" duration={1000}>
                <img className="chat_one" src={img1} alt="" />
              </Reveal>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`chat_features_content ${pClass}`}>
              <h2>{title}</h2>
              <h6>{subTitle}</h6>
              <p>{desc}</p>
              {desc1.map((i, index) => {
                return (
                  <>
                    <ul className="pl_1">
                      <li key={index}>{i.desc}</li>
                    </ul>
                  </>
                );
              })}

              <a
                href="/#"
                className="btn btn_get btn_get_two fadeInLeft"
                data-wow-delay="0.5s"
              >
                Try it free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
