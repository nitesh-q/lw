import React from "react"; 

const CTAService = ({allService="",mClass=""}) =>{
    return(
        <section className="CTA_service">
            <div className="col-lg-12">
                  <div className={`row mt_15 flex mb_20 ${mClass} `}>
                    <li className="col "> No Credit Card Required</li>
                    {allService ? (
                      <>
                        <li className="col "> Free Sign Up</li>
                        <li className="col"> 24/7 Support</li>
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