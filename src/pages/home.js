import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Service from '../components/Services/Service';
import DesignBanner from '../components/banner/DesignBanner';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const Home = () => (
    <div className="body_wrapper">
        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
        <DesignBanner/>
        <Service/>
        <Subscribe FooterData={FooterData}/>
        <Footer FooterData={FooterData}/>
    </div>
)
export default Home;