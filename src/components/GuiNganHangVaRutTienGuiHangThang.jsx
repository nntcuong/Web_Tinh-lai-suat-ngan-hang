import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../css/style.css';
import  { useState } from 'react';
const GuiNganHangVaRutTienGuiHangThang = (props) => {
  const [initialCapital, setInitialCapital] = useState('');
  const [initialCapitalCap, setInitialCapitalCap] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [totalCapitalAndInterest, setTotalCapitalAndInterest] = useState('');
  const [numberOfPeriods, setNumberOfPeriods] = useState(null);

  const calculateNumberOfPeriods = () => {
    const initialCapitalValue = parseFloat(initialCapital);
    const initialCapitalValueCap = parseFloat(initialCapitalCap);
    const interestRateValue = parseFloat(interestRate)/100;
    const totalCapitalAndInterestValue = parseFloat(totalCapitalAndInterest);

    if (!isNaN(initialCapitalValue) &&!isNaN(initialCapitalValueCap) && !isNaN(interestRateValue) && !isNaN(totalCapitalAndInterestValue)) {
      const periods = initialCapitalValue*Math.pow((1+interestRateValue),totalCapitalAndInterestValue)-initialCapitalValueCap*(((Math.pow(1+interestRateValue,totalCapitalAndInterestValue))-1)/interestRateValue)
      setNumberOfPeriods(periods);
    } else {
      setNumberOfPeriods(null);
    }
  };

  const clearInputs = () => {
    setInitialCapital('');
    setInterestRate('');
    setTotalCapitalAndInterest('');
    setInitialCapitalCap('');
    setNumberOfPeriods(null);
  };
  const clearInputs2 = () => {
    setInitialCapital2('');
    setInterestRate2('');
    setTotalCapitalAndInterest2('');
    setTotalCapitalAndInterestX2('');
    setNumberOfPeriods2(null);
  };

  
  const [initialCapital2, setInitialCapital2] = useState('');
  const [interestRate2, setInterestRate2] = useState('');
  const [totalCapitalAndInterest2, setTotalCapitalAndInterest2] = useState('');
  const [totalCapitalAndInterestX2, setTotalCapitalAndInterestX2] = useState('');
  const [numberOfPeriods2, setNumberOfPeriods2] = useState(null);

  const calculateNumberOfPeriods2 = () => {
    const initialCapitalValue2 = parseFloat(initialCapital2);
    const interestRateValue2 = parseFloat(interestRate2)/100;
    const totalCapitalAndInterestValue2 = parseFloat(totalCapitalAndInterest2);
    const totalCapitalAndInterestValueX2 = parseFloat(totalCapitalAndInterestX2);
    if (!isNaN(initialCapitalValue2) &&!isNaN(totalCapitalAndInterestValueX2) && !isNaN(interestRateValue2) && !isNaN(totalCapitalAndInterestValue2)) {
      const periods = (initialCapitalValue2*Math.pow(1+interestRateValue2,totalCapitalAndInterestValue2)-totalCapitalAndInterestValueX2)*(interestRateValue2/(Math.pow(1+interestRateValue2,totalCapitalAndInterestValue2)-1))
      setNumberOfPeriods2(periods);
    } else {
      setNumberOfPeriods2(null);
    }
  };
  const clearInputs3 = () => {
    setInitialCapital3('');
    setInterestRate3('');
    setTotalCapitalAndInterest3('');
    setNumberOfPeriods3(null);
  };
  const [initialCapitalX3, setInitialCapitalX3] = useState('');
  const [initialCapital3, setInitialCapital3] = useState('');
  const [interestRate3, setInterestRate3] = useState('');
  const [totalCapitalAndInterest3, setTotalCapitalAndInterest3] = useState('');
  const [numberOfPeriods3, setNumberOfPeriods3] = useState(null);

  const calculateNumberOfPeriods3 = () => {
    const initialCapitalValueX3 = parseFloat(initialCapitalX3);
    const initialCapitalValue3 = parseFloat(initialCapital3);
    const interestRateValue3 = parseFloat(interestRate3);
    const totalCapitalAndInterestValue3 = parseInt(totalCapitalAndInterest3)/100;

    if (!isNaN(initialCapitalValueX3) &&!isNaN(initialCapitalValue3) && !isNaN(interestRateValue3) && !isNaN(totalCapitalAndInterestValue3)) {
      const n=Math.log((initialCapitalValueX3*totalCapitalAndInterestValue3-initialCapitalValue3)/(interestRateValue3*totalCapitalAndInterestValue3-initialCapitalValue3))/Math.log(1+totalCapitalAndInterestValue3);
    
      const roundedN = Math.round(n);
      setNumberOfPeriods3(roundedN);
    } else {
      setNumberOfPeriods3(null);
    }
  };
  const [initialCapitalX4, setInitialCapitalX4] = useState('');
const [initialCapital4, setInitialCapital4] = useState('');
const [interestRate4, setInterestRate4] = useState('');
const [totalCapitalAndInterest4, setTotalCapitalAndInterest4] = useState('');
const [numberOfPeriods4, setNumberOfPeriods4] = useState(null);

const calculateNumberOfPeriods4 = () => {
  const initialCapitalValueX4 = parseFloat(initialCapitalX4);
  const initialCapitalValue4 = parseFloat(initialCapital4);
  const interestRateValue4 = parseFloat(interestRate4);
  const totalCapitalAndInterestValue4 = parseInt(totalCapitalAndInterest4) / 100;

  if (!isNaN(initialCapitalValueX4) && !isNaN(initialCapitalValue4) && !isNaN(interestRateValue4) && !isNaN(totalCapitalAndInterestValue4)) {
    const n = (initialCapitalValueX4+initialCapitalValue4*((Math.pow(1+totalCapitalAndInterestValue4,interestRateValue4)-1)/totalCapitalAndInterestValue4))/(Math.pow(1+totalCapitalAndInterestValue4,interestRateValue4))
    setNumberOfPeriods4(n);
  } else {
    setNumberOfPeriods4(null);
  }
};

  const clearInputs4 = () => {
    setInitialCapitalX4('');
    setInitialCapital4('');
    setInterestRate4('');
    setTotalCapitalAndInterest4('');
    setNumberOfPeriods4(null);
  };
  return (
    <div>

      <div className="recentCustomers2">
        <div >
          <p className="cardHeaderText"> Thông tin khách hàng</p>
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
            <h2>I. Tính số tiền còn lại</h2>
            <a href="#" className="btn" onClick={clearInputs}>
              Clear
            </a>
          </div>

          <div>
            <div className="rowInput">
              <p>Nhập số vốn ban dầu</p>
              <input type="number" value={initialCapital} onChange={(e) => setInitialCapital(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số tiền rút</p>
              <input type="number" value={initialCapitalCap} onChange={(e) => setInitialCapitalCap(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập lãi suất</p>
              <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập kỳ hạn</p>
              <input type="number" value={totalCapitalAndInterest} onChange={(e) => setTotalCapitalAndInterest(e.target.value)} />
            </div>

          </div>
          <div className="result">
          <div className="resultRow">
          <p>Số tiền còn lại là : </p>
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
            <h2>II. Tính số tiền rút</h2>
            <a href="#" className="btn" onClick={clearInputs2}>
              Clear
            </a>
          </div>

          <div>
            <div className="rowInput">
              <p>Nhập số vốn ban đầu</p>
              <input type="number" value={initialCapital2} onChange={(e) => setInitialCapital2(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập lãi suất</p>
              <input type="number" value={interestRate2} onChange={(e) => setInterestRate2(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số kỳ hạn</p>
              <input type="number" value={totalCapitalAndInterest2} onChange={(e) => setTotalCapitalAndInterest2(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số tiền còn lại</p>
              <input type="number" value={totalCapitalAndInterestX2} onChange={(e) => setTotalCapitalAndInterestX2(e.target.value)} />
            </div>

          </div>
          <div className="result">
          <div className="resultRow">
          <p>Số tiền rút là : </p>
            {numberOfPeriods2 !== null && (
              <p className="resultNumber">  {numberOfPeriods2.toFixed(2)}</p>
            )}
            </div>
           <button onClick={calculateNumberOfPeriods2}>Tính</button>
          </div>
        </div>

        <div className="recentOrders">
          <div className="cardHeader">
            <h2>III. Tính số kỳ hạn</h2>
            <a href="#" className="btn" onClick={clearInputs3}>
              Clear
            </a>
          </div>

          <div>
          <div className="rowInput">
              <p>Nhập số tiền còn lại</p>
              <input type="number" value={initialCapitalX3} onChange={(e) => setInitialCapitalX3(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số tiền khách rút ra hàng tháng</p>
              <input type="number" value={initialCapital3} onChange={(e) => setInitialCapital3(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số tiền ban đầu</p>
              <input type="number" value={interestRate3} onChange={(e) => setInterestRate3(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập % lãi suất</p>
              <input type="number" value={totalCapitalAndInterest3} onChange={(e) => setTotalCapitalAndInterest3(e.target.value)} />
            </div>

          </div>
          <div className="result">
          <div className="resultRow">
          <p>Số kỳ hạn là : </p>
            {numberOfPeriods3 !== null && (
              <p className="resultNumber">  {numberOfPeriods3.toFixed(2)}</p>
            )}
            </div>
           <button onClick={calculateNumberOfPeriods3}>Tính</button>
          </div>
        </div>


        <div className="recentOrders">
          <div className="cardHeader">
            <h2>IV. Tính số vốn ban dầun</h2>
            <a href="#" className="btn" onClick={clearInputs4}>
              Clear
            </a>
          </div>

          <div>
          <div className="rowInput">
              <p>Nhập số tiền còn lại</p>
              <input type="number" value={initialCapitalX4} onChange={(e) => setInitialCapitalX4(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số tiền khách rút ra hàng tháng</p>
              <input type="number" value={initialCapital4} onChange={(e) => setInitialCapital4(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số kỳ hạn</p>
              <input type="number" value={interestRate4} onChange={(e) => setInterestRate4(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập % lãi suất</p>
              <input type="number" value={totalCapitalAndInterest4} onChange={(e) => setTotalCapitalAndInterest4(e.target.value)} />
            </div>

          </div>
          <div className="result">
          <div className="resultRow">
          <p>Số vốn ban đầu là : </p>
            {numberOfPeriods4 !== null && (
              <p className="resultNumber">  {numberOfPeriods4.toFixed(2)}</p>
            )}
            </div>
           <button onClick={calculateNumberOfPeriods4}>Tính</button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default GuiNganHangVaRutTienGuiHangThang;
