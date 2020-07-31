import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <h1>Form Pembelian Buah</h1>
      <div className="table">
        <table>
          <tr>
            <td className="left column1 mb-5">Nama Pelanggan</td>
            <td>
              <input type="text" className="left mb-10"/>
            </td>
          </tr>
          <tr>
            <td className="left bottom">Daftar Item</td>
            <td className="left">
              <input type="checkbox" className="left" /> Semangka
              <div className="break"></div>
              <input type="checkbox" className="left" /> Jeruk
              <div className="break"></div>
              <input type="checkbox" className="left" /> Nanas
              <div className="break"></div>
              <input type="checkbox" className="left" /> Salak
              <div className="break"></div>
              <input type="checkbox" className="left" /> Anggur
            </td>
          </tr>
          <tr>
            <td className="left">
              <button className="btn">Kirim</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
