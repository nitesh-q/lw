import React from "react";
import { Reveal } from "react-reveal";

const Features = ({
  img1,
  rowClass,
  title,
  subTitle,
  desc,
  list,
  pClass,
  col1,
  col2,
  ptClass,
}) => {
  return (
    <section className={`chat_features_area`}>
      <div className=" container container-fluid">
        <div className={`row align-items-center ${rowClass}`}>
          <div className={`${col1}`}>
            <div className="chat_features_img chat_features_img_one">
              <Reveal effect="fadeInRight" duration={1000}>
                <img className="chat_one img-fluid" src={img1} alt="" />
              </Reveal>
            </div>
          </div>
          <div className={`${col2}`}>
            <div className={`chat_features_content ${pClass}`}>
              <h2>{title}</h2>
              <h6>{subTitle}</h6>
              <p>{desc}</p>
              {list.map((i, index) => {
                return (
                  <>
                    <ul className="pl_1" key={index}>
                      <li >{i.desc}</li>
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
