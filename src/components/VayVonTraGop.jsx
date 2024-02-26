import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../css/style.css';
import  { useState } from 'react';
const VayVonTraGop = (props) => {
  const [initialCapital, setInitialCapital] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [totalCapitalAndInterest, setTotalCapitalAndInterest] = useState('');
  const [X, setX] = useState('');
  const [numberOfPeriods, setNumberOfPeriods] = useState(null);

  const calculateNumberOfPeriods = () => {
    const initialCapitalValue = parseFloat(initialCapital);
    const interestRateValue = parseFloat(interestRate)/100;
    const totalCapitalAndInterestValue = parseFloat(totalCapitalAndInterest);
    const XValue = parseFloat(X);
    if (!isNaN(XValue) &&!isNaN(initialCapitalValue) && !isNaN(interestRateValue) && !isNaN(totalCapitalAndInterestValue)) {
      const periods =initialCapitalValue*Math.pow((1+interestRateValue),totalCapitalAndInterestValue)-XValue*((Math.pow(1+interestRateValue,totalCapitalAndInterestValue )-1)/interestRateValue)
      setNumberOfPeriods(periods);
    } else {
      setNumberOfPeriods(null);
    }
  };


  const [initialCapital2, setInitialCapital2] = useState('');
  const [interestRate2, setInterestRate2] = useState('');
  const [totalCapitalAndInterest2, setTotalCapitalAndInterest2] = useState('');
  const [totalCapitalAndInterestMonth2, setTotalCapitalAndInterestMonth2] = useState('');
  const [numberOfPeriods2, setNumberOfPeriods2] = useState(null);

  const calculateNumberOfPeriods2 = () => {
    const initialCapitalValue2 = parseFloat(initialCapital2);
    const interestRateValue2 = parseFloat(interestRate2);
    const totalCapitalAndInterestValue2 = parseFloat(totalCapitalAndInterest2)/100;
    const totalCapitalAndInterestValueMonth2 = parseFloat(totalCapitalAndInterestMonth2);
    if (!isNaN(initialCapitalValue2) && !isNaN(totalCapitalAndInterestValueMonth2) &&!isNaN(interestRateValue2) && !isNaN(totalCapitalAndInterestValue2)) {
      const periods =(interestRateValue2+totalCapitalAndInterestValueMonth2*((Math.pow(1+totalCapitalAndInterestValue2,initialCapitalValue2)-1)/totalCapitalAndInterestValue2))/(Math.pow(1+totalCapitalAndInterestValue2,initialCapitalValue2))
      setNumberOfPeriods2(periods);
    } else {
      setNumberOfPeriods2(null);
    }
  };
  
  const [initialCapital3, setInitialCapital3] = useState('');
  const [interestRate3, setInterestRate3] = useState('');
  const [totalCapitalAndInterest3, setTotalCapitalAndInterest3] = useState('');
  const [totalCapitalAndInterestMonth3, setTotalCapitalAndInterestMonth3] = useState('');
  const [numberOfPeriods3, setNumberOfPeriods3] = useState(null);

  const calculateNumberOfPeriods3 = () => {
    const initialCapitalValue3 = parseFloat(initialCapital3);
    const interestRateValue3 = parseFloat(interestRate3);
    const totalCapitalAndInterestValue3 = parseFloat(totalCapitalAndInterest3)/100;
    const totalCapitalAndInterestValueMonth3 = parseFloat(totalCapitalAndInterestMonth3);
    if (!isNaN(initialCapitalValue3) && !isNaN(totalCapitalAndInterestValueMonth3) &&!isNaN(interestRateValue3) && !isNaN(totalCapitalAndInterestValue3)) {
      const periods =(totalCapitalAndInterestValue3*(totalCapitalAndInterestValueMonth3*Math.pow(1+totalCapitalAndInterestValue3,initialCapitalValue3)-interestRateValue3))/(Math.pow(1+totalCapitalAndInterestValue3,initialCapitalValue3)-1)
      setNumberOfPeriods3(periods);
    } else {
      setNumberOfPeriods3(null);
    }
  };

  const [initialCapital4, setInitialCapital4] = useState('');
const [interestRate4, setInterestRate4] = useState('');
const [totalCapitalAndInterest4, setTotalCapitalAndInterest4] = useState('');
const [totalCapitalAndInterestMonth4, setTotalCapitalAndInterestMonth4] = useState('');
const [numberOfPeriods4, setNumberOfPeriods4] = useState(null);

const calculateNumberOfPeriods4 = () => {
  const initialCapitalValue4 = parseFloat(initialCapital4);
  const interestRateValue4 = parseFloat(interestRate4);
  const totalCapitalAndInterestValue4 = parseFloat(totalCapitalAndInterest4) / 100;
  const totalCapitalAndInterestValueMonth4 = parseFloat(totalCapitalAndInterestMonth4);
  if (!isNaN(initialCapitalValue4) && !isNaN(totalCapitalAndInterestValueMonth4) && !isNaN(interestRateValue4) && !isNaN(totalCapitalAndInterestValue4)) {
    const absoluteValue = Math.abs((interestRateValue4 * totalCapitalAndInterestValue4 - initialCapitalValue4) / (totalCapitalAndInterestValueMonth4 * totalCapitalAndInterestValue4 - initialCapitalValue4));
      const m = Math.log(absoluteValue) / Math.log(1 + totalCapitalAndInterestValue4);
   
    setNumberOfPeriods4(m);
  } else {
    setNumberOfPeriods4(null);
  }
};

  const clearInputs = () => {
    setInitialCapital('');
    setInterestRate('');
    setTotalCapitalAndInterest('');
    setX('');
    setNumberOfPeriods(null);
  };
  const clearInputs2 = () => {
    setInitialCapital2('');
    setInterestRate2('');
    setTotalCapitalAndInterest2('');
    setTotalCapitalAndInterestMonth2('');
    setNumberOfPeriods2(null);
  };
  const clearInputs3 = () => {
    setInitialCapital3('');
    setInterestRate3('');
    setTotalCapitalAndInterest3('');
    setTotalCapitalAndInterestMonth3('');
    setNumberOfPeriods3(null);
  };
  const clearInputs4 = () => {
    setInitialCapital4('');
    setInterestRate4('');
    setTotalCapitalAndInterest4('');
    setTotalCapitalAndInterestMonth4('');
    setNumberOfPeriods4(null);
  };
  return (
    <div>

      <div className="recentCustomers2">
        <div >
          <p className="cardHeaderText"> THÔNG TIN KHÁCH HÀNG</p>
        </div>
        <div className="rowFlex">
          <div className="marginLeft">
            <p className="margin">Họ và tên</p>
            <input className="input" />
          </div>
          <div className="marginLeft">
            <p className="margin">Giới tính</p>
            <select className="inputSelect" id="genderSelect">
              <option value="nam">Nam</option>
              <option value="nu">Nữ</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================ Order Details List ================= */}
      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>I. TÍNH SỐ TIỀN CÒN NỢ </h2>
            <a href="#" className="btn" onClick={clearInputs}>
              Clear
            </a>
          </div>

          <div>
            <div className="rowInput">
              <h2>Nhập số tiền vay</h2>
              <input type="number" value={initialCapital} onChange={(e) => setInitialCapital(e.target.value)} />
            </div>
            <div className="rowInput">
              <h2>Nhập số % lãi suất</h2>
              <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            </div>
            <div className="rowInput">
              <h2>Nhập số kỳ hạn</h2>
              <input type="number" value={totalCapitalAndInterest} onChange={(e) => setTotalCapitalAndInterest(e.target.value)} />
            </div>

            <div className="rowInput">
              <h2>Nhập số tiền trả góp/ tháng</h2>
              <input type="number" value={X} onChange={(e) => setX(e.target.value)} />
            </div>
          </div>
          <div className="result">
          <div className="resultRow">
          <h2 style={{fontWeight:'bold'}}>Số tiền còn nợ là : </h2>
            {numberOfPeriods !== null && (
              <p className="resultNumber">  {numberOfPeriods.toFixed(2)}</p>
            )}
            </div>
           <button onClick={calculateNumberOfPeriods}>Tính</button>
          </div>
        </div>

        {/* ================= New Customers ================ */}
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>II. TÍNH SỐ TIỀN VAY</h2>
            <a href="#" className="btn" onClick={clearInputs2}>
              Clear
            </a>
          </div>

          <div>
            <div className="rowInput">
              <h2>NHẬP SỐ KỲ HẠN</h2>
              <input type="number" value={initialCapital2} onChange={(e) => setInitialCapital2(e.target.value)} />
            </div>
            <div className="rowInput">
              <h2>Nhập số tiền còn nợ</h2>
              <input type="number" value={interestRate2} onChange={(e) => setInterestRate2(e.target.value)} />
            </div>
            <div className="rowInput">
              <h2>Nhập số % lãi suất</h2>
              <input type="number" value={totalCapitalAndInterest2} onChange={(e) => setTotalCapitalAndInterest2(e.target.value)} />
            </div>
            <div className="rowInput">
              <h2>Nhập tiền trả góp/tháng</h2>
              <input type="number" value={totalCapitalAndInterestMonth2} onChange={(e) => setTotalCapitalAndInterestMonth2(e.target.value)} />
            </div>

          </div>
          <div className="result">
          <div className="resultRow">
          <h2 style={{fontWeight:'bold'}}>Số tiền vay là : </h2>
            {numberOfPeriods2 !== null && (
              <p className="resultNumber">{numberOfPeriods2.toFixed(2)}</p>
            )}
            </div>
           <button onClick={calculateNumberOfPeriods2}>Tính</button>
          </div>
        </div>
 {/* ================= New Customers ================ */}
 <div className="recentOrders">
          <div className="cardHeader">
            <h2>III. TÍNH SỐ TIỀN TRẢ GÓP/THÁNG</h2>
            <a href="#" className="btn" onClick={clearInputs3}>
              Clear
            </a>
          </div>

          <div>
            <div className="rowInput">
              <h2>Nhập số kỳ hạn</h2>
              <input type="number" value={initialCapital3} onChange={(e) => setInitialCapital3(e.target.value)} />
            </div>
            <div className="rowInput">
              <h2>Nhập số tiền còn nợ</h2>
              <input type="number" value={interestRate3} onChange={(e) => setInterestRate3(e.target.value)} />
            </div>
            <div className="rowInput">
              <h2>Nhập số % lãi suất</h2>
              <input type="number" value={totalCapitalAndInterest3} onChange={(e) => setTotalCapitalAndInterest3(e.target.value)} />
            </div>
            <div className="rowInput">
              <h2>Nhập số tiền vay</h2>
              <input type="number" value={totalCapitalAndInterestMonth3} onChange={(e) => setTotalCapitalAndInterestMonth3(e.target.value)} />
            </div>

          </div>
          <div className="result">
          <div className="resultRow">
          <h2 style={{fontWeight:'bold'}}>Số tiền trả góp/tháng là : </h2>
            {numberOfPeriods3 !== null && (
              <p className="resultNumber">{numberOfPeriods3.toFixed(2)}</p>
            )}
            </div>
           <button onClick={calculateNumberOfPeriods3}>Tính</button>
          </div>
        </div>


        <div className="recentOrders">
          <div className="cardHeader">
            <h2>IV. TÍNH KỲ HẠN</h2>
            <a href="#" className="btn" onClick={clearInputs4}>
              Clear
            </a>
          </div>

          <div>
            <div className="rowInput">
              <h2>Nhập số tiền trả góp/tháng</h2>
              <input type="number" value={initialCapital4} onChange={(e) => setInitialCapital4(e.target.value)} />
            </div>
            <div className="rowInput">
              <h2>Nhập số tiền còn nợ</h2>
              <input type="number" value={interestRate4} onChange={(e) => setInterestRate4(e.target.value)} />
            </div>
            <div className="rowInput">
              <h2>Nhập số % lãi suất</h2>
              <input type="number" value={totalCapitalAndInterest4} onChange={(e) => setTotalCapitalAndInterest4(e.target.value)} />
            </div>
            <div className="rowInput">
              <h2>Nhập số tiền vay</h2>
              <input type="number" value={totalCapitalAndInterestMonth4} onChange={(e) => setTotalCapitalAndInterestMonth4(e.target.value)} />
            </div>

          </div>
          <div className="result">
          <div className="resultRow">
          <h2 style={{fontWeight:'bold'}}>Số kỳ hạn là : </h2>
            {numberOfPeriods4 !== null && (
              <p className="resultNumber">{numberOfPeriods4.toFixed(2)}</p>
            )}
            </div>
           <button onClick={calculateNumberOfPeriods4}>Tính</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VayVonTraGop;
