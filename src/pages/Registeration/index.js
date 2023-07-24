import React from "react";
import { useState, useEffect } from "react";
import Style from "./register.module.css";
import SelectField from "../../components/SelectField";
import InputField from "../../components/InputField";
import { Link } from "react-router-dom";
import {
  businessTpe,
  States,
  Question,
  phoneType,
  alternatePhone,
} from "../../JsonData";

const Index = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [errorConfirm, setErrorConfirm] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false);
  const [showErrorTextConfirm, setShowErrorTextConfirm] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isConfirmEmailEnabled, setIsConfirmEmailEnabled] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [cPassword, setCPassword] = useState("password");
  const [toggleName, setToggleName] = useState("Show");
  const [cToggleName, setCToggleName] = useState("Show");
  

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setToggleName("Hide");
    } else {
      setPasswordType("password");
      setToggleName("Show");
    }
  };
  const toggleCPassword = () => {
    if (cPassword === "password") {
      setCPassword("text");
      setCToggleName("Hide");
    } else {
      setCPassword("password");
      setCToggleName("Show");
    }
  };

  useEffect(() => {
    if (showErrorText && name.trim() !== "") {
      setShowErrorText(false);
    }
  }, [name, showErrorText]);
  useEffect(() => {
    if (showErrorTextConfirm && confirmEmail.trim() !== "") {
      setShowErrorTextConfirm(false);
    }
  }, [confirmEmail, showErrorTextConfirm]);
  const handleBlur = () => {
    if (name.trim() === "") {
      setError(true);
      setShowErrorText(true);
    }
  };
  const handleBlurConfirm = () => {
    if (confirmEmail.trim() === "") {
      setErrorConfirm(true);
      setShowErrorTextConfirm(true);
    }
  };
  const handleChange = (e) => {
    const enteredEmail = e.target.value;
    setName(enteredEmail);

    if (enteredEmail.trim() !== "") {
      setIsConfirmEmailEnabled(true);
    } else {
      setIsConfirmEmailEnabled(false);
    }
  };
  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
  };
 
  return (
    <div className={Style.bannerOuter}>
      <div className={Style.Bannner}>
        <div className={Style.bannerText}>
          <h2 className={Style.heading1}>FAST, EASY ORDERING STARTS HERE</h2>
          <h2 className={Style.heading2}>
            Complete our one-time registration process for fast ordering and
            free shipping*.
          </h2>
        </div>
      </div>
      <div className={Style.section2}>
        <h2 className={Style.headline}>Create an Account</h2>
        <p class={Style.fontLight}>
          Welcome to FordParts.com. Our simple one-time registration process
          will make ordering parts quick and easy. Additional benefits include:
        </p>
        <ul className={Style.listUl}>
          <li>Save vehicles by VIN for easier and more accurate searching</li>
          <li>Receive special offers and promotions via email</li>
          <li>Express checkout with stored shipping and billing details</li>
          <li>Free shipping*</li>
        </ul>
        <form action="">
          <SelectField title="Business Type" name="business_type" option={businessTpe} />
          <div className={Style.inputFLex}>
            <InputField
              title="First Name"
              name="first_name"
              type="text"
              errormessage="Please enter a first name"
            />
            <InputField
              title="Last Name"
              name="last_name"
              errormessage="Please enter a Last Name"
              type="text"
            />
          </div>
          <div className={Style.inputFLex}>
            <InputField
            name="company_name"
              title="Company Name"
              errormessage="Please enter a Company Name"
              type="text"
            />
          </div>
          <div className={Style.inputFLex}>
            <InputField
              title="Fleet Identification Number/FIN Code  (optional)"
              type="text"
              name="fin_code"
            />
          </div>
          <div className={Style.inputFLex}>
            <InputField
              title="Street Address 1"
              errormessage="Please enter a street address"
              type="text"
              name="street_address_1"
            />
          </div>
          <div className={Style.inputFLex}>
            <InputField title="Street Address 2 (Optional)" name="street_address_2" type="text" />
          </div>
          <div className={Style.gridthree}>
            <InputField
              title="City"
              errormessage="Please enter a city"
              type="text"
              name="city"
            />
            <SelectField name="State" option={States} />
            <InputField
              title="Zip Code"
              errormessage="Please enter a zip code"
              type="text"
              name="zip_code"
            />
          </div>

          <div className={Style.inputFLex} style={{ marginTop: "10px" }}>
            <div className={Style.inputFiled}>
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                id="email"
                className={error ? `${Style.error}` : ""}
                onBlur={handleBlur}
                onChange={handleChange}
                value={name}
              />
              {showErrorText && (
                <p style={{ color: "red" }}>Please enter your email address</p>
              )}
            </div>
            <div className={Style.inputFiled}>
              <label htmlFor="confirmEmail">Confirm Email Address</label>
              <br />
              <input
                type="email"
                id="confirmEmail"
                className={errorConfirm ? `${Style.error}` : ""}
                onBlur={handleBlurConfirm}
                value={confirmEmail}
                onChange={handleConfirmEmailChange}
                disabled={!isConfirmEmailEnabled}
                style={{
                  cursor: isConfirmEmailEnabled ? "auto" : "not-allowed",
                }}
              />

              {showErrorTextConfirm && (
                <p style={{ color: "red" }}>
                  Please enter your email address to confirm
                </p>
              )}
            </div>
            <div>
              <InputField
              name="password"
                title="Password"
                errormessage="Please enter a password"
                type={passwordType}
              />
              <p onClick={togglePassword} className={Style.showPassword}>
                {toggleName}
              </p>
            </div>
            <div>
              <InputField
              name="confirm_password"
                title="Confirm Password"
                errormessage="The passwords do not match."
                type={cPassword}
              />
              <p onClick={toggleCPassword} className={Style.showPassword}>
                {cToggleName}
              </p>
            </div>
            <SelectField name="Select a Security Question" option={Question} />
          </div>
          <div className={Style.inputFLex} style={{ marginTop: "10px" }}>
            <InputField
            name="your_answer"
              title="Your Answer"
              errormessage="Please submit answer to your security question"
              type="Text"
            />
          </div>
          <div className={Style.inputFLex} style={{ marginTop: "10px" }}>
            <InputField
            name="phone_number"
              title="Phone Number"
              errormessage="Please enter a phone number"
              type="Text"
            />

            <SelectField name="Phone Type" option={phoneType} />
            <InputField title="Alternate Phone Number (optional)" type="Text" name="alternate_phone"/>
            <SelectField name="Alternate Phone Type" option={alternatePhone} />
          </div>
          <h2 className={Style.headline}>Email & Cell Phone Preferences</h2>
          <p className={Style.fontLight}>
            FordParts.com will email you purchase confirmations and status
            updates for your order. In addition, we can offer you the following
            services. We will not share your email address with third parties
            for their independent use.
          </p>
          <label htmlFor="checkbox" id={Style.labelFlex}>
            <input type="checkbox" id="checkbox" value={"emailproduct"}/>
            Please email me product information, offers and incentives from Ford
            Motor Company and local Ford and Lincoln Dealerships.
          </label>
          <label htmlFor="checkbox2" id={Style.labelFlex}>
            <input type="checkbox" id="checkbox2" />
            Please notify me of periodic FordParts.com special offers by sending
            text messages, or mobile alerts. Standard text messaging and other
            rates apply. Certain services available only on participating
            carriers.
          </label>
          <label htmlFor="checkbox3" id={Style.labelFlex}>
            <input type="checkbox" id="checkbox3" />I have read and agree to the
            Fordparts.com Terms and Conditions
          </label>

          <button type="submit" className={Style.CreateAccount}>
            Create Account
          </button>
        </form>
        <Link>Privcy Policy</Link>
        <p className={Style.fontLight}>
          *Offer valid through 06/30/23 on qualifying purchases made before tax.
          Offer applies to FedEx standard shipping only, up to 40 lbs. for
          destinations within the 50 states. Guest and sponsored customers are
          ineligible for free shipping. FordParts.com reserves the right to
          change program details at any time without obligations. Customer
          information is being collected to verify offer eligibility.
        </p>
      </div>
      
    </div>
  );
};

export default Index;
