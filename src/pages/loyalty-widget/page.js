import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import "../../assets/brand/brand.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import edit_button from "../../images/edit_button.svg"
const Page = () => {

  const [color, setColor] = useState('#9A249A')
  const [color_1, setColor_1] = useState('#90B3C7')
  const [ShowColor, setShowColor] = useState(false)
  const [ShowColor_1, setShowColor_1] = useState(false)
  const [previewcolor_1,setPreviewColor_1] =useState("bg-red")
  const [previewcolor_2,setPreviewColor_2] =useState("bg-blue")



  const Show_picker = () => {
    console.log("Show_picker...", !ShowColor, ShowColor)
    setShowColor(!ShowColor)
    setShowColor_1(false)
  }

  const Show_picker_1 = () => {
    console.log("Show_picker...", !ShowColor, ShowColor)
    setShowColor_1(!ShowColor_1)
    setShowColor(false)

  }

  
  const PreviewColor = (item) => {
    setPreviewColor_1(item.value[0]);
    setPreviewColor_2(item.value[1]);
    console.log(item.value[0])
  }
  


  const PRESET_OPTIONS = [
    {
      // label: "",
      value: ["bg-red","bg-blue"],
      leftChildClassName: "left_zero bg-red inner_container_1",
      rightChildClassName: "right_zero bg-blue inner_container_1"
    },
    {
      // label: "",
      value: ["bg-navy-blue", "bg-maroon"],
      leftChildClassName: "left_zero bg-navy-blue inner_container_1",
      rightChildClassName: "right_zero bg-maroon inner_container_1"
    },
    {
      // label: "",
      value: ["bg-bringle","bg-skin"],
      leftChildClassName: "left_zero bg-bringle inner_container_1",
      rightChildClassName: "right_zero bg-skin inner_container_1"
    },
    {
      // label: "",
      value: ["bg-pista","bg-yellow"],
      leftChildClassName: "left_zero bg-pista inner_container_1",
      rightChildClassName: "right_zero bg-yellow inner_container_1"
    },
    {
      // label: "",
      value: ["bg-dark-blue","bg-white-smoke"],
      leftChildClassName: "left_zero bg-dark-blue inner_container_1",
      rightChildClassName: "right_zero bg-white-smoke inner_container_1"
    },
    {
      // label: "",
      value: ["bg-cream","bg-olive-dark"],
      leftChildClassName: "left_zero bg-cream inner_container_1",
      rightChildClassName: "right_zero bg-olive-dark inner_container_1"
    },
  ]

  return (
    <>
      <div className='greeting'>
        <h1 >Choose your colors</h1>
        <h2 >Loyalty has to look good, too. Using your brand colors will make your <br />program pop.</h2>
      </div>
      {/* <div style={{ display: "flex" }}>
        <div>
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">PICK THE COLORS THAT FIT YOUR BRAND</label>
          </div>

          <div className='outer_container'>
            {PRESET_OPTIONS.map(item => (
              <div className='inner_container'>
                <div className={item.leftChildClassName}></div>
                <div className={item.rightChildClassName}></div>
              </div>
            ))}
          </div>

          <div className='pic_color'>
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label for="css">OR CHOOSE YOUR OWN</label><br></br>
          </div>

          <div className='color-picker-parent'>


            <div><button onClick={() => Show_picker()} style={{ backgroundColor: `${color}` }}>click here</button></div>
            <div >
              {ShowColor && <ChromePicker
                color={color}
                onChange={updatedColor => setColor(updatedColor.hex)}
              />}
            </div>


            <div style={{ position: 'sticky' }}>
              <button onClick={() => Show_picker_1()} style={{ backgroundColor: `${color_1}` }}>click here</button>
              {ShowColor_1 && <ChromePicker
                color={color_1}
                onChange={updatedColor => setColor_1(updatedColor.hex)}
              />}
            </div>


          </div>
          <h4>you picked {color}</h4>
        </div>
        <div>containervvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</div>
      </div > */}

      <div class="container">
        <div class="row ">
          <div class="col">
            {/*  */}
            <div>
              <div>
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">PICK THE COLORS THAT FIT YOUR BRAND</label>
              </div>

              <div className='outer_container'>
                {PRESET_OPTIONS.map(item => (
                  <div className='inner_container' onClick={()=>{PreviewColor(item)}}>
                    <div className={item.leftChildClassName}></div>
                    <div className={item.rightChildClassName}></div>
                  </div>
                ))}
              </div>

              <div className='pic_color'>
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css">OR CHOOSE YOUR OWN</label><br></br>
              </div>

              <div className='color-picker-parent'>


                


                <div >
                  <button className="picker-color" onClick={() => Show_picker_1()} style={{ backgroundColor: `${color_1}` }}>click here</button>
                  {ShowColor_1 && <ChromePicker
                    color={color_1}
                    onChange={updatedColor => setColor_1(updatedColor.hex)}
                  />}
                </div>

                    <div><button className="picker-color" onClick={() => Show_picker()} style={{ backgroundColor: `${color}` }}>click here</button></div>
                <div >
                  {ShowColor && <ChromePicker
                    color={color}
                    onChange={updatedColor => setColor(updatedColor.hex)}
                  />}
                </div>

              </div>
              <h4>you picked {color}</h4>
            </div>
            {/*  */}
          </div>

          <div class="col">
            <div className='preview'>preview
              <div className='preview_child_1'>
                <div className={`${previewcolor_2}`}>
                  <div className={`outer_child_1 ${previewcolor_1}`}></div>
                  <div className={`outer_child_2 ${previewcolor_1}`}>
                    <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"15px"}}>
                    <div className='mini-square'><div className={`mini-circle ${previewcolor_2}`}></div></div>
                    <div className='mini-square '><div className={`mini-circle ${previewcolor_2}`}></div></div>
                    <div className='mini-square '><div className={`mini-circle ${previewcolor_2}`}></div></div>
                    </div>
                  
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>

  )
}

export default Page