import React from "react";
import InputUI from "./Input";
import CountryUI from "./CountryInput";
import './Suppliers.css'
export default function SidebarContent() {
  return (
    <div>
      <div className='supplier-data-import'>
        <h2>Add New Supplier</h2>
        <div className='input-area'>
          <InputUI label='Supplier Company Name' />
          <InputUI label='Supplier Company Address' />
          <InputUI label='Supplier Company Name' />
          <div className='row'>
            <div className='col-6'>
              <InputUI label='Supplier Country' />
            </div>
            <div className='col-6'>
              <InputUI label='Supplier City' />
            </div>
            <CountryUI />
          </div>
        </div>
      </div>
    </div>
  );
}
