import React, { useState } from 'react';
import InventoryForm from './components/InventoryForm';
import InventoryList from './components/InventoryList';
import * as XLSX from 'xlsx';
import './App.css'; // Import the CSS file

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(items);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Inventory');
    XLSX.writeFile(workbook, 'inventory.xlsx');
  };

  return (
    <div className="App">
      <h1 className="app-title">Inventory Management</h1>
      <InventoryForm addItem={addItem} />
      <InventoryList items={items} removeItem={removeItem} />
      <button className="download-btn" onClick={downloadExcel}>Download Excel</button>
    </div>
  );
}

export default App;
