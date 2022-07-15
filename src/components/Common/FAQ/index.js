import React from "react";

const Faq = () => {
  return (
    <section className="faq_area  sec_pad pt_0">
      <div className="container">
        <div className="row">
          <h2 >FAQ</h2>
          <div className="col-lg-12">
            <div className="tab-content faq_content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="purchas"
                role="tabpanel"
                aria-labelledby="purchas-tab"
              >
                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">
                  How to purchase
                </h3>
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How do I repair an item?<i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Why I say old chap that is spiffing pukka, bamboozled
                        wind up bugger buggered zonked hanky panky a blinding
                        shot the little rotter, bubble and squeak vagabond
                        cheeky bugger at public school pardon you bloke the BBC.
                        Tickety-boo Elizabeth plastered matie.!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Where can I find instructions on how to use my watch?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Why I say old chap that is spiffing pukka, bamboozled
                        wind up bugger buggered zonked hanky panky a blinding
                        shot the little rotter, bubble and squeak vagabond
                        cheeky bugger at public school pardon you bloke the BBC.
                        Tickety-boo Elizabeth plastered matie.!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Is there a warranty on my item?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Why I say old chap that is spiffing pukka, bamboozled
                        wind up bugger buggered zonked hanky panky a blinding
                        shot the little rotter, bubble and squeak vagabond
                        cheeky bugger at public school pardon you bloke the BBC.
                        Tickety-boo Elizabeth plastered matie.!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingfour">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefour"
                          aria-expanded="false"
                          aria-controls="collapsefour"
                        >
                          Is there a warranty on my item?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapsefour"
                      className="collapse"
                      aria-labelledby="headingfour"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Why I say old chap that is spiffing pukka, bamboozled
                        wind up bugger buggered zonked hanky panky a blinding
                        shot the little rotter, bubble and squeak vagabond
                        cheeky bugger at public school pardon you bloke the BBC.
                        Tickety-boo Elizabeth plastered matie.!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingfive">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefive"
                          aria-expanded="false"
                          aria-controls="collapsefive"
                        >
                          Is there a warranty on my item?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapsefive"
                      className="collapse"
                      aria-labelledby="headingfive"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Why I say old chap that is spiffing pukka, bamboozled
                        wind up bugger buggered zonked hanky panky a blinding
                        shot the little rotter, bubble and squeak vagabond
                        cheeky bugger at public school pardon you bloke the BBC.
                        Tickety-boo Elizabeth plastered matie.!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
