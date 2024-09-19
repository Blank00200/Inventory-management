import React from 'react';
import './InventoryList.css'; // Import the updated CSS for the list

const InventoryList = ({ items, removeItem, editItem }) => {
  return (
    <div className="inventory-list">
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="11" className="no-items">No Items Recorded</td>
            </tr>
          ) : (
            items.map((item, index) => (
              <tr key={index}>
                <td>{item.serialNo}</td>
                <td>{item.date}</td>
                <td>{item.fromWhere}</td>
                <td>{item.indexNo}</td>
                <td>{item.itemNo}</td>
                <td>{item.name}</td>
                <td>{item.causeOfConsumable}</td>
                <td>{item.consumableDate}</td>
                <td>{item.balance}</td>
                <td>{item.remark}</td>
                <td>
                  <button onClick={() => removeItem(index)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
