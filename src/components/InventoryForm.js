import React, { useState } from 'react';
import './InventoryForm.css'; // Import updated CSS

const InventoryForm = ({ addItem }) => {
  const [serialNo, setSerialNo] = useState('');
  const [date, setDate] = useState('');
  const [fromWhere, setFromWhere] = useState('');
  const [indexNo, setIndexNo] = useState('');
  const [itemNo, setItemNo] = useState('');
  const [name, setName] = useState('');
  const [causeOfConsumable, setCauseOfConsumable] = useState('');
  const [consumableDate, setConsumableDate] = useState('');
  const [balance, setBalance] = useState('');
  const [remark, setRemark] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({
      serialNo,
      date,
      fromWhere,
      indexNo,
      itemNo,
      name,
      causeOfConsumable,
      consumableDate,
      balance,
      remark
    });
    setSerialNo('');
    setDate('');
    setFromWhere('');
    setIndexNo('');
    setItemNo('');
    setName('');
    setCauseOfConsumable('');
    setConsumableDate('');
    setBalance('');
    setRemark('');
  };

  return (
    <form className="inventory-form" onSubmit={handleSubmit}>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Date</th>
            <th>From Where</th>
            <th>Index No</th>
            <th>Item No</th>
            <th>Name of Item</th>
            <th>Cause of Consumable</th>
            <th>Consumable Date</th>
            <th>Balance</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" value={serialNo} onChange={(e) => setSerialNo(e.target.value)} required /></td>
            <td><input type="date" value={date} onChange={(e) => setDate(e.target.value)} required /></td>
            <td><input type="text" value={fromWhere} onChange={(e) => setFromWhere(e.target.value)} required /></td>
            <td><input type="text" value={indexNo} onChange={(e) => setIndexNo(e.target.value)} required /></td>
            <td><input type="text" value={itemNo} onChange={(e) => setItemNo(e.target.value)} required /></td>
            <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} required /></td>
            <td><input type="text" value={causeOfConsumable} onChange={(e) => setCauseOfConsumable(e.target.value)} required /></td>
            <td><input type="date" value={consumableDate} onChange={(e) => setConsumableDate(e.target.value)} required /></td>
            <td><input type="number" value={balance} onChange={(e) => setBalance(e.target.value)} required /></td>
            <td><input type="text" value={remark} onChange={(e) => setRemark(e.target.value)} /></td>
          </tr>
        </tbody>
      </table>
      <button className="submit-btn" type="submit">Add Item</button>
    </form>
  );
};

export default InventoryForm;
