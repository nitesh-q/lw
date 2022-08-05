import React from "react"; 
import Icons from "../../../shared/assets";
import Tick from "../../../images/icon/tick-Arrow.svg"
const CTAService = ({allService="",mClass=""}) =>{
    return(
        <section className="CTA_service">
            <div className="col-lg-12">
                  <div className={`row mt_15 flex mb_20 ${mClass} `}>
                    <img src={Tick}  />
                    <li className="col "> No Credit Card Required</li>
                    {allService ? (
                      <>
                        <img src={Tick} className="img-fluid" /> <li className="col "> Free Sign Up</li>
                        <img src={Tick} /> <li className="col"> 24/7 Support</li>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
        </section>
    )
}
export default CTAService;