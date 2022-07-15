import React, { Component } from "react";
import Isotope from "isotope-layout/js/isotope";
import ImagesLoaded from "imagesloaded/imagesloaded";
import IntegrationGridCard from "./integrationGirdCard";
import image1 from "../../images/portfolio/3-columns/_shopify.png";
import image2 from "../../images/portfolio/3-columns/_BigCommerce.png";


const data = [
  {
    label: "All",
    type: "*",
    image: "",
    title: "",
    desc: "",
  },
  {
    label: "E-Commerce",
    type: "e-commerce",
    image: image1,
    title: "Shopify",
    desc: "Personalized discounts your Shopify store was missing",
  },
  {
    label: " Marketing Automation",
    type: "marketing-automation",
    image: image2,
    title: "Shopify",
    desc: "Personalized discounts your Shopify store was missing",
  },
];

class IntegrationGrid extends Component {
  state = {
    activeItem: "*",
  };

  componentDidMount() {
    var imgLoad = new ImagesLoaded("#work-portfolio");

    imgLoad.on("progress", function (instance, image) {
      this.iso = new Isotope("#work-portfolio", {
        itemSelector: ".portfolio_item",
        layoutMode: "masonry",
      });
    });
  }
  onFilterChange = (newFilter) => {
    this.setState({ activeItem: newFilter });
    if (this.iso === undefined) {
      this.iso = new Isotope("#work-portfolio", {
        itemSelector: ".portfolio_item",
        layoutMode: "masonry",
      });
    }

    // this.iso.arrange({ filter: newFilter });

    if (newFilter === "*") {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  };

  onActive = (v) => (v === this.state.activeItem ? "active" : "");

  render() {
    return (
      <section className="portfolio_area sec_pad ">
        <div className="container">
          <div id="portfolio_filter" className="portfolio_filter mb_50">
            {data.map((i, index) => (
              <div
                data-filter={i.type}
                className={`work_portfolio_item ${this.onActive(i.type)}`}
                onClick={() => {
                  this.onFilterChange(i.type);
                }}
              >
                {i.label}
              </div>
            ))}
          </div>
          <div className="row portfolio_gallery mb_30" id="work-portfolio">
            {data.map((i, index) => {
              if (!i.title) {
                return null;
              }
              return (
                <a href=".#">
                  <IntegrationGridCard
                    colClass={`col-lg-4 col-sm-6 ${i.type} `}
                    pImg={i.image}
                    title={i.title}
                    desc={i.desc}
                    type={i.label}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default IntegrationGrid;
