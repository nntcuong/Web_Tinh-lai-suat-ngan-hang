import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../css/style.css';
import { useState } from 'react';
const LaiKep = (props) => {

  const [initialCapital, setInitialCapital] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [totalCapitalAndInterest, setTotalCapitalAndInterest] = useState('');
  const [numberOfPeriods, setNumberOfPeriods] = useState(null);

  const calculateNumberOfPeriods = () => {
    const initialCapitalValue = parseFloat(initialCapital);
    const interestRateValue = parseFloat(interestRate);
    const totalCapitalAndInterestValue = parseFloat(totalCapitalAndInterest);

    if (!isNaN(initialCapitalValue) && !isNaN(interestRateValue) && !isNaN(totalCapitalAndInterestValue)) {

      const q = 1 + totalCapitalAndInterestValue / 100;
      const p = initialCapitalValue / interestRateValue;
        const n =Math.log(p) / Math.log(q); 
       const rounded_n=Math.round(n);
        setNumberOfPeriods(rounded_n);

    } else {
      setNumberOfPeriods(null);
    }
  };
  const clearInputs = () => {
    setInitialCapital('');
    setInterestRate('');
    setTotalCapitalAndInterest('');
    setNumberOfPeriods(null);
  };

  const [initialCapital2, setInitialCapital2] = useState('');
  const [interestRate2, setInterestRate2] = useState('');
  const [totalCapitalAndInterest2, setTotalCapitalAndInterest2] = useState('');
  const [numberOfPeriods2, setNumberOfPeriods2] = useState(null);

  const calculateNumberOfPeriods2 = () => {
    const initialCapitalValue2 = parseFloat(initialCapital2);
    const interestRateValue2 = parseFloat(interestRate2);
    const totalCapitalAndInterestValue2 = parseFloat(totalCapitalAndInterest2);

    if (!isNaN(initialCapitalValue2) && !isNaN(interestRateValue2) && !isNaN(totalCapitalAndInterestValue2)) {
      const periods = initialCapitalValue2 * Math.pow(1 + interestRateValue2/100, totalCapitalAndInterestValue2);
      setNumberOfPeriods2(periods);
    } else {
      setNumberOfPeriods2(null);
    }
  };



  const [initialCapital4, setInitialCapital4] = useState('');
  const [interestRate4, setInterestRate4] = useState('');
  const [totalCapitalAndInterest4, setTotalCapitalAndInterest4] = useState('');
  const [numberOfPeriods4, setNumberOfPeriods4] = useState(null);

  const calculateNumberOfPeriods4 = () => {
    const initialCapitalValue4 = parseFloat(initialCapital4);
    const interestRateValue4 = parseFloat(interestRate4);
    const totalCapitalAndInterestValue4 = parseFloat(totalCapitalAndInterest4);

    if (!isNaN(initialCapitalValue4) && !isNaN(interestRateValue4) && !isNaN(totalCapitalAndInterestValue4)) {
      const q = 1 + interestRateValue4 / 100;
      const A = initialCapitalValue4 / Math.pow(q, totalCapitalAndInterestValue4);
      const roundedA = Math.round(A);
      setNumberOfPeriods4(roundedA);
    } else {
      setNumberOfPeriods4(null);
    }
  };

  const [initialCapital3, setInitialCapital3] = useState('');
  const [interestRate3, setInterestRate3] = useState('');
  const [totalCapitalAndInterest3, setTotalCapitalAndInterest3] = useState('');
  const [numberOfPeriods3, setNumberOfPeriods3] = useState(null);

  const calculateNumberOfPeriods3 = () => {
    const initialCapitalValue3 = parseFloat(initialCapital3);
    const interestRateValue3 = parseFloat(interestRate3);
    const totalCapitalAndInterestValue3 = parseFloat(totalCapitalAndInterest3);

    if (!isNaN(initialCapitalValue3) && !isNaN(interestRateValue3) && !isNaN(totalCapitalAndInterestValue3)) {
      const q=(Math.pow(initialCapitalValue3/interestRateValue3, 1/totalCapitalAndInterestValue3)-1)*100;
      
      setNumberOfPeriods3(q);
    } else {
      setNumberOfPeriods3(null);
    }
  };
  const clearInputs2 = () => {
    setInitialCapital2('');
    setInterestRate2('');
    setTotalCapitalAndInterest2('');
    setNumberOfPeriods2(null);
  };
  const clearInputs3 = () => {
    setInitialCapital4('');
    setInterestRate4('');
    setTotalCapitalAndInterest4('');
    setNumberOfPeriods4(null);
  };
  const clearInputs4 = () => {
    setInitialCapital3('');
    setInterestRate3('');
    setTotalCapitalAndInterest3('');
    setNumberOfPeriods3(null);
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
        
        {/* ================= New Customers ================ */}
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>I. Tính tổng</h2>
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
              <p>Nhập số % lãi suất</p>
              <input type="number" value={interestRate2} onChange={(e) => setInterestRate2(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số kỳ hạn</p>
              <input type="number" value={totalCapitalAndInterest2} onChange={(e) => setTotalCapitalAndInterest2(e.target.value)} />
            </div>

          </div>
          <div className="result">
            <div className="resultRow">
              <p>Tổng vốn và lãi : </p>
              {numberOfPeriods2 !== null && (
                <p className="resultNumber">  {numberOfPeriods2.toFixed(2)}</p>
              )}
            </div>
            <button onClick={calculateNumberOfPeriods2}>Tính</button>
          </div>
        </div>

        <div className="recentOrders">
          <div className="cardHeader">
            <h2>II. Tính gốc</h2>
            <a href="#" className="btn" onClick={clearInputs3}>
              Clear
            </a>
          </div>

          <div>
            <div className="rowInput">
              <p>Nhập tổng vốn và lãi</p>
              <input type="number" value={initialCapital4} onChange={(e) => setInitialCapital4(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập lãi suất</p>
              <input type="number" value={interestRate4} onChange={(e) => setInterestRate4(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập kỳ hạn</p>
              <input type="number" value={totalCapitalAndInterest4} onChange={(e) => setTotalCapitalAndInterest4(e.target.value)} />
            </div>

          </div>
          <div className="result">
            <div className="resultRow">
              <p>Số tiền vốn là : </p>
              {numberOfPeriods4 !== null && (
                <p className="resultNumber">  {numberOfPeriods4.toFixed(2)}</p>
              )}
            </div>
            <button onClick={calculateNumberOfPeriods4}>Tính</button>
          </div>
        </div>


        <div className="recentOrders">
          <div className="cardHeader">
            <h2>III. Tính kỳ hạn</h2>
            <a href="#" className="btn" onClick={clearInputs}>
              Clear
            </a>
          </div>

          <div>
            <div className="rowInput">
              <p>Nhập số tiền nhận được</p>
              <input type="number" value={initialCapital} onChange={(e) => setInitialCapital(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số tiền ban đầu</p>
              <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập lãi suất</p>
              <input type="number" value={totalCapitalAndInterest} onChange={(e) => setTotalCapitalAndInterest(e.target.value)} />
            </div>

          </div>
          <div className="result">
            <div className="resultRow">
              <p>Số kỳ hạn là : </p>
              {numberOfPeriods !== null && (
                <p className="resultNumber">  {numberOfPeriods.toFixed(2)}</p>
              )}
            </div>
            <button onClick={calculateNumberOfPeriods}>Tính</button>
          </div>
        </div>


        <div className="recentOrders">
          <div className="cardHeader">
            <h2>IV. Tính lãi suất</h2>
            <a href="#" className="btn" onClick={clearInputs4}>
              Clear
            </a>
          </div>

          <div>
            <div className="rowInput">
              <p>Nhập số tiền vốn và lãi</p>
              <input type="number" value={initialCapital3} onChange={(e) => setInitialCapital3(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số tiền vốn ban đầu</p>
              <input type="number" value={interestRate3} onChange={(e) => setInterestRate3(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số kỳ hạn</p>
              <input type="number" value={totalCapitalAndInterest3} onChange={(e) => setTotalCapitalAndInterest3(e.target.value)} />
            </div>

          </div>
          <div className="result">
            <div className="resultRow">
              <p>Lãi suất là : </p>
              {numberOfPeriods3 !== null && (
                <p className="resultNumber">  {numberOfPeriods3.toFixed(2)}</p>
              )}
            </div>
            <button onClick={calculateNumberOfPeriods3}>Tính</button>
          </div>
        </div>


      </div>
    </div>
  );
}
export default LaiKep