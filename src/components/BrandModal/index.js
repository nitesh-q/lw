import React from "react";
import { Modal, ModalHeader, Card, CardBody } from "reactstrap";
import Icons from "../../shared/assets";

const ICONS = [
  {
    icon: Icons.Shopify.default,
    desc: " Connect a Shopify account to sell & redeem gift cards on your store.",
  },
  {
    icon: Icons.Woo.default,
    desc: " Connect a Shopify account to sell & redeem gift cards on your store.",
  },
  {
    icon: Icons.BigCommerce.default,
    desc: " Connect a Shopify account to sell & redeem gift cards on your store.",
  },
  {
    icon: Icons.ShopifyPlus.default,
    desc: " Connect a Shopify account to sell & redeem gift cards on your store.",
  },
];

const BrandModal =({toggle ,showModal}) =>{
    return(
        <Modal
        size="md"
        isOpen={showModal}
        toggle={toggle}
        className="Modal"
      >
        {/* <ModalHeader toggle={toggle}></ModalHeader> */}
        <Card>
          <CardBody>
            <div className="brands-modal">
              <h5>Register for an account</h5>
              {ICONS.map((i, index) => {
                return (
                  <div className="modal_items" key={index}>
                    <div className="logo_section">
                      <img src={i.icon} />
                      <button>Connect</button>
                    </div>
                    <p>{i.desc}</p>
                  </div>
                );
              })}

              <div className="modal_items">
                <div className="logo_section">
                  <img className="w_60" src={Icons.Miva.default} />
                  <button>Connect</button>
                </div>
                <p>
                  Connect a Shopify account to sell & redeem gift cards on your
                  store.
                </p>
              </div>
              <div className="footer_button">
                <button onClick={toggle} className={`btn btn_get btn_get_two`} >Close</button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Modal>
    )
}
export default BrandModal;