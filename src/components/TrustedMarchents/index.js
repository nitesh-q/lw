import React, { Component } from "react";
import Slider from "react-slick";
import TrustedMarchentsConfig from "../../config/TrustedMarchents.config";


class TrustedMarchents extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 20000,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.9,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.9,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: .85,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="erp_testimonial_area slick_pad ">
        <div className="container">
          <h3 className="f_size_20 f_600 t_color4 l_height40 text-center mb_15">
            Trusted by 500+ Marchents
          </h3>
          <div className="row">
            <div className="erp_testimonial_info">
              <Slider className="erp_testimonial_slider" {...settings}>
                {TrustedMarchentsConfig.Marchenct.map((item) => (
                  <div className="erp_testimonial_item">
                    <div className="media">
                      <div className="media-body">
                        <img src={item.image} alt={item.id} />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default TrustedMarchents;



// import React from 'react';
// // import Sectitle from './Title/Sectitle';
// import Slider from 'react-slick';
// import Icons from '../../shared/assets';

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 20000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//           }
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
// };
// const TrustedMarchents =()=>{
//     return(
//         <section  className="app_screenshot_area sec_pad" id="showcase">
//             <div  className="container custom_container p0">
//                 {/* <Sectitle sClass="sec_title text-center mb_70" Title="Awesome app Screenshots" tClass="t_color3 mb_20" TitleP="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot richard cheers the little rotter.!"/> */}
//                 <div className='row'>
//                 <div  className="app_screen_info">
//                     <Slider  className="app_screenshot_slider" {...settings}>
//                         <div  className="item">
//                             <div  className="screenshot_img">
//                                 <a href="img/home7/screenshot1.png"  className="image-link"><img src={Icons.Besttop.default} alt=""/></a>
//                             </div>
//                         </div>
//                         <div  className="item">
//                             <div  className="screenshot_img">
//                                 <a href="img/home7/screenshot2.png"  className="image-link"><img src={Icons.Cariloha.default} alt=""/></a>
//                             </div>
//                         </div>
//                         <div  className="item">
//                             <div  className="screenshot_img">
//                                 <a href="img/home7/screenshot3.png"  className="image-link"><img src={Icons.Cornor.default} alt=""/></a>
//                             </div>
//                         </div>
//                         <div  className="item">
//                             <div  className="screenshot_img">
//                                 <a href="img/home7/screenshot4.png"  className="image-link"><img src={Icons.Pinstrips.default} alt=""/></a>
//                             </div>
//                         </div>
//                         <div  className="item">
//                             <div  className="screenshot_img">
//                                 <a href="img/home7/screenshot5.png"  className="image-link"><img src={Icons.Fylnn.default} alt=""/></a>
//                             </div>
//                         </div>
//                         <div  className="item">
//                             <div  className="screenshot_img">
//                                 <a href="img/home7/screenshot3.png"  className="image-link"><img src={Icons.Cornor.default}alt=""/></a>
//                             </div>
//                         </div>
//                         <div  className="item">
//                             <div  className="screenshot_img">
//                                 <a href="img/home7/screenshot4.png"  className="image-link"><img src={Icons.Cariloha.default} alt=""/></a>
//                             </div>
//                         </div>
//                         {/* <div  className="item">
//                             <div  className="screenshot_img">
//                                 <a href="img/home7/screenshot5.png"  className="image-link"><img src={require('../img/home7/screenshot1.png')} alt=""/></a>
//                             </div>
//                         </div> */}
//                     </Slider>
//                 </div>
//             </div>
//             </div>
//         </section>
//     )
// }
// export default TrustedMarchents;