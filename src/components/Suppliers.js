import React from "react";
import "./Suppliers.css";
import Sidebar from "./Sidebar";
export default function Suppliers() {
  return (
    <div>
      <div className='suppliers  '>
        <h2>Your Suppliers</h2>
        <div className='supplier-btn'>
          <Sidebar/>
        </div>
      </div>
      <div className='supplier-datas'>
        <p>daats here</p>
      </div>
    </div>
  );
}
