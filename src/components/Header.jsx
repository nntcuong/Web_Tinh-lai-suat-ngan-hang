import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../css/style.css';

function Header() {
  return (
   
      <ul>
        <li>
          <Link to="/" className='nav-link'>
            
            <span style={{ fontWeight: 'bold', fontSize: '2.5em',marginTop:'25px' }} >LÃI SUẤT NGÂN HÀNG</span>
          </Link>
        </li>
        <li>
          <Link to="/LaiDon" className='nav-link'>
            <span className="title">
              1. LÃI ĐƠN
            </span>
          </Link>
        </li>
        <li>
          <Link to="/LaiKep" className='nav-link'>
            <span className="title">
              2. LÃI KÉP
            </span>
          </Link>
        </li>
        <li>
          <Link to="/TienGuiHangThang" className='nav-link'>
            <span className="title">
              3. TIỀN GỬI HÀNG THÁNG
            </span>
          </Link>
        </li>
        <li>
          <Link to="/GuiNganHangVaRutTienGuiHangThang" className='nav-link'>
            <span className="title">
              4. GỬI NGÂN HÀNG VÀ RÚT TIỀN GỬI HÀNG THÁNG
            </span>
          </Link>
        </li>
        <li>
          <Link to="/VayVonTraGop" className='nav-link'>
            <span className="title">
              5. VAY VỐN TRẢ GÓP
            </span>
          </Link>
        </li>
        <li>
          <Link to="/LaiKepLienTuc" className='nav-link'>
            <span className="title">
              6. LÃI KÉP LIÊN TỤC
            </span>
          </Link>
        </li>
      </ul>
    
  );
}

export default Header;
