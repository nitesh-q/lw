import React from "react";
import { Reveal } from "react-reveal";

const Features = ({
  img1,
  img2,
  rowClass,
  col1,
  col2,
  url,
  title,
  desc,
  pClass,
  img1Class,
  img2Class,
  ptClass,
}) => {
  return (
    <section className={`chat_features_area ${ptClass}`}>
      <div className="container">
        <div className={`row align-items-center ${rowClass}`}>
          <div className={col1}>
            <div className="chat_features_img chat_features_img_one">
            <Reveal effect="fadeInRight" duration={1000}>
              <img
                className={`p_absoulte ${img1Class}`}
                data-parallax='{"x": 0, "y": -80}'
                src={img1}
                alt=""
              />
              </Reveal>
            <Reveal effect="fadeInRight" duration={2000}>

              <img
                className={`${img2Class}`}
                data-parallax='{"x": 0, "y": 80}'
                src={img2}
                alt=""
              />
              </Reveal>
            </div>
          </div>
          <div className={col2}>
            <div className={`chat_features_content ${pClass}`}>
              <h2>{title}</h2>
              {desc.map((i,index) => {
                return (
                  <ul>
                    <li key={index}>{i.desc}</li>
                  </ul>
                );
              })}

              <a
                href="/#"
                className="btn btn_get btn_get_two fadeInLeft"
                data-wow-delay="0.5s"
              >
                Define CTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
