import React from 'react';
import { FiAlertCircle } from "react-icons/fi";

const CustomAlertBox = ({ alertText }) => {
  return (
    <div className="row" style={{ border: '1px solid rgb(233,233,233)' }}>
      <div style={{ width: 50, backgroundColor: 'red', padding: 10 }} className="text-center">
        <FiAlertCircle style={{ color: 'white' }} />
      </div>
      <div style={{ width: 'calc(100% - 55px)', padding: 10 }} className="fw300">
        {alertText}
      </div>
      <div style={{ width: 5, backgroundColor: 'red' }}></div>
    </div>
  );
};

export default CustomAlertBox;