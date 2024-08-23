import React, { useState } from 'react';
import Papa from 'papaparse';
import Notif from "../assests/Notif.png";
import MaskG from "../assests/MaskG.png";
import "./CsvParse.css";

const CsvParse = () => {
  const [csvData, setCsvData] = useState([]);
  

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        // Initialize selected tags with empty values
        const initializedData = result.data.map(row => ({
          ...row,
          selectedTags: '',
        }));
        setCsvData(initializedData);
      },
    });
  };

  const handleTagSelection = (e, index) => {
    const { value } = e.target;
    const updatedData = csvData.map((row, i) =>
      i === index ? { ...row, selectedTags: row.selectedTags+value } : row
    );
    setCsvData(updatedData);
  };

  return (
    <>
    <div className='nav-item'>
    <h2>Upload CSV </h2>
    <div className='logo'>
     <img src={Notif} alt="img" />
     <img src={MaskG} alt="img" />
    </div>
    </div>
    <div class="upload-container">
     
      <input className="inputC" type="file" accept=".csv" onChange={handleFileUpload} />
      </div>
      <div>
      {csvData.length > 0 && (
        <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Link</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Prefix</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Select Tags</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Selected Tags</th>
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{row.id}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}><a href={`http://${row.links}`}>{row.links}</a></td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{row.prefix}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <select
                    onChange={(e) => handleTagSelection(e, index)}
                    value={row.selectedTags}
                  >
                    <option value="">Select Tag</option>
                    {row['select tags'] && row['select tags'].split(',').map((tag, i) => (
                      <option key={i} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{row.selectedTags}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
};

export default CsvParse;
