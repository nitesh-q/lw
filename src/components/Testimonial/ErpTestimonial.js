import React, {Component} from "react";
import Slider from 'react-slick';
import Sectitle from '../Title/Sectitle';
import Pinstrips from '../../images/trusted-merchents/pinstrip.png'
import Besttop from '../../images/trusted-merchents/bestop.png'
import Cornor from '../../images/trusted-merchents/cornor.png'
import Cariloha from '../../images/trusted-merchents/cariloha.png'
import fylnn from '../../images/trusted-merchents/fylnn.png'


class ErpTestimonial extends Component {
    constructor(){
        super();
      
        this.state={
            items:[
                {
                    "id": 1,
                    "image": Pinstrips,
                   
                },
                {
                    "id": 2,
                    "image": Besttop,
                 
                },
                {
                    "id": 3,
                    "image": Cariloha,
            
                },
                {
                    "id": 4,
                    "image": Cornor,
                
                },
                {
                    "id": 5,
                    "image": fylnn,
                  
                },
                {
                    "id": 6,
                    "image": Besttop,
                   
                }
            ]
        }

    }

    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 200000,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return(
            <section className="erp_testimonial_area sec_pad">
                <div className="container">
                    <Sectitle sClass="hosting_title erp_title text-center" Title="What our customers say about SaasLand ERP"/>
                    <div className="row">
                        <div className="slider_nav">
                            <i className="arrow_left prev" onClick={this.previous}></i>
                            <i className="arrow_right next" onClick={this.next}></i>
                        </div>
                        <Slider ref={c => (this.slider = c)} className="erp_testimonial_info" {...settings}>
                            {this.state.items.map(item =>(
                                <div className="item" key={item.id}>
                                    <div className="erp_testimonial_item">
                                        <div className="media">
                                            <div className="media-body">
                                                <img src={item.image} alt={item.id} />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}

export default ErpTestimonial;