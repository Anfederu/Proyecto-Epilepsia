import React from "react";

const RequestPredictionTableComponents = ({mri,eeg,arn}) => {
    const headers = ['Nombre del examen','Tipo', 'Formato' ,'Fecha']
  return (
    <div>
      <table class="styled-table-rp">
        <thead>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td className="file-rp">{mri.storage_path}</td>
              <td>MRI</td>
              <td>.zip</td>
              <td>{mri.date}</td>            
            </tr>
            <tr>
              <td className="file-rp">{eeg.storage_path}</td>
              <td>EEG</td>
              <td>.edf</td>
              <td>{eeg.date}</td>            
            </tr>
            <tr>
              <td className="file-rp">{arn.storage_path}</td>
              <td>Micro ARNs</td>
              <td>.txt</td>
              <td>{arn.date}</td>            
            </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default RequestPredictionTableComponents;
