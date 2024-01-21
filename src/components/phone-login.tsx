import { useRef, useState } from "react";
import OtpInput from "./otp-input";

const PhoneOtpForm = () => {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handlePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const regex = /[^0-9]/g;

    if (!regex.test(phoneNumber) && phoneNumber.length !== 10) {
      console.log("Phone number is invalid");
    } else {
      console.log("Phone number is valid");
      setShowOtp(true);
    }

    // call the backend api to send otp to user's phone

    // set showOtp to true
  };

  const onOtpSubmit = () => {
    console.log("OTP submitted");
    // call the backend api to verify otp
    // if otp is valid, call the onOtpSubmit callback function
  };

  return (
    <div>
      {!showOtp ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type='text'
            name='phone'
            placeholder='Phone number'
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter an OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
