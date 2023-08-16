import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CSVLink } from 'react-csv';
import ReCAPTCHA from "react-google-recaptcha";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import "../../assets/main.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


import Shopify_logo from "../../images/coupon-generator/Shopify_logo_2018.svg";
import bigCommerce_logo from "../../images/coupon-generator/bc-logo-dark.svg";
import shopifyplus_logo from "../../images/coupon-generator/shopify+.svg";
import SalesForce_logo from "../../images/coupon-generator/Salesforce-logo.svg";
import woocommerce_logo from "../../images/coupon-generator/woocommerce-logo-1395ccff7884105ee1bc16f777a9964e.png";

const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const Allcaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const CouponGeneratorv1 = () => {
    const [length, setLength] = useState(8);
    const [prefix, setPrefix] = useState('');
    const [suffix, setSuffix] = useState('');
    const [codes, setCodes] = useState([]);
    const [NumberOfCode, setNumberOfCode] = useState(1);
    const [codePattern, setCodePattern] = useState('#####################');
    // eslint-disable-next-line no-unused-vars
    const [verified, setVerified] = useState(false);
    const [characters, setCharacters] = useState(alphanumeric);
    const [characterType, setCharacterType] = useState('alphabet');
    const [customCharacters, setCustomCharacters] = useState(alphabets);
    const [generatedCodes, setGeneratedCodes] = useState(false);
    const [borderColor, setborderColor] = useState('unset')
    const [isBlack, setIsBlack] = useState("");
    const [selected, setSelected] = useState(null);
    const [flag, setFlag] = useState(false);
    const [import_to, setImport_to] = useState(false)
    const [modal, setModal] = useState(false);


    const flag_index = () => {
        console.log("flag_index....")
        return (
            setFlag(!flag)
        )
    }

    const handlechange = (event) => {
        setCustomCharacters(event.target.value);
        setCharacters(event.target.value)

    };

    const handleClick = (id, codeid) => {
        setIsBlack(id);
        setCharacters(codeid)
    };
    //generates giftcard code
    const generateGiftCard = () => {
        setLength(16);
        setCodePattern('################');
        setCharacterType('numbers');
        setCharacters(number)
        setIsBlack('gift-card');
    };
    //add prefix to code
    const generateAnGiftCard = () => {
        setLength(16);
        setCharacterType('alphanumeric')
        setCharacters(alphanumeric)
        setIsBlack('prefix-code');
    };
    //default value for import button
    const [buttonName, setButtonName] = useState("99Minds");

    //Google Captcha 
    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(true);
    }
    const headers = [
        {
            label: 'coupon_code',
            key: 'code',
        }
    ];
    //generates Random code
    const generateCodes = () => {
        const generatedCodes = [];
        for (let i = 0; i < NumberOfCode; i++) {
            let code = '';
            while (code.length < length) {
                const randomIndex = Math.floor(Math.random() * characters?.length);
                code += characters[randomIndex];
            }
            const formattedCode = codePattern
                .split('')
                .map((char, index) => (char === '#' ? code[index] : char))
                .join('');
            generatedCodes.push({
                code: `${prefix}${formattedCode}${suffix}`,
            });
        }
        setGeneratedCodes(true)
        return generatedCodes;
    };

    //sets charecter type and charecter set for advance settings
    const Numeric = () => {
        setCharacterType('numbers');
        setLength(8);
        setCharacters(number);
        setIsBlack('numeric');
    };

    const Alphanumeric = () => {
        setCharacterType('alphanumeric');
        setCharacters(alphanumeric);
        setLength(8);
        setborderColor("#5e53fb")
        setIsBlack('alphanum');
    };

    const Alphabet = () => {
        setCharacterType('alphabet');
        setCharacters(alphabets);
        setLength(8);
        setIsBlack('alpha');
    };

    const allCaps = () => {
        setLength(8);
        setCharacterType('allCaps');
        setCharacters(Allcaps);
        setIsBlack('all-caps');
    };

    //This is for changing pattern
    const handleCodePatternChange = (e) => {
        setCodePattern(e.target.value);
    };
    //Genarate code according to dataset
    const Generate = () => {
        const generatedCodes = generateCodes(characters);
        setCodes(generatedCodes);

        if (generatedCodes.length === 0) {
            setModal(true)
            console.log("Generate....", generatedCodes, generatedCodes.length)
        }
        console.log("Generate....", generatedCodes, generatedCodes.length)
    };

    // for modal 
    const toggle = () => {
        setModal(!modal)
    }


    const Length_of_Coupon_Code = (e) => {
        if (e.target.value >= 0) {
            console.log("Length_of_Coupon_Code...", e.target.value)
            setLength(e.target.value)
        }
    }

    const Number_of_Codes = (e) => {
        if (e.target.value >= 0 && e.target.value <= 500) {
            console.log("Number_of_Codes...", e.target.value)
            setNumberOfCode(e.target.value)
        }
    }


    const data = [{
        input_id: "Shopify",
        label_selected: "Shopify",
        htmlFor_id: "Shopify",
        img_src: Shopify_logo,
        selected_id: "Shopify",
        inner_img_classname: "img-fluid div-img"

    },
    {
        input_id: "bigCommerce",
        label_selected: "bigC",
        htmlFor_id: "bigCommerce",
        // img_src: "/static/bc-logo-dark.svg",
        img_src: bigCommerce_logo,
        selected_id: "bigC",
        inner_img_classname: "img-fluid div-img2"

    },
    {
        input_id: "shopify+",
        label_selected: "shopify+",
        htmlFor_id: "shopify+",
        img_src: shopifyplus_logo,
        selected_id: "shopify+",
        inner_img_classname: 'img-fluid div-img2'

    },
    {
        input_id: "SalesForce",
        label_selected: "SalesForce",
        htmlFor_id: "SalesForce",
        img_src: SalesForce_logo,
        selected_id: "SalesForce",
        inner_img_classname: "img-fluid div-img2"

    },
    {
        input_id: "nextjs",
        label_selected: "woocommerce",
        htmlFor_id: "nextjs",
        img_src: woocommerce_logo,
        selected_id: "woocommerce",
        inner_img_classname: "img-fluid div-img2"

    }
    ];
    const CardData = [
        {
            id: "alphanum",
            title: "Generate Alphanumeric Codes",
            codeText: "BTsW1gzi\nDEsfn08t",
            onClick: Alphanumeric
        },
        {
            id: "numeric",
            title: "Generate Numeric Coupon Codes",
            codeText: "42120189\n17212341",
            onClick: Numeric
        },
        {
            id: "alpha",
            title: "Generate Alphabet Coupon Codes",
            codeText: "LJqpihKG\niEkvquRR",
            onClick: Alphabet
        },
        {
            id: "all-caps",
            title: "Generate All Caps Coupon Codes",
            codeText: "TAARRUKY\nFDDRFZWW",
            onClick: allCaps
        },
        {
            id: "gift-card",
            title: "Generate GiftCard Codes",
            codeText: "1098-1240-5121-4251\n1467-1032-0142-6231",
            onClick: generateGiftCard
        },
        {
            id: "prefix-code",
            title: "Generate Alphanumeric GiftCard Codes",
            codeText: "Ab13-Uk01-49vJ-L1v3\n Pivl-11Cr-07Ac-Ay41",
            onClick: generateAnGiftCard
        },
        // Add more data objects as needed
    ];

    return (
        <div className="body seo_features_content body-seo-features-content-color" >
            <div className="seo_features_one bg_color sec_pad banner_top body">
                <div class="container container-xl container-container-xl-style" >
                    <h2 className='seo_features_content Create-Your-custom-Coupons'

                    > Create Your Custom Coupons </h2>
                    <p className='Create-Your-custom-Coupons-text'

                    >Use free code generator to generate unique codes that can be
                        used for coupons, gift cards, passwords, and more.
                        If you need an end-to-end promotion management tool,
                        try 99minds</p>
                </div>
            </div>
            <div className="container-fluid body  all-center"  >
                <h2 className='heading'>Choose your E-commerce Site</h2>
                <div className="container">
                    {/* Ecoom site logos */}
                    <div className="row gap-4 main-img-div">
                        {data.map((i) => (
                            <div key={i.input_id} className="col-lg-2 col-md-4 col-sm-5">
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="options"
                                        id={i.input_id}
                                        autoComplete="off"
                                    />
                                    <label
                                        className={`s_integration_item ${selected === i.label_selected ? "selected" : ""
                                            }`}
                                        htmlFor={i.htmlFor_id}
                                        onClick={() => {
                                            setButtonName(<img className="img-fluid logo-img" src={i.img_src} alt="logo" />);
                                            setSelected(i.selected_id);
                                        }}
                                    >
                                        <div className="inner-logo-shopify">
                                            <img className={i.inner_img_classname} src={i.img_src} alt="logo" />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Input Fields for Length and No. of Codes */}


                <div className='Advance-Settings-style'>
                    <div className='g-col-6 m-4'>
                        <label className='Length-of-Code-text'><h5>Length of Coupon Code</h5></label>
                        <input type="number" value={length} max={18} onChange={Length_of_Coupon_Code} className="form-control div-Number-of-Codes" />
                    </div>

                    <div className='g-col-6 m-4' >
                        <label className='Number-of-Codes-color'><h5>Number of Codes</h5></label>
                        <input type="number" max={500} value={NumberOfCode} onChange={Number_of_Codes} className="form-control div-Number-of-Codes" />
                    </div>
                </div>


                <p>
                    <button className="btn btn-bd-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={flag_index}>
                        <h3 className='h-advance-setting'>Advance Settings {flag ? <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}</h3>
                    </button>
                </p>

                {/* Advance Settings Collapse */}

                <div className="collapse" id="collapseExample">
                    <div className="grid text-center">
                        <div className='Advance-Settings-style'>
                            <div className='g-col-6 m-4'>
                                <label className='Prefix-label'><h5>Prefix</h5></label>
                                <input type="text" value={prefix} onChange={(e) => setPrefix(e.target.value)} className="form-control prefix" />
                            </div>

                            <div className='g-col-6 m-4' >
                                <label className='Prefix-label'><h5>Suffix</h5></label>
                                <input type="text" value={suffix} onChange={(e) => setSuffix(e.target.value)} className="form-control Suffix" />
                            </div>
                        </div>

                        <div className='main-div-Characters-Code-Pattern'>
                            <div className='g-col-6 m-4'>
                                <label ><h5 className='Prefix-label'>Characters</h5></label>
                                <div className="input-group col-lg-6 col-md-6 col-sm-12 Prefix-label">
                                    <div>
                                        <select
                                            className="form-select Characters-select "
                                            value={characterType}
                                            // Dropdown for charecter type 
                                            onChange={(e) => {
                                                setCharacterType(e.target.value);
                                                if (e.target.value === 'custom') {
                                                    setCharacters(customCharacters);
                                                } else if (e.target.value === 'alphabet') {
                                                    setCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
                                                } else if (e.target.value === 'numbers') {
                                                    setCharacters('0123456789');
                                                } else if (e.target.value === 'alphanumeric') {
                                                    setCharacters(alphanumeric);
                                                }
                                            }}>
                                            <option className='Prefix-label' value="custom">Custom</option>
                                            <option className='Prefix-label' value="alphabet">Alphabet</option>
                                            <option className='Prefix-label' value="numbers">Numbers</option>
                                            <option className='Prefix-label' value="alphanumeric">Alphanumeric</option>
                                        </select>
                                        {characterType === 'custom' && (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={customCharacters}
                                                onChange={handlechange}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='g-col-6 m-4'>
                                <label ><h5 className='Prefix-label' style={{ whiteSpace: "nowrap" }}>Code Pattern</h5></label>
                                <input type="text" value={codePattern} onChange={handleCodePatternChange} className="form-control code-pattern" />
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='Choose-Your-Templates'>Choose Your Templates</h2>

                <div className="container">
                    <div className="row" style={{ justifyContent: "center" }}>
                        {CardData.map((item) => (
                            <div
                                key={item.id}
                                className={`col-lg-3 col-md-6 col-sm-12 action_btn d-flex justify-content-center align-items-center mt_30 cardstyle s_integration_item ${isBlack === item.id ? "selected" : ""
                                    }`}
                            >
                                <button className="btn btn-bd-primary" onClick={() => {
                                    handleClick(item.id, item.codeid);
                                    item.onClick()
                                }}>
                                    <h5 className="Generate-Alphanumeric-Codes">{item.title}</h5>
                                    <br />
                                    <div className="Generate-Alphanumeric-Codes-text">
                                        <h6 className='pre-wrap-text'>{item.codeText}</h6>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Google Captcha */}
                <div className='container d-flex justify-content-center pb-3  captcha'>
                    <ReCAPTCHA
                        sitekey={process.env.GATSBY_CAPTCHA_KEY}
                        onChange={onChange}
                    />
                </div>


                {verified ? <>
                    <button className="btn btn_get btn_get_three mt-3  generate" onClick={Generate}>
                        Generate
                    </button>

                    {/*  */}


                    <Modal isOpen={modal} toggle={toggle} >
                        <ModalHeader toggle={toggle}>Warning!</ModalHeader>
                        <ModalBody>
                            Length of Coupon Code or Number of Codes
                            can't be empty
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                Ok
                            </Button>{' '}
                            <Button color="secondary" onClick={toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>

                    {/*  */}
                    <br />
                    <br />
                    {generatedCodes ? <h2 className="col-12 fontgrey">Generated Codes</h2> : ""}
                    <div>
                        <ul className="container list-group generated-code-ul" >
                            {codes.map((code, index) => (
                                <li className="list-group-item generate-code-map" key={index} >
                                    <h5 className='mt-3'>{code.code}</h5></li>
                            ))}
                        </ul>
                        {generatedCodes ? <div className='mt-4 pbot'>
                            {/* Convert to CSV & Download */}
                            <CSVLink data={codes} headers={headers} filename="exported_code.csv">
                                <button className="btn btn_get btn_get_three mt-4 m-4 mbot" type="button" >Export</button>
                            </CSVLink>
                            <button
                                className='btn_get_nohover m-4 mtop'
                                // className='shadow p-2 mb-2 bg-white rounded '
                                onClick={() => window.open("https://giftcard.99minds.io/access/login", "_blank")}
                            >Import to {buttonName}</button>
                        </div> : ""}
                    </div>
                </> : ""}
            </div>
        </div >
    );
};
export default CouponGeneratorv1;