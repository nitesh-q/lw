import React from 'react'
import { Link } from "gatsby";



const Getstarted = () => {


    const handleclick = () => {
        console.log("handleclick...")
    }

    return (
        <>
        <div className="col-lg-8">
            {/* <button
                className={"btn_get btn_get_two bg_color2 border_btn"}
                onClick={() => handleclick()}
               
            >
                Get Started
            </button> */}

            <Link className={"btn_get btn_get_two bg_color2 border_btn"} to="/loyalty-widget/page"> Get Started</Link>
        </div>


        </>

    )
}

export default Getstarted