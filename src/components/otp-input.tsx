import { ChangeEvent, KeyboardEvent, MouseEventHandler, useEffect, useRef, useState } from "react";

interface Props{
    length: number;
    onOtpSubmit: MouseEventHandler;
}

const OtpInput = ({length = 4, onOtpSubmit}: Props) => {

  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if(inputRefs.current[0])
      inputRefs.current[0].focus();
  });

  const handleChange = (i: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if(isNaN(parseInt(value)))
      return;
    const newOtp = 
  }

  const handleClick = (i: number) => {
    console.log(i);
  }

  const handleKeyDown = (i: number, e: KeyboardEvent) => {
    console.log(i, e);
  }

  return (
    <div>
      {
        otp.map((value, index) => {
          return (
            <input
              key={index}
              ref={(input) => inputRefs.current[index] = input}
              type='text'
              name='otp'
              value={value}
              onChange={(e) => handleChange(index, e)}
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="otp-input"
            />
          )
        })
      }
    </div>
    
  )
}

export default OtpInput